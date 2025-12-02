import Footer from '../components/footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const images = [
  { src: '/pf1.jpg', alt: 'Portrait 1' },
  { src: '/pf2.jpg', alt: 'Portrait 2' },
  { src: '/pf3.jpg', alt: 'Portrait 3' },
  { src: '/pf4.jpg', alt: 'Portrait 4' },
  { src: '/pf5.jpg', alt: 'Portrait 5' },
  { src: '/pf6.jpg', alt: 'Portrait 6' },
  { src: '/pf7.jpg', alt: 'Portrait 7' },
  { src: '/pf8.jpg', alt: 'Portrait 8' },
  { src: '/pf9.jpg', alt: 'Portrait 9' },
  { src: '/pf10.jpg', alt: 'Portrait 10' },
  { src: '/pf11.jpg', alt: 'Portrait 11' },
  { src: '/pf12.jpg', alt: 'Portrait 12' },
]

export default function Portfolio() {
  const navigate = useNavigate()

  function goToContact() {
    // navigate to home then scroll to contact section
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* mettre à jour le titre et meta description pour cette page */}
      {/* useEffect ci‑dessous pour modifier le DOM */}
      <InnerMeta />
      <header className="pt-12 pb-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-900 mb-3"> P o r t f o l i o</h2>
          <p className="mt-6 text-lg text-[#D4C09E] italic max-w-2xl mx-auto">Sélection de projets et séries photographiques — portraits, paysages et reportages. Cliquez sur une image pour l'ouvrir en grand.</p>
            {/* buttons moved after gallery */}
        </div>
      </header>

      <main className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-lg bg-gray-100">
                <img src={img.src} alt={img.alt} className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
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
            <button onClick={goToContact} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#D4C09E] hover:bg-[#BFA776] active:bg-[#A98F63] text-white hover:text-white transition-colors font-medium">
              Prendre rendez-vous
            </button>
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

function InnerMeta() {
  useEffect(() => {
    document.title = 'Portfolio — Joey Grassy'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', 'Portfolio photo de Joey Grassy — portraits, paysages, reportages. Découvrez une sélection de projets.')
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', 'https://votre-domaine.exemple/portfolio')
  }, [])
  return null
}

