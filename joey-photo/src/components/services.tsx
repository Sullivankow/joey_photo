import React, { useEffect, useRef } from 'react'

const Services: React.FC = () => {
  const sections = [
    {
      title: 'Portraits (mini budget)',
      items: [
        { label: '5 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 70' },
        { label: '10 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 130' },
        { label: '20 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 240' },
        { label: 'Tirage supplémentaire unité', price: '€ 12' },
        { label: 'Book photo → Sur demande, au devis', price: '' },
      ],
    },
    {
      title: 'Animaliers',
      items: [
        { label: '5 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 90' },
        { label: '10 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 170' },
        { label: '20 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 310' },
        { label: 'Tirage supplémentaire unité', price: '€ 12' },
        { label: 'Book animalier → Sur demande, au devis', price: '' },
      ],
    },
    {
      title: 'Événements Privés',
      subtitle: '(Anniversaires, baptêmes, soirées, etc.)',
      items: [
        { label: '5 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 140' },
        { label: '10 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 230' },
        { label: '20 photo + 1 tirage A4 offert + Galerie Privé', price: '€ 390' },
        { label: 'Tirage supplémentaire unité', price: '€ 12' },
        { label: 'Reportage complet → Sur demande, au devis', price: '' },
      ],
    },
  ]
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const mq = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (mq?.matches) {
      for (const el of Array.from(container.querySelectorAll<HTMLElement>('[data-animate]'))) {
        el.classList.remove('opacity-0', 'translate-y-16', 'scale-95')
        el.classList.add('opacity-100', 'translate-y-0', 'scale-100')
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-16', 'scale-95')
            el.classList.add('opacity-100', 'translate-y-0', 'scale-100')
            obs.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 }
    )

    const items = container.querySelectorAll('[data-animate]')
    for (const it of Array.from(items)) observer.observe(it)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white py-16" id="services">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-playfair italic text-[#213547]">T a r i f s</h2>
          <p className="mt-6 text-lg text-[#D4C09E] italic">Photographie — une passion avant tout</p>
        </header>

        <div className="space-y-10" ref={containerRef}>
          {sections.map((sec, idx) => (
            <article
              key={sec.title}
              data-animate
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="group rounded-lg border border-slate-100 p-6 bg-gray-50 opacity-0 translate-y-16 scale-95 transition-transform transition-opacity duration-1000 ease-out hover:shadow-lg hover:-translate-y-1"
            >
              <div className="md:flex md:items-start md:justify-between md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl font-playfair italic text-[#213547]">{sec.title}</h3>
                  {sec.subtitle && <p className="text-sm text-gray-600 mt-1">{sec.subtitle}</p>}

                  <ul className="mt-6 space-y-3 text-gray-700">
                    {sec.items.map((it) => (
                      <li key={it.label} className="flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-700 md:flex-1">{it.label}</span>
                        <div className="ml-4 md:pl-6 md:border-l md:border-slate-200">
                          <span className="text-sm text-[#D4C09E] font-medium">{it.price ? `${it.price.replace('€', '').trim()} €` : ''}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

         
            
            

            <div className="mt-6 text-center">
              <a
                href="#contact"
                aria-label="Aller au formulaire de contact"
                className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#BFA776] active:bg-[#A98F63] md:px-8 md:py-3 md:text-base"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Réserver
              </a>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Services