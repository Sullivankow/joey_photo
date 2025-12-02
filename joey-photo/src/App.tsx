import Hero from './components/hero'
import Galerie from './components/galerie'
import Separator from './components/Separator'
import Services from './components/services'
import About from './components/about'
import Avis from './components/avis'
import ContactForm from './components/contactForm'
import Footer from './components/footer'
import PopUp from './components/popUp'
import CookiesBanner from './components/cookies'
import Portfolio from './pages/portfolio'
import NotFound from './pages/NotFound'
import MentionsLegales from './pages/mentionsLegales'
import Confidentialites from './pages/confidentialites'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Method from './components/method'


function Home() {
  useEffect(() => {
    document.title = 'Joey Grassy — Photographe professionnel'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Joey Grassy, photographe professionnel spécialisé en portraits, mariages et éditorial. Réservation de séances et portfolio.')
    const linkCanonical = document.querySelector('link[rel="canonical"]')
    if (linkCanonical) linkCanonical.setAttribute('href', 'https://votre-domaine.exemple/')
  }, [])

  return (
    <>
      <CookiesBanner />
      <PopUp />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Method />
      <Separator />
      <Galerie />
      <Separator />
      <Services />
      <Separator />
      <Avis />
      <Separator />
      <ContactForm />
      <Separator />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/confidentialites" element={<Confidentialites />} />
      
      <Route path="/contact" element={<ContactForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
