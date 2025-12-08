import Footer from '../components/footer'
import { useEffect } from 'react'

export default function MentionsLegales() {
  return (
    <div id="mentions-legales" className="min-h-screen bg-white text-[#213547]">
      <Meta />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-playfair italic text-[#213547]">Mentions légales</h1>
          <p className="mt-4 text-lg text-[#D4C09E] italic">Informations légales et identité du site</p>
        </header>
        <section className="prose prose-lg max-w-none text-[#213547]">
          <h2 className="font-playfair italic">1. Informations légales</h2>
          <p><strong>Nom commercial :</strong> GRASSYPHOTOGRAPHY</p>
          <p><strong>Statut :</strong> Micro-entreprise</p>
          <p><strong>Responsable de la publication :</strong> grassy djoe</p>

          <p><strong>Adresse professionnelle :</strong> 17600 Charente-Maritime</p>
          <p><strong>Numéro SIRET :</strong> 99370788400017</p>
          <p><strong>Téléphone :</strong> <a className="text-[#D4C09E]" href="tel:+33699363143">06 99 36 31 43</a></p>
          <p><strong>E-mail :</strong> <a className="text-[#D4C09E]" href="mailto:grassyphotographie@gmail.com">grassyphotographie@gmail.com</a></p>
          <p><strong>Directeur de la publication :</strong></p>

          <h2 className="font-playfair italic">2. Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, photographies, graphismes, logo, etc.) sont la
            propriété exclusive de GRASSYPHOTOGRAPHY, sauf mention contraire. Toute reproduction, modification, diffusion ou
            exploitation sans autorisation préalable est strictement interdite.
          </p>

          <h2 className="font-playfair italic">3. Données personnelles (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679), les informations
            recueillies sur le site GRASSYPHOTOGRAPHY sont enregistrées dans un fichier informatisé géré par le responsable du
            traitement : Grassy djoe, photographe professionnel.
          </p>

          <p><strong>Données collectées :</strong></p>
          <ul>
            <li>Nom, prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Message ou informations liées à une demande de prestation</li>
          </ul>

          <p><strong>Finalité du traitement :</strong> Ces données sont utilisées uniquement pour répondre aux demandes de contact, gérer les réservations et assurer le suivi des prestations.</p>

          <p><strong>Durée de conservation :</strong> Les données sont conservées pendant une durée maximale de 5 ans après le dernier contact, sauf demande de suppression.</p>

          <p><strong>Transmission des données :</strong> Aucune donnée personnelle n’est transmise à des tiers sans le consentement explicite de la personne concernée.</p>

          <p><strong>Vos droits :</strong> Vous disposez d’un droit d’accès, de rectification, d’effacement et de portabilité de vos données, ainsi que du droit d’opposition au traitement. Pour exercer vos droits, contactez : <a className="text-[#D4C09E]" href="mailto:grassyphotographie@gmail.com">grassyphotographie@gmail.com</a></p>

          <h2 className="font-playfair italic">4. Cookies</h2>
          <p>Le site peut utiliser des cookies destinés à améliorer la navigation et mesurer la fréquentation. L’utilisateur peut désactiver les cookies à tout moment via les paramètres de son navigateur.</p>

          <h2 className="font-playfair italic">5. Responsabilité</h2>
          <p>GRASSYPHOTOGRAPHY s’efforce de fournir des informations exactes et à jour, mais ne saurait être tenu responsable des erreurs ou omissions présentes sur le site, ni de l’utilisation qui pourrait en être faite.</p>

          <h2 className="font-playfair italic">6. Droit applicable</h2>
          <p>Le présent site et ses mentions légales sont soumis au droit français. Tout litige sera soumis à la juridiction compétente.</p>

          <div className="mt-8">
            <a href="/" className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-black hover:bg-[#BFA776] hover:text-white transition">Retour à l'accueil</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function Meta() {
  useEffect(() => {
    document.title = 'Mentions légales — Joey Grassy'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', 'Mentions légales et informations légales du site Joey Grassy Photographie.')
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', 'https://www.grassyphotographie.fr/mentions-legales')
  }, [])
  return null
}
