import Image from "next/image";
import InstagramCTA from "@/components/InstagramCTA";
import BlogTeaser from "@/components/BlogTeaser";
import PlaylistCards from "@/components/PlaylistCards";

export default function Home() {
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

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 lg:py-48">
        <Image
          src="/brand/logo/isotipo-amarillo.svg"
          alt=""
          width={180}
          height={180}
          className="mb-8 w-[140px] lg:w-[180px] h-auto"
        />
        <h1 className="font-brand font-bold text-4xl md:text-6xl lg:text-7xl text-yellow uppercase tracking-wide">
          Progheads Paraguay
        </h1>
        <p className="font-brand mt-4 max-w-xl lg:max-w-2xl text-yellow/80 text-lg lg:text-2xl">
          Comunidad paraguaya de rock y metal progresivo.
        </p>
      </section>

      <InstagramCTA />
      <BlogTeaser />
      <PlaylistCards />
    </main>
  );
}
