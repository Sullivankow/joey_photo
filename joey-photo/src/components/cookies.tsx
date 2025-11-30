import React, { useEffect, useState } from 'react'
import { getConsent, setConsent, onConsentChange } from '../lib/consent'
import type { Consent } from '../lib/consent'
import { loadScript, removeScript } from '../lib/loadScript'

/*
 * Composant `CookiesBanner`
 * -------------------------
 * Ce composant affiche une bannière de consentement aux cookies.
 * Il permet :
 * - d'accepter/refuser rapidement tous les cookies (boutons 'Accepter tout' / 'Refuser'),
 * - de gérer finement les préférences (analytics / marketing) via une section "Gérer",
 * - de stocker le consentement localement (localStorage) en utilisant les helpers
 *   fournis dans `src/lib/consent.ts`.
 *
 * Comportement important :
 * - Les trackers externes (ex: Google Analytics) ne sont chargés qu'après
 *   un consentement explicite (via `loadScript`).
 * - Le composant s'abonne aux changements globaux de consentement pour
 *   synchroniser son état et charger/retirer le script analytics en conséquence.
 */

export default function CookiesBanner() {
  const [consent, setLocalConsent] = useState<Consent | null>(null)
  const [openPrefs, setOpenPrefs] = useState(false)
  const [analyticsPref, setAnalyticsPref] = useState(false)
  const [marketingPref, setMarketingPref] = useState(false)

  useEffect(() => {
    const c = getConsent()
    setLocalConsent(c)
    // initialize local prefs from existing consent
    setAnalyticsPref(Boolean(c?.analytics))
    setMarketingPref(Boolean(c?.marketing))

    // si l'utilisateur a déjà accepté les analytics, on charge le script
    // et on initialise une fonction minimale `gtag` pour garder la compatibilité
    if (c?.analytics) {
      // placeholder : remplacer G-XXXXXXX par votre ID GA/GA4
      loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX', 'gtag-js')
      ;(window as any).dataLayer = (window as any).dataLayer || []
      function gtag() { (window as any).dataLayer.push(arguments) }
      ;(window as any).gtag = gtag
      ;(window as any).gtag('js', new Date())
      ;(window as any).gtag('config', 'G-XXXXXXX', { anonymize_ip: true })
    }

    // s'abonner aux changements de consentement pour ajuster l'état local
    // et charger/retirer dynamiquement le script analytics si nécessaire
    const off = onConsentChange((c) => {
      setLocalConsent(c)
      setAnalyticsPref(Boolean(c?.analytics))
      setMarketingPref(Boolean(c?.marketing))
      if (c?.analytics) {
        loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX', 'gtag-js')
      } else {
        removeScript('gtag-js')
      }
    })
    return off
  }, [])

  function acceptAll() {
    const c: Consent = { essential: true, analytics: true, marketing: true }
    setConsent(c)
  }

  function refuseAll() {
    const c: Consent = { essential: true, analytics: false, marketing: false }
    setConsent(c)
  }

  function savePrefs(analytics: boolean, marketing: boolean) {
    const c: Consent = { essential: true, analytics, marketing }
    setConsent(c)
    setOpenPrefs(false)
  }

  // Le composant retourne `null` si un consentement existe déjà,
  // car la bannière n'a plus à être affichée.

  // si un consentement existe, ne pas afficher la bannière
  if (consent) return null

  // Bannière en bas de page, centrée horizontalement
  return (
    <div
      className="fixed left-0 right-0 bottom-4 z-50 flex justify-center px-4"
      role="region"
      aria-label="Bannière de cookies"
    >
      <div className="w-full max-w-3xl rounded-xl bg-white p-4 shadow-lg ring-1 ring-slate-200 pointer-events-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <h3 id="cookie-title" className="text-lg font-semibold text-[#213547]">Gestion des cookies</h3>
            <p className="mt-2 text-sm text-[#213547]">
              Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous les
              cookies statistiques et marketing ?
            </p>
            <div className="mt-3 text-xs text-[#7b6b63]">
              <a href="/mentions-legales" className="underline">En savoir plus</a>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-2 md:w-72">
            <button
              onClick={acceptAll}
              className="w-full rounded-md bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-white"
            >
              Accepter tout
            </button>
            <button
              onClick={() => setOpenPrefs(true)}
              className="w-full rounded-md px-4 py-2 text-sm border border-[#D4C09E] text-[#213547] bg-white"
            >
              Gérer
            </button>
            <button
              onClick={refuseAll}
              className="w-full rounded-md px-4 py-2 text-sm border border-slate-200 text-[#213547] bg-white"
            >
              Refuser
            </button>
          </div>
        </div>

        {openPrefs && (
          <div className="mt-6 border-t pt-4">
            <h4 className="text-sm font-semibold text-[#213547]">Préférences</h4>
            <div className="mt-3 flex flex-col gap-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={analyticsPref}
                  onChange={(e) => setAnalyticsPref(e.target.checked)}
                  id="analytics-pref"
                />
                <span className="text-sm text-[#213547]">Cookies statistiques</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={marketingPref}
                  onChange={(e) => setMarketingPref(e.target.checked)}
                  id="marketing-pref"
                />
                <span className="text-sm text-[#213547]">Cookies marketing</span>
              </label>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => savePrefs(analyticsPref, marketingPref)}
                  className="rounded-md bg-[#D4C09E] px-3 py-2 text-sm font-semibold text-white"
                >
                  Enregistrer
                </button>
                <button onClick={() => setOpenPrefs(false)} className="rounded-md px-3 py-2 text-sm">Annuler</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


