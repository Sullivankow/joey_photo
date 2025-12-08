import Footer from '../components/footer'
import { useEffect } from 'react'

export default function Confidentialites() {
  return (
    <div id="confidentialites" className="min-h-screen bg-white text-[#213547]">
      <Meta />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-playfair italic text-[#213547]">Politique de confidentialité</h1>
          <p className="mt-4 text-lg text-[#D4C09E] italic">Comment nous collectons et utilisons vos données</p>
        </header>

        <section className="prose prose-lg max-w-none text-[#213547]">
          <h2 className="font-playfair italic">Données collectées</h2>
          <p>
            Nous collectons uniquement les données nécessaires pour répondre à vos demandes via le formulaire de contact :
            prénom, nom, email, téléphone et message. Ces informations sont transmises volontairement par vous.
          </p>

          <h2 className="font-playfair italic">Finalités</h2>
          <p>
            Les données servent exclusivement à répondre à vos demandes, organiser des rendez-vous et vous envoyer des
            informations liées aux prestations photographiques si vous le demandez.
          </p>

          <h2 className="font-playfair italic">Durée de conservation</h2>
          <p>
            Les données issues du formulaire sont conservées pendant la durée nécessaire au traitement de votre demande
            et, sauf accord contraire, pendant une durée maximale de 3 ans pour des raisons administratives et commerciales
            en lien avec la relation client.
          </p>

          <h2 className="font-playfair italic">Partage des données</h2>
          <p>
            Aucune donnée personnelle n'est cédée à des tiers sans votre consentement explicite, sauf obligations
            légales. Les prestataires techniques intervenant pour l'hébergement ou l'envoi d'emails traitent les données
            comme sous-traitants et ne peuvent pas les utiliser à d'autres fins.
          </p>

          <h2 className="font-playfair italic">Vos droits</h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité des données vous
            concernant. Pour exercer ces droits, contactez-nous à <a className="text-[#D4C09E]" href="mailto:grassyphotographie@gmail.com">grassyphotographie@gmail.com</a>.
          </p>

          <h2 className="font-playfair italic">Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données
            contre tout accès non autorisé, altération ou divulgation.
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
    document.title = 'Politique de confidentialité — Joey Grassy'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', 'Politique de confidentialité : comment Joey Grassy collecte et utilise vos données via le formulaire de contact.')
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', 'https://www.grassyphotographie.fr/confidentialites')
  }, [])
  return null
}
