export default function Footer() {
  return (
    <footer className="relative z-10 bg-navy border-t-4 border-yellow px-4 py-8 lg:py-10 text-center font-brand">
      <p className="text-yellow/70 text-sm lg:text-base">
        Un proyecto creado por{" "}
        <a
          href="https://www.fedebarriosd.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver portfolio"
          className="text-yellow hover:underline"
        >
          Fede Barrios
        </a>
      </p>
      <p className="text-yellow/50 text-xs lg:text-sm mt-2">
        Software libre bajo licencia{" "}
        <a
          href="https://github.com/fedebarriosd/progheads/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow hover:underline"
        >
          AGPL-3.0
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/fedebarriosd/progheads"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow hover:underline"
        >
          Código en GitHub
        </a>
      </p>
    </footer>
  );
}
