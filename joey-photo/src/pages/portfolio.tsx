import Footer from '../components/footer'

const images = [
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1080', alt: 'Nature 1' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1080', alt: 'Nature 2' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1080', alt: 'Nature 3' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1080', alt: 'Nature 4' },
  { src: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1080', alt: 'Nature 5' },
  { src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1080', alt: 'Nature 6' },
  { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1080', alt: 'Nature 7' },
  { src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1080', alt: 'Nature 8' },
  { src: 'https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=1080', alt: 'Portrait 1' },
  { src: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1080', alt: 'Portrait 2' },
  { src: 'https://images.unsplash.com/photo-1502754400466-c87ff3039da7?q=80&w=1080', alt: 'Street 1' },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1080', alt: 'Nature 1' },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="pt-12 pb-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-900 mb-3">Portfolio</h2>
          <p className="mt-6 text-lg text-[#D4C09E] italic max-w-2xl mx-auto">Sélection de projets et séries photographiques — portraits, paysages et reportages. Cliquez sur une image pour l'ouvrir en grand.</p>
            {/* buttons moved after gallery */}
        </div>
      </header>

      <main className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-lg bg-gray-100">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                  <div className="w-full flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">{img.alt}</span>
                    <a href={img.src} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#D4C09E] hover:bg-[#BFA776] text-white text-sm">
                      Voir
                    </a>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a href="/#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#D4C09E] hover:bg-[#BFA776] active:bg-[#A98F63] text-black hover:text-white transition-colors font-medium">
              Prendre rendez-vous
            </a>
            <a href="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#213547] text-[#D4C09E] hover:bg-[#182832] hover:text-white transition-colors font-medium">
              Retour
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

