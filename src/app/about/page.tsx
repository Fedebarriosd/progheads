export const metadata = {
  title: "Sobre nosotros",
  description:
    "Quién está detrás de Progheads Paraguay: una sola persona escribiendo sobre rock y metal progresivo.",
};

export default function AboutUs() {
  return (
    <main className="bg-pattern relative flex-1 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl lg:max-w-4xl text-left">
        <h1 className="font-brand font-bold text-4xl lg:text-6xl text-yellow uppercase tracking-wide mb-6 lg:mb-10 text-center">
          Sobre nosotros
        </h1>
        <div className="font-brand text-yellow/80 text-lg lg:text-xl leading-relaxed flex flex-col gap-4 lg:gap-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Progheads
            Paraguay no es un colectivo ni una redacción: es una sola persona
            escribiendo, curando y sosteniendo esto. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. No hay intención
            de esconder que hay alguien real detrás de la cuenta — pero
            tampoco es &ldquo;el blog de música de Fede&rdquo;. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>
      </div>
    </main>
  );
}
