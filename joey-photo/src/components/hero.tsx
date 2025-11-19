'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Accueil', href: '#' },
  { name: 'À propos', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'FAQ', href: '#' },
]

const photos = [
  '/animal1.jpg',
  '/animal2.jpg',
  encodeURI('/boudoir .jpg'),
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % photos.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setIndex((i) => (i + 1) % photos.length)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Images d'arrière-plan (carrousel) */}
      <div className="absolute inset-0">
        {photos.map((p, i) => (
          <img
            key={p}
            src={p}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Superposition sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* En-tête en haut avec logo centré */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Global" className="flex items-center justify-center p-4 lg:p-6 relative">
            {/* Menu centré sur desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold text-white/90 hover:text-white px-2">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Bouton menu mobile (visible sur small) */}
            <div className=" lg:hidden absolute left-6 top-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2.5 text-white/90 bg-black/30"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Contenu principal (titre et CTA) */}
      <div className="relative z-10 flex min-h-screen">
        <div className="max-w-7xl mx-auto w-full flex items-center">
          <div className="w-full lg:w-1/2 p-8 lg:p-20 text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">Capturing light & emotion</h1>
            <p className="text-lg lg:text-xl text-white/90 mb-6">Photographe professionnel — portraits, mariages, éditorial.</p>
            <div className="flex gap-4">
              <a href="#portfolio" className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow transition-colors duration-150 hover:bg-[#D4C09E] hover:text-white">Voir le portfolio</a>
              <a href="#contact" className="rounded-md px-5 py-3 text-sm font-semibold text-white border border-white/20">Contact</a>
            </div>
          </div>

          {/* Espace vide à droite sur grand écran pour laisser l'image visible */}
          <div className="hidden lg:block w-1/2" />
        </div>
      </div>

      {/* Contrôles du carrousel (précédent / suivant) */}
      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button onClick={prev} className="m-4 p-2 rounded-full bg-black/40 text-white/90 hover:bg-black/60">
          ‹
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button onClick={next} className="m-4 p-2 rounded-full bg-black/40 text-white/90 hover:bg-black/60">
          ›
        </button>
      </div>

      {/* Dialogue du menu mobile */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <div />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-white/90"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="block text-white text-lg font-medium">
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}