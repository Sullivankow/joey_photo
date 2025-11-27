import { Link } from 'react-router-dom'
import Footer from '../components/footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D4C09E]/20 mb-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4C09E]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h3l2-3h6l2 3h3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
              <circle cx="12" cy="13" r="3" strokeWidth="1.5" />
            </svg>
          </div>

          <h1 className="text-6xl md:text-7xl font-playfair font-semibold text-gray-900 mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">Oups — la page que vous recherchez est introuvable.</p>

          <p className="text-gray-600 mb-8">Peut-être que le lien est cassé ou que la page a été déplacée. Voici quelques options :</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#D4C09E] hover:bg-[#BFA776] active:bg-[#A98F63] text-white font-medium shadow-sm"
            >
              Retour à l'accueil
            </Link>

          
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
