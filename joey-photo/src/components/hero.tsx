 'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/logo.png'


const navigation = [
  { name: 'A c c u e i l', href: '#' },
  { name: 'H i s t o i r e', href: '#about' },
  { name: 'G a l l e r i e', href: '#galleries' },
  { name: 'T a r i f s', href: '#services' },
  { name: 'A v i s', href: '#avis' },
  { name: 'C o n t a c t', href: '#contact' },
  
]

const photos = [
  
  '/animal2.jpg',
  
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
    <div id="hero" className="relative min-h-screen overflow-hidden">
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
            {/* Menu centré sur desktop, logo inséré entre 'Services' et 'Portfolio' */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <a href={item.href} className="text-sm font-semibold text-white/90 hover:text-[#D4C09E] px-4 md:px-6">
                    {item.name}
                  </a>
                  {idx === 2 && (
                    <a href="/" aria-label="Accueil" className="flex items-center px-2">
                      <img src={logo} alt="Logo" className="h-12 md:h-30 w-auto" />
                    </a>
                  )}
                </React.Fragment>
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
            <h1 style={{ color: '#fff' }} className="text-4xl lg:text-6xl font-bold leading-tight mb-4 text-white">Capturer la lumière et l'émotion</h1>
            <p className="text-lg lg:text-xl text-white/90 mb-6">Photographe professionnel — portraits, mariages, éditorial.</p>
            <div className="flex gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#BFA776] active:bg-[#A98F63] md:px-8 md:py-3 md:text-base"
                aria-label="Voir le portfolio"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Voir le portfolio
              </Link>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white border border-white/20">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 18.5 6h-13A2.5 2.5 0 0 0 3 8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 8.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Contact
              </a>
            </div>
          </div>

          {/* Espace vide à droite sur grand écran pour laisser l'image visible */}
          <div className="hidden lg:block w-1/2" />
        </div>
      </div>

      {/* Contrôles du carrousel (précédent / suivant) */}
      <div className="absolute inset-y-0 left-0 hidden md:flex items-center z-20">
        <button
          onClick={prev}
          aria-label="Précédent"
          title="Précédent"
          className="m-4 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 shadow-lg backdrop-blur-sm transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 hidden md:flex items-center z-20">
        <button
          onClick={next}
          aria-label="Suivant"
          title="Suivant"
          className="m-4 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 shadow-lg backdrop-blur-sm transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dialogue du menu mobile */}
        <Transition.Root show={mobileMenuOpen} as={React.Fragment}>
          <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={React.Fragment}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-50 bg-black/60" />
            </Transition.Child>

            <div className="fixed inset-0 z-50 flex">
              <Transition.Child
                as={React.Fragment}
                enter="transform transition duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto w-full max-w-sm overflow-y-auto bg-black/90 p-6">
                  <div className="flex items-center justify-between">
                    <a href="/" className="inline-block lg:hidden">
                      <img src={logo} alt="Logo" className="h-34 w-auto" />
                    </a>
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
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
    </div>
  )
}