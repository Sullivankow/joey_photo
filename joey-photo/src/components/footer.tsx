
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  function goToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <footer className="bg-[#213547] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 style={{color: '#ffffff'}} className="text-xl font-playfair italic">Grassy — Photographie</h3>
            <p className="mt-3 text-sm text-[#d6cdbf] max-w-sm">Capturer votre histoire avec sensibilité. Séances sur mesure, confidentialité et retouches professionnelles.</p>

            <div className="mt-4 text-sm text-[#d6cdbf]">
              <div><strong>Téléphone :</strong> <a className="text-[#D4C09E] hover:underline" href="tel:+33699363143">06 99 36 31 43</a></div>
              <div className="mt-1"><strong>Email :</strong> <a className="text-[#D4C09E] hover:underline" href="mailto:grassyphotographie@gmail.com">grassyphotographie@gmail.com</a></div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 style={{color: '#ffffff'}} className="text-lg font-semibold">Liens</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#d6cdbf]">
              
              <li>
                <a
                  className="hover:text-[#D4C09E]"
                  href="/#hero"
                  onClick={(e) => goToSection(e, 'hero')}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#D4C09E]"
                  href="/#about"
                  onClick={(e) => goToSection(e, 'about')}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#D4C09E]"
                  href="/#services"
                  onClick={(e) => goToSection(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#D4C09E]"
                  href="/#galleries"
                  onClick={(e) => goToSection(e, 'galleries')}
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#D4C09E]"
                  href="/#contact"
                  onClick={(e) => goToSection(e, 'contact')}
                >
                  Contact
                </a>
              </li>
              <li><a className="hover:text-[#D4C09E]" href="/mentions-legales">Mentions légales</a></li>
              <li><a className="hover:text-[#D4C09E]" href="/confidentialite">Politique de confidentialité</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 style={{color: '#ffffff'}} className="text-lg font-semibold">Réseaux</h4>
            <div className="mt-3 flex items-center gap-4">
              <a href="https://www.facebook.com" aria-label="Facebook" className="hover:opacity-90">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4C09E]">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07 1.86 17.07 5.71 21.24 10.49 22v-7.02H8.08v-2.91h2.41V9.41c0-2.39 1.42-3.71 3.59-3.71 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.74-1.55 1.5v1.78h2.64l-.42 2.91h-2.22V22C18.29 21.24 22 17.07 22 12.07z" fill="#D4C09E" />
                </svg>
              </a>

              <a href="https://www.instagram.com" aria-label="Instagram" className="hover:opacity-90">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="#D4C09E" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#213547" />
                  <path d="M17.5 6.5h.01" stroke="#213547" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="mt-6 text-sm text-[#d6cdbf] md:text-right">
              <div>© {new Date().getFullYear()} Grassy Photographie — Tous droits réservés.</div>
              <div className="mt-1">Site conçu par SunDev — Tous droits de reproduction réservés.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}