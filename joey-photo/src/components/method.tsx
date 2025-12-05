export default function Method() {
  const items = [
    {
      title: 'Premier échange & découverte',
      desc: "Nous discutons ensemble de votre projet, de vos envies et du style recherché afin de créer une séance qui vous ressemble.",
      icon: (
        <svg className="h-6 w-6 text-[#213547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.99 9.99 0 01-4-.8L3 20l.8-4A9.99 9.99 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Préparation & conseils personnalisés',
      desc: "Je vous guide sur les tenues, les lieux, l'ambiance et les détails qui sublimeront vos photos.",
      icon: (
        <svg className="h-6 w-6 text-[#213547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v4a1 1 0 001 1h3l3 3v-3h6a1 1 0 001-1V7a4 4 0 00-4-4H7a4 4 0 00-4 4z" />
        </svg>
      ),
    },
    {
      title: 'La séance photo',
      desc: "Dans une atmosphère bienveillante, je vous accompagne pas à pas pour capturer des images naturelles, authentiques et lumineuses.",
      icon: (
        <svg className="h-6 w-6 text-[#213547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.4 15a7.95 7.95 0 00.6-3c0-4.418-4.03-8-9-8S2 7.582 2 12s4.03 8 9 8c1.02 0 2-.16 2.92-.46" />
        </svg>
      ),
    },
    {
      title: 'Sélection & retouches professionnelles',
      desc: "Vous recevez une galerie privée avec vos meilleures photos que je retouche avec soin pour un rendu esthétique et intemporel.",
      icon: (
        <svg className="h-6 w-6 text-[#213547]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V5a4 4 0 014-4h0a4 4 0 014 4v2" />
        </svg>
      ),
    },
  ]

  return (
    <section aria-labelledby="method-heading" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 id="method-heading" className="text-base font-semibold text-[#D4C09E]">Ma méthode</h3>
          <p className="mt-2 text-3xl font-semibold text-[#D4C09E]">Une approche humaine et professionnelle</p>
          <p className="mt-4 text-gray-600">Des échanges préparatoires à la livraison finale, je vous accompagne à chaque étape pour un résultat qui vous ressemble.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((it) => (
            <div key={it.title} className="flex gap-4 items-start bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#213547]/5 ring-1 ring-[#213547]/10">
                {it.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#213547]">{it.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}