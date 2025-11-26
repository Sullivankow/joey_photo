import Hero from './components/hero'
import Galerie from './components/galerie'
import Separator from './components/Separator'
import Services from './components/services'
import About from './components/about'
import Avis from './components/avis'
import ContactForm from './components/contactForm'
import Footer from './components/footer'

function App() {
  return (
    <>
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

export default App
