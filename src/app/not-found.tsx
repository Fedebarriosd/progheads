import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main className="bg-pattern relative flex-1 overflow-hidden">
      <Image
        src="/brand/ornaments/corner.svg"
        alt=""
        width={160}
        height={160}
        style={{ width: "clamp(90px, 9vw, 160px)", height: "auto" }}
        className="absolute top-0 left-0 opacity-80"
      />
      <Image
        src="/brand/ornaments/corner.svg"
        alt=""
        width={160}
        height={160}
        style={{ width: "clamp(90px, 9vw, 160px)", height: "auto" }}
        className="absolute top-0 right-0 opacity-80 -scale-x-100"
      />
      <Image
        src="/brand/ornaments/corner.svg"
        alt=""
        width={160}
        height={160}
        style={{ width: "clamp(90px, 9vw, 160px)", height: "auto" }}
        className="absolute bottom-0 left-0 opacity-80 -scale-y-100"
      />
      <Image
        src="/brand/ornaments/corner.svg"
        alt=""
        width={160}
        height={160}
        style={{ width: "clamp(90px, 9vw, 160px)", height: "auto" }}
        className="absolute bottom-0 right-0 opacity-80 -scale-x-100 -scale-y-100"
      />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32 md:py-48">
        <p className="font-brand uppercase tracking-widest text-yellow/60 text-sm lg:text-base mb-2">
          Error
        </p>
        <h1 className="font-brand font-bold text-7xl md:text-9xl lg:text-[11rem] text-yellow">
          404
        </h1>
        <p className="text-yellow/60 my-4 lg:text-xl">⁕ ⁕ ⁕</p>
        <h2 className="font-brand font-bold text-2xl md:text-3xl lg:text-4xl text-yellow uppercase tracking-wide">
          Esta página no existe
        </h2>
        <p className="font-brand mt-4 max-w-md lg:max-w-xl lg:text-lg text-yellow/80">
          Como una suite de veinte minutos que nunca llega al clímax, lo que
          buscás se perdió en algún rincón del universo progresivo.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 font-brand font-bold uppercase tracking-wide bg-yellow text-navy px-6 py-3 lg:px-8 lg:py-4 lg:text-lg rounded-md hover:opacity-90 transition-opacity"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
