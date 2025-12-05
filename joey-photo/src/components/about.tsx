

import { useRef } from 'react'
import useInView from '../hooks/useInView'
// Method component not used here; import removed to fix unused import error


export default function About() {
  const textRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const textInView = useInView(textRef)
  const imgInView = useInView(imgRef)

  return (
    <section className="about overflow-hidden bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div
              ref={textRef}
              className={`lg:max-w-lg transition-transform transition-opacity duration-1000 ease-out ${
                textInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              <h2 className="text-base font-semibold text-[#D4C09E]">Grassy — Photographie</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-[#D4C09E] sm:text-5xl">
                Mon Histoire
              </p>

              <div className="mt-6 space-y-4 text-[#213547]">
                <p className="text-lg">
                  L’idée de <span className="font-semibold">GRASSYPHOTOGRAPHY</span> est née d’un déclic, d’une passion qui s’est construite avec le temps.
                  Au début, la photo n’était qu’une simple découverte, mais elle est vite devenue une évidence — un moyen d’exprimer ce que les mots
                  ne peuvent pas toujours dire.
                </p>

                <p>
                  Chaque séance, chaque sourire, chaque regard capturé raconte une part de cette histoire. GRASSYPHOTOGRAPHY, c’est plus qu’un nom :
                  c’est une promesse de fidélité à mes valeurs et à cette flamme qui m’anime depuis le départ.
                </p>

                <p>
                  Pour être franc, enfant je n’aimais pas la photo — on me l’a fait découvrir un peu par hasard. Puis petit à petit, à force de pratique,
                  je m’y suis pris goût et j’ai acheté mon premier appareil. C’est à ce moment-là que la passion s’est révélée, et depuis, elle ne m’a
                  jamais quitté.
                </p>

                <p>
                  Ce que j’aime le plus, c’est raconter des histoires et révéler une version d’eux‑mêmes à mes clients. Beaucoup ont du mal à se voir
                  tels qu’ils sont ; mon objectif est de capturer leur naturel, leur confiance, et de leur présenter une image dont ils pourront être fiers.
                </p>

                <p>
                  Ma philosophie est simple : chaque séance doit être un moment agréable — détendu, sans stress, et authentique. J’apporte à la fois
                  professionnalisme et bienveillance pour créer des images qui vous ressemblent vraiment.
                </p>
              </div>

              <div className="mt-8">
                <div className="mt-6 flex gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#D4C09E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#BFA776] transition"
                  >
                    Me contacter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image animée (slide-up similaire à la galerie) */}
          <div
            ref={imgRef}
            style={{ transitionDelay: '180ms' }}
            className={`transition-transform transition-opacity duration-1000 ease-out ${
              imgInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
            }`}
          >
            {/* Mobile: smaller, centered */}
            <img
              alt="Joey portrait"
              src="/djoe3.jpg"
              className="block md:hidden w-full max-w-xs mx-auto h-54 object-cover rounded-xl shadow-xl ring-1 ring-black/10"
            />

            {/* Desktop/tablet: keep original appearance */}
            <img
              alt="Joey portrait"
              src="/djoe3.jpg"
              className="hidden md:block w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-black/10 sm:w-228 md:-ml-4 lg:-ml-0 md:h-[360px] lg:h-[920px] object-cover"
            />
          </div>
        </div>
        </div>

    </section>
  )
}