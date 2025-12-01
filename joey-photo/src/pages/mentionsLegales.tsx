import Footer from '../components/footer'
import { useEffect } from 'react'

export default function MentionsLegales() {
  return (
    <div id="mentions-legales" className="min-h-screen bg-white text-[#213547]">
      <Meta />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-playfair italic text-[#213547]">Mentions légales</h1>
          <p className="mt-4 text-lg text-[#D4C09E] italic">Informations légales et identité du site</p>
        </header>

        <section className="prose prose-lg max-w-none text-[#213547]">
          <h2 className="font-playfair italic">Éditeur du site</h2>
          <p>
            Le site « Grassy — Photographie » est édité par Joey — photographe indépendant.
          </p>

          <h2 className="font-playfair italic">Contact</h2>
          <p>Téléphone : <a className="text-[#D4C09E]" href="tel:+33699363143">06 99 36 31 43</a></p>
          <p>Email : <a className="text-[#D4C09E]" href="mailto:grassyphotographie@gmail.com">grassyphotographie@gmail.com</a></p>

          <h2 className="font-playfair italic">Hébergement</h2>
          <p>
            Le site est hébergé par l'hébergeur localisé en France — informations pratiques disponibles sur demande.
          </p>

          <h2 className="font-playfair italic">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus (textes, images, vidéos) présents sur ce site est la propriété exclusive de Grassy
            Photographie ou de ses partenaires et est protégé par le droit d'auteur. Toute reproduction est interdite sans
            autorisation préalable.
          </p>

          <h2 className="font-playfair italic">Données personnelles</h2>
          <p>
            Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes
            et sont conservées conformément à la politique de confidentialité. Pour toute demande de suppression ou d'accès,
            contactez-nous via l'email ci-dessus.
          </p>

          <h2 className="font-playfair italic">Cookies</h2>
          <p>
            Le site utilise des cookies nécessaires au fonctionnement et des cookies optionnels pour les statistiques. Vous
            pouvez désactiver les cookies via les paramètres de votre navigateur.
          </p>

          <div className="mt-8">
            <a href="/" className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-black hover:bg-[#BFA776] hover:text-white transition">Retour à l'accueil</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function Meta() {
  useEffect(() => {
    document.title = 'Mentions légales — Joey Grassy'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', 'Mentions légales et informations légales du site Joey Grassy Photographie.')
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', 'https://votre-domaine.exemple/mentions-legales')
  }, [])
  return null
}
