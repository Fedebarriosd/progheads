export default function InstagramCTA() {
  return (
    <section className="relative z-10 px-4 pb-16 lg:pb-24 text-center">
      <div className="mx-auto max-w-xl lg:max-w-2xl bg-navy border-2 border-yellow rounded-lg p-8 lg:p-12">
        <h2 className="font-brand font-bold text-2xl lg:text-3xl text-yellow uppercase tracking-wide mb-3">
          Todo pasa en Instagram
        </h2>
        <p className="font-brand text-yellow/80 mb-6 lg:text-lg">
          Reseñas, novedades y el contenido del día a día se publican ahí, no
          acá. El blog es solo un complemento.
        </p>
        <a
          href="https://www.instagram.com/progheads_py"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-brand font-bold uppercase tracking-wide bg-yellow text-navy px-6 py-3 lg:px-8 lg:py-4 lg:text-lg rounded-md hover:opacity-90 transition-opacity"
        >
          Seguir @progheads_py
        </a>
      </div>
    </section>
  );
}
