import React from 'react'

// Images locales utilisées par la galerie (placer les fichiers dans `public/`)
const basePhotos = ['/animal1.jpg', '/animal2.jpg', '/boudoir%20.jpg']

// Répéter chaque image 3 fois pour obtenir plus de vignettes
const photos = basePhotos.flatMap((p) => new Array(3).fill(p))

// Pattern de "spans" pour varier la hauteur des tuiles (masonry)
const spans = [3, 2, 4, 2, 3, 2, 3, 2, 4]

/**
 * MasonryGrid
 * Composant simple affichant une grille de vignettes en style masonry.
 */
const MasonryGrid: React.FC = () => {
  return (
    <main className="bg-white dark:bg-[#1B1B1B] h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        {/* En-tête : titre, description et action */}
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
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
          {photos.map((src, i) => (
            <figure
              key={`${i}-${src}`}
              style={{ gridRowEnd: `span ${spans[i % spans.length] || 2}` }}
              className="overflow-hidden rounded-lg"
            >
              <img src={src} alt={`Galerie ${i + 1}`} loading="lazy" className="w-full h-full object-cover block" />
            </figure>
          ))}
        </div>
      </div>
    </main>
  )
}

export default MasonryGrid