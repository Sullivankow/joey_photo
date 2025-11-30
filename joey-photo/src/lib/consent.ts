// Ce fichier gère le stockage local du consentement aux cookies
// Il expose un type `Consent` et des helpers pour lire / écrire / écouter
// les changements de consentement depuis le navigateur.
//
// Les commentaires ci‑dessous expliquent le rôle de chaque fonction :

export type Consent = {
  // `essential` est toujours true : cookies strictement nécessaires
  essential: true
  // autorisation d'analytics (statistiques)
  analytics: boolean
  // autorisation de marketing (tracking / pubs)
  marketing: boolean
  // timestamp de sauvegarde (facultatif)
  ts?: number
}

// clé utilisée dans localStorage pour persister le consentement
const KEY = 'grassy_cookie_consent'

/**
 * Récupère le consentement sauvegardé dans localStorage.
 * Retourne `null` si aucun consentement n'est présent ou en cas d'erreur.
 */
export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    return JSON.parse(raw) as Consent
  } catch (e) {
    // en cas d'erreur de parsing ou d'accès à localStorage, renvoyer null
    return null
  }
}

/**
 * Sauvegarde le consentement en localStorage et émet un événement global
 * `grassy:consent` avec le détail du consentement. Les composants peuvent
 * écouter cet événement pour réagir immédiatement (ex : charger un script
 * analytics après consentement).
 */
export function setConsent(c: Consent) {
  c.ts = Date.now()
  localStorage.setItem(KEY, JSON.stringify(c))
  window.dispatchEvent(new CustomEvent('grassy:consent', { detail: c }))
}

/**
 * Supprime le consentement stocké (utile pour tests ou 'réinitialiser') et
 * émet l'événement avec `detail: null` pour signaler l'absence de consentement.
 */
export function clearConsent() {
  localStorage.removeItem(KEY)
  window.dispatchEvent(new CustomEvent('grassy:consent', { detail: null }))
}

/**
 * Permet de s'abonner aux changements de consentement.
 * `cb` reçoit la valeur courante (ou `null`) chaque fois que `setConsent`
 * ou `clearConsent` est appelé.
 * La fonction retourne un désabonnement à appeler pour enlever l'écoute.
 */
export function onConsentChange(cb: (c: Consent | null) => void) {
  const handler = (e: Event) => cb((e as CustomEvent).detail ?? null)
  window.addEventListener('grassy:consent', handler as EventListener)
  return () => window.removeEventListener('grassy:consent', handler as EventListener)
}
