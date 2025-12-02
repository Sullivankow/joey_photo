




const History = () => {
    return (
    
     

      <section id="history" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left: image */}
          <div className="relative mb-8 lg:mb-0">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/joey.jpeg"
                alt="Joey portrait"
                className="w-full h-80 object-cover md:h-[520px] lg:h-[560px]"
              />
            </div>
          </div>

          {/* Right: content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-[#213547]">
              Mon Histoire
            </h1>

            <p className="mt-6 text-lg text-[#213547]">
              L’idée de <span className="font-semibold">GRASSYPHOTOGRAPHY</span> est née d’un déclic, d’une passion qui s’est construite avec le temps.
              Au début, la photo n’était qu’une simple découverte, mais elle est vite devenue une évidence — un moyen d’exprimer ce que les mots ne peuvent pas toujours dire.
            </p>

            <p className="mt-4 text-[#213547]">
              Chaque séance, chaque sourire, chaque regard capturé raconte une part de cette histoire. Alors oui, GRASSYPHOTOGRAPHY, c’est plus qu’un nom. C’est une promesse :
              rester fidèle à ce que je suis, garder cette flamme qui m’anime depuis le début. Parce qu’au fond, tout commence et tout finit par la même chose : une passion avant tout.
            </p>

            <p className="mt-4 text-[#213547]">
              Je ne vais pas vous mentir : quand j’étais enfant, je n’aimais pas du tout la photo. On me l’a fait découvrir un peu par hasard, presque de force. Et puis, avec le temps, quelque chose a changé.
              À force de pratiquer, j’ai commencé à y prendre goût, jusqu’à ce que je m’achète mon tout premier appareil photo. C’est à ce moment-là que j’ai compris que la photographie, c’était bien plus qu’un simple passe-temps — c’était devenu une passion, un vrai besoin.
              Depuis, je ne m’en suis jamais séparé.
            </p>

            <p className="mt-4 text-[#213547]">
              Ce que j’aime le plus dans mon métier, c’est de raconter des histoires et de rendre les gens fiers d’eux. Beaucoup de personnes ont du mal à s’accepter, à se voir telles qu’elles sont vraiment.
              Moi, je suis là pour leur montrer la beauté qu’elles ne voient pas forcément dans le miroir. À travers mes photos, j’ai envie qu’elles découvrent une version d’elles-mêmes plus confiante, plus naturelle, plus vraie.
            </p>

            <p className="mt-4 text-[#213547]">
              Ma philosophie est simple : je veux que chaque séance soit un bon moment. Pas de stress, pas de tension, juste des sourires, des rires et de la complicité. La photo, pour moi, c’est avant tout un échange humain.
              J’aime quand on discute, quand on rigole, quand on crée quelque chose ensemble. Je reste professionnel dans mon travail, bien sûr, mais je veux que mes clients se sentent à l’aise, naturels, comme s’ils passaient un bon moment avec un pote — et que le résultat final raconte vraiment leur histoire.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#D4C09E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#BFA776] transition"
              >
                Me contacter
              </a>

              <a
                href="/portfolio"
                className="bouton-about inline-flex items-center gap-2 rounded-md border border-[#213547] px-5 py-3 text-sm font-semibold text-[#213547] hover:bg-[#F7F6F4] transition"
              >
                Voir le portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
    
  )
}

export default History