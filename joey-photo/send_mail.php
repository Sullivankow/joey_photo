<?php
// send_mail.php
// Adapté pour être utilisé avec le front-end React : accepte du JSON ou un POST form,
// et renvoie toujours du JSON.
// Utilise PHPMailer+SMTP si des identifiants SMTP sont fournis via les variables d'environnement,
// sinon utilisation de la fonction PHP mail() en secours.

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Remarque CORS : en développement local, vous pouvez autoriser l'origine de Vite
// (http://localhost:5173) en décommentant les headers ci-dessous.
// header('Access-Control-Allow-Origin: http://localhost:5173');
// header('Access-Control-Allow-Headers: Content-Type');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

header('Content-Type: application/json; charset=utf-8');

$errors = [];

// Limitation basique par IP en utilisant des fichiers temporaires
// (amélioration possible : utiliser une base de données ou redis)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rl_file = sys_get_temp_dir() . '/contact_rl_' . md5($ip);
$limit_seconds = 5; // minimal interval between requests
if (file_exists($rl_file) && (time() - filemtime($rl_file) < $limit_seconds)) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Trop de requêtes. Réessayez dans quelques secondes.']);
    exit;
}

$errors = [];

// Lecture des données envoyées (préférence pour JSON)
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    // fallback vers données encodées en formulaire (application/x-www-form-urlencoded)
    $data = $_POST;
}

$name = trim($data['name'] ?? $data['nom'] ?? '');
$email = trim($data['email'] ?? '');
$phone_raw = trim($data['phone'] ?? $data['telephone'] ?? '');
$message = trim($data['message'] ?? '');
$honeypot = trim($data['website'] ?? $data['website_field'] ?? '');

// Si le honeypot est rempli -> accepter silencieusement (tromper les bots)
if ($honeypot !== '') {
    // update rate-limit timestamp and return success
    @touch($rl_file);
    echo json_encode(['ok' => true]);
    exit;
}

 // validations basiques
if (strlen($name) < 2) {
    $errors[] = 'Le nom est requis.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email invalide.';
}
if (strlen($message) < 5) {
    $errors[] = 'Le message est trop court.';
}

// nettoyage / validation du téléphone si fourni
$phone = '';
if ($phone_raw !== '') {
    $phone = preg_replace('/[^0-9+()\\s-]/', '', $phone_raw);
    $digits = preg_replace('/\\D/', '', $phone);
    if (strlen($digits) < 6 || strlen($phone) > 25) {
        $errors[] = 'Téléphone invalide.';
    }
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

// construction du corps du message (texte brut)
function esc($s) { return trim(htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')); }
$plain = "Nom: " . esc($name) . "\n";
$plain .= "Email: " . esc($email) . "\n";
$plain .= "Téléphone: " . ($phone !== '' ? esc($phone) : 'Non fourni') . "\n\n";
$plain .= "Message:\n" . esc($message) . "\n";

// préparation d'une version HTML simple
$html = '<div style="font-family:Arial,sans-serif;color:#223;">'
    . '<h2>Nouveau message de contact</h2>'
    . '<p><strong>Nom:</strong> ' . esc($name) . '<br>'
    . '<strong>Email:</strong> ' . esc($email) . '<br>'
    . '<strong>Téléphone:</strong> ' . ($phone !== '' ? esc($phone) : 'Non fourni') . '</p>'
    . '<div style="background:#fff;padding:12px;border-radius:6px;">' . nl2br(esc($message)) . '</div>'
    . '</div>';

// mise à jour du timestamp de limitation (rate-limit)
@touch($rl_file);

$smtp_user = getenv('SMTP_USER') ?: getenv('MAIL_USER') ?: '';
$smtp_pass = getenv('SMTP_PASS') ?: getenv('MAIL_PASS') ?: '';
$smtp_host = getenv('SMTP_HOST') ?: 'ssl0.ovh.net';
$smtp_port = getenv('SMTP_PORT') ?: 465;
$smtp_secure = getenv('SMTP_SECURE') ?: 'ssl'; // 'ssl' or 'tls'
$from_address = getenv('MAIL_FROM') ?: $smtp_user ?: 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$to_address = 'sundly@live.fr'; // adresse de réception forcée

// helper: nettoyage des entêtes
function sanitizeHeader($s) { return preg_replace('/(\r|\n|%0A|%0D)/i', '', $s); }

// Déterminer la méthode d'envoi : PHPMailer+SMTP si identifiants fournis, sinon mail()

// Exception spécifique lorsque PHPMailer n'est pas disponible
class PHPMailerUnavailableException extends \Exception {}

if ($smtp_user && $smtp_pass) {
    // tenter d'utiliser PHPMailer
    try {
        // si PHPMailer n'est pas chargé, tenter d'inclure l'autoload de composer
        if (!class_exists(\PHPMailer\PHPMailer\PHPMailer::class) && file_exists(__DIR__ . '/vendor/autoload.php')) {
            require_once __DIR__ . '/vendor/autoload.php';
        }

        if (!class_exists(\PHPMailer\PHPMailer\PHPMailer::class)) {
            // cas attendu : la bibliothèque n'est pas installée
            throw new PHPMailerUnavailableException('PHPMailer non disponible.');
        }

        $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->CharSet = 'UTF-8';
        $mail->Host = $smtp_host;
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_user;
        $mail->Password = $smtp_pass;
        $mail->SMTPSecure = $smtp_secure;
        $mail->Port = (int)$smtp_port;

        $mail->setFrom($from_address, sanitizeHeader($from_address));
        $mail->addAddress($to_address);
        $mail->addReplyTo($email, sanitizeHeader($name));

        $mail->isHTML(true);
        $mail->Subject = 'Contact site — ' . sanitizeHeader($name);
        $mail->Body = $html;
        $mail->AltBody = $plain;

        $mail->send();

        echo json_encode(['ok' => true, 'message' => 'Message envoyé (SMTP)']);
        exit;
    } catch (PHPMailerUnavailableException $e) {
        // PHPMailer absent : journaliser et passer au fallback mail()
        error_log('PHPMailer manquant : ' . $e->getMessage());
    } catch (\PHPMailer\PHPMailer\Exception $e) {
        // erreur spécifique à PHPMailer (ex : auth SMTP) -> journaliser
        error_log('Erreur PHPMailer (SMTP) : ' . $e->getMessage());
    } catch (\Exception $e) {
        // autre erreur inattendue
        error_log('Erreur lors de l\'envoi via PHPMailer : ' . $e->getMessage());
    }
}

// secours : envoi via la fonction mail() de PHP
$subject = 'Contact site — ' . sanitizeHeader($name);
$headers = 'From: ' . sanitizeHeader($name) . ' <' . sanitizeHeader($from_address) . ">\r\n";
$headers .= 'Reply-To: ' . sanitizeHeader($email) . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8\r\n';

$sent = @mail($to_address, $subject, $plain, $headers);
if ($sent) {
    echo json_encode(['ok' => true, 'message' => 'Message envoyé (mail())']);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Erreur lors de l\'envoi.']);
}
