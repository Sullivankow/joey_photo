import React from 'react'

const basePhotos = [
  '/animal1.jpg',
  '/animal2.jpg',
  encodeURI('/boudoir .jpg'),
]

// Répète chaque image 3 fois pour remplir la galerie
const photos = basePhotos.flatMap((p) => new Array(2).fill(p))

const MasonryGrid: React.FC = () => {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Galerie</h2>

        {/* Grille 'masonry' utilisant grid + auto-rows + spans variables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[12rem]">
          {(() => {
            // pattern de spans pour reproduire des hauteurs variées
            const spans = [3, 2, 4, 2, 3, 2, 3, 2, 4]
            return photos.map((src, i) => {
              const span = spans[i % spans.length] || 2
              return (
                <figure
                  key={src + i}
                  style={{ gridRowEnd: `span ${span}` }}
                  className="overflow-hidden rounded-lg"
                >
                  <img
                    src={src}
                    alt={`Galerie ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                </figure>
              )
            })
          })()}
        </div>
      </div>
    </main>
  )
}

export default MasonryGrid