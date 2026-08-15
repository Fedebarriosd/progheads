export const metadata = {
  title: "Sobre el proyecto",
  description:
    "Quién está detrás de Progheads Paraguay: una sola persona escribiendo sobre rock y metal progresivo.",
};

export default function AboutUs() {
  return (
    <main className="bg-pattern relative flex-1 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl lg:max-w-4xl text-left">
        <h1 className="font-brand font-bold text-4xl lg:text-6xl text-yellow uppercase tracking-wide mb-6 lg:mb-10 text-center">
          Sobre el proyecto
        </h1>
        <div className="font-brand text-yellow/80 text-xl lg:text-2xl leading-relaxed flex flex-col gap-4 lg:gap-6">
          <p>
            Progheads existe por un problema muy específico: quería
            hablar de rock y metal progresivo con alguien más en este país y
            no encontré a nadie. Ni una cuenta, ni un grupo, ni un flyer de
            un festival con un teclado de más de dos hileras. Nada. Así que,
            en vez de aceptar mi destino de escuchar discos de veinte minutos
            en soledad, decidí armar esta comunidad.
          </p>
          <p>
            Acá vas a encontrar el blog, con notas y reseñas más pensadas de
            las que entran en un post de Instagram, y algunas playlists
            para arrancar si sos nuevo en esto. El día a día (lo que
            realmente se comparte seguido) pasa en Instagram; este sitio es
            más el archivo y la tarjeta de presentación.
          </p>
          <p>
            Detrás de la cuenta hay una sola persona: Fede Barrios. No hay
            redacción, ni equipo, ni junta editorial discutiendo si Genesis
            dejó de ser prog con Phil Collins cantando. Soy yo, escribiendo
            esto y todo lo demás. 
          </p>
        </div>
      </div>
    </main>
  );
}
