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

function Home() {
  return (
    <>
      <CookiesBanner />
      <PopUp phone="+33612345678" />
      <Hero />
      <Separator />
      <About />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
