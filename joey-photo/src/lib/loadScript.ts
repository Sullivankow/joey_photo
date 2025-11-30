/*
 * Helpers pour charger et retirer dynamiquement des scripts externes.
 * Utiles pour ne pas inclure des trackers (analytics, marketing)
 * avant que l'utilisateur n'ait donné son consentement.
 *
 * - `loadScript(src, id?)` : ajoute une balise <script> dans le <head>.
 *    Si un `id` est fourni et existe déjà, la fonction ne fait rien.
 *
 * - `removeScript(id)` : supprime la balise <script> identifiée par `id`.
 *    Cela permet d'enlever un tracker si l'utilisateur retire son consentement.
 */
export function loadScript(src: string, id?: string) {
  // si un identifiant est fourni et que le script existe déjà, ne rien faire
  if (id && document.getElementById(id)) return
  const s = document.createElement('script')
  s.src = src
  s.async = true
  if (id) s.id = id
  document.head.appendChild(s)
}

/**
 * Supprime le script identifié par `id` s'il existe dans le document.
 * Note : cela retire la balise, mais n'efface pas nécessairement toutes
 * les variables globales initialisées par le script (ex: window.gtag).
 */
export function removeScript(id: string) {
  const el = document.getElementById(id)
  if (el) el.remove()
}
