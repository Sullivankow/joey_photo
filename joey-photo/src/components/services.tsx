import React from 'react'

const Services: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">S e r v i c e s</h2>
          <p className="mt-4 text-[#D4C09E] max-w-2xl mx-auto">Prestations professionnelles de photographie — mariage, portrait, éditorial. Chaque séance est personnalisée pour raconter votre histoire.</p>
        </header>

        <div className="grid gap-8 sm:grid-cols-3">
          {/* Mariage */}
          <article className="border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 bg-white flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mariage</h3>
              <p className="text-sm text-gray-600 mb-4">Reportage complet, préparation du planning, photos de couple et soirée — pour conserver les émotions de ce jour unique.</p>

              <div className="mt-6">
                <ul role="list" className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Reportage journée entière</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Galerie privée haute-résolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Album et tirages sur demande</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-800">Sur devis</div>
                  <div className="text-sm text-gray-600">Contactez pour un tarif personnalisé</div>
                </div>
               
                  {/* Bouton d'action (accessible) */}
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#BFA776] active:bg-[#A98F63] md:px-8 md:py-3 md:text-base"
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Réserver
                </button>
              </div>
            </div>
          </article>

          {/* Portrait */}
          <article className="border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 bg-white flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Portrait</h3>
              <p className="text-sm text-gray-600 mb-4">Séances studio ou extérieur — portraits individuels, famille, corporate. Mise en lumière soignée et retouches naturelles.</p>

              <div className="mt-6">
                <ul role="list" className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Séance 1h (studio ou extérieur)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Retouches professionnelles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Choix de tenues et conseils de pose</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-800">À partir de €120</div>
                  <div className="text-sm text-gray-600">(séance + retouches)</div>
                </div>
                {/* Bouton d'action (accessible) */}
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#BFA776] active:bg-[#A98F63] md:px-8 md:py-3 md:text-base"
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Réserver
                </button>
                
              </div>
            </div>
          </article>

          {/* Éditorial */}
          <article className="border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 bg-white flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Éditorial & Événement</h3>
              <p className="text-sm text-gray-600 mb-4">Couverture d'événements, sessions éditoriales et collaborations créatives — images pensées pour publication et communication.</p>

              <div className="mt-6">
                <ul role="list" className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Couverture d'événements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Images prêtes pour publication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4C09E] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                    </svg>
                    <span>Collaboration créative et moodboards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-800">Sur devis</div>
                  <div className="text-sm text-gray-600">Contact pour brief et offre</div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#BFA776] active:bg-[#A98F63] md:px-8 md:py-3 md:text-base"
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Réserver
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services