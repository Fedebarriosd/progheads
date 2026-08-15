import { playlists } from "@/data/playlists";

export default function PlaylistCards() {
  return (
    <section className="relative z-10 px-4 pb-24 lg:pb-32">
      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        <h2 className="font-brand font-bold text-2xl lg:text-3xl text-yellow uppercase tracking-wide mb-6 lg:mb-10 text-center">
          Playlists destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {playlists.map((pl) => (
            <a
              key={pl.id}
              href={pl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-navy border-2 border-yellow/40 rounded-lg p-6 lg:p-8 hover:border-yellow transition-colors"
            >
              <h3 className="font-brand font-bold text-xl lg:text-2xl text-yellow mb-2">
                {pl.title}
              </h3>
              <p className="text-yellow/80 font-brand text-sm lg:text-base">
                {pl.description}
              </p>
              <span className="inline-block mt-4 font-brand text-sm lg:text-base text-yellow/60 uppercase tracking-wide">
                Escuchar en Spotify →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
