
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Séances sur-mesure',
    description:
      "Chaque séance est pensée pour vous : lieu, lumière et direction artistique adaptés à votre histoire.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Respect & confidentialité',
    description: "Vos images sont traitées et livrées avec discrétion ; droits et usage clairement définis.",
    icon: LockClosedIcon,
  },
  {
    name: 'Post-traitement professionnel',
    description: "Retouches fines incluses, livraison rapide de fichiers haute résolution prêts à imprimer.",
    icon: ServerIcon,
  },
]

export default function About() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-[#D4C09E]">Joey — Photographe</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-[#213547] sm:text-5xl">
                Capturer votre histoire avec sensibilité
              </p>
              <p className="mt-6 text-lg text-gray-600 italic">
                Joey saisit les instants qui durent : une lumière qui caresse, un geste qui se prolonge, une émotion
                qui se révèle. Son approche mêle technique et intuition pour créer des images qui respirent et traversent
                le temps.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#213547]">Méthode</h3>
                <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-2">
                  <li><strong>Échange</strong> — Conversation préalable pour comprendre vos attentes et préparer la séance.</li>
                  <li><strong>Séance</strong> — Session guidée et détendue, en studio ou en extérieur, axée sur l'authenticité.</li>
                  <li><strong>Livraison</strong> — Retouches soignées et remise d'une galerie privée de photos haute résolution.</li>
                </ol>
              </div>

              {/* CTA déplacé à la fin de la section pour meilleur flux visuel */}

              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-700 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[#213547]">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-[#D4C09E]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>

              {/* Bouton placé à la fin du texte */}
              <div className="mt-8">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#D4C09E] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#BFA776] active:bg-[#A98F63] md:px-8 md:py-3 md:text-base"
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 7l1-2h6l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>

          <img
            alt="Joey portrait"
            src="/joey.jpeg"
            width={1216}
            height={712}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-black/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </section>
  )
}