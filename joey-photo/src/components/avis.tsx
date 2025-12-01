import { StarIcon } from '@heroicons/react/20/solid'

const testimonials = [
  {
    name: 'Claire Martin',
    date: 'Avr 2025',
    text: "Joey a su me mettre à l'aise dès les premières minutes. Les photos sont sublimes, naturelles et pleines d'émotion.",
    rating: 5,
  },
  {
    name: 'Lucas Dubois',
    date: 'Juin 2025',
    text: "Professionnel, créatif et à l'écoute. Le rendu final dépasse largement mes attentes — je recommande vivement.",
    rating: 5,
  },
  {
    name: 'Sofia Bernard',
    date: 'Mai 2025',
    text: "Séance agréable et détendue, éclairage magnifique. Les retouches sont discrètes et élégantes.",
    rating: 5,
  },
  {
    name: 'Adrien Morel',
    date: 'Mar 2025',
    text: "Rapide dans la livraison et très professionnel. Les photos ont eu un franc succès auprès de la famille.",
    rating: 5,
  },
]

export default function Avis() {
  return (
    <section id="avis" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-playfair italic text-black">Ils en parlent</h2>
          <p className="mt-6 text-lg italic text-[#D4C09E]">Avis de clients — en attendant l'intégration Google</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="group rounded-xl border border-slate-100 p-6 bg-gray-50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <StarIcon key={idx} className="h-4 w-4 text-[#D4C09E]" aria-hidden />
                  ))}
                </div>
                <div className="ml-auto text-xs text-gray-500">{t.date}</div>
              </div>

              <p className="text-sm text-[#213547] mb-4">“{t.text}”</p>

              <footer className="text-sm text-[#7b6b63] font-medium">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}