import React, { useEffect, useRef } from 'react'

// Images locales utilisées par la galerie (placer les fichiers dans `public/`)
const basePhotos = [
  { src: '/animal1.jpg', title: 'Nature' },
  { src: '/animal2.jpg', title: 'Portrait' },
  { src: '/boudoir.jpg', title: 'Mariage' },
]

// Répéter chaque image 3 fois pour obtenir plus de vignettes (chaque entrée garde sa catégorie)
const photos = basePhotos.flatMap((p) => new Array(3).fill(p))

// Pattern de "spans" pour varier la hauteur des tuiles (masonry)
const spans = [3, 2, 4, 2, 3, 2, 3, 2, 4]

/**
 * MasonryGrid
 * Composant simple affichant une grille de vignettes en style masonry.
 */
const MasonryGrid: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Respecter la préférence reduce-motion
    const mq = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (mq?.matches) {
      // rendre visibles immédiatement
      for (const el of Array.from(container.querySelectorAll('figure'))) {
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

    const items = container.querySelectorAll('figure')
    for (const it of Array.from(items)) observer.observe(it)

    return () => observer.disconnect()
  }, [])

  return (
    <main ref={containerRef} className="bg-white dark:bg-[#1B1B1B] h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        {/* En-tête : titre, description et action */}
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white"> G a l l e r i e s</h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              DES MOMENTS DONT VOUS VOUS SOUVENIREZ
            </p>
          </div>

          {/* Bouton d'action (accessible) */}
          <button
            type="button"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-200 transition hover:bg-gray-100 active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Voir tout
          </button>
        </div>

        {/* Grille masonry : grid + auto-rows + spans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[12rem]">
          {photos.map((item, i) => {
            const { src, title } = item
            return (
              <figure
                key={`${i}-${src}`}
                style={{ gridRowEnd: `span ${spans[i % spans.length] || 2}`, transitionDelay: `${i * 100}ms` }}
                className="group relative overflow-hidden rounded-lg opacity-0 translate-y-16 scale-95 transition-transform transition-opacity duration-1000 ease-out"
              >
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover block transform-gpu transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay sombre couvrant toute la vignette ; s'intensifie au hover */}
                <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/60" />

                {/* Titre centré ; léger effet au hover */}
                <figcaption className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                  <div className="text-center transform transition-transform duration-700 group-hover:scale-105">
                    <span className="text-lg md:text-xl font-semibold text-white tracking-wide">{title}</span>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default MasonryGrid