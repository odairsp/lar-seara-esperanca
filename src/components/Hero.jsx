import { hero } from "../data/conteudo.js";
import Eyebrow from "./ui/Eyebrow.jsx";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-40 md:pt-48 pb-24 md:pb-32"
      style={{
        background:
          "radial-gradient(60% 55% at 82% -6%, rgba(199,152,46,0.20), transparent 60%), #EEF2F5",
      }}
    >
      <svg
        className="hero-rays absolute -top-28 -right-32 w-[560px] h-[560px] opacity-55 pointer-events-none motion-reduce:animate-none animate-breathe"
        viewBox="0 0 640 640"
        aria-hidden="true"
      >
        <g stroke="#C7982E" fill="none" strokeWidth="1">
          <circle cx="470" cy="150" r="60" />
          <circle cx="470" cy="150" r="120" />
          <circle cx="470" cy="150" r="190" />
          <path d="M470 150 L 640 60" />
          <path d="M470 150 L 610 260" />
          <path d="M470 150 L 380 -40" />
          <path d="M470 150 L 300 20" />
        </g>
      </svg>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="max-w-xl">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="font-display font-medium leading-[1.08] text-5xl md:text-6xl mt-4 mb-3">
            {hero.titulo}
            <em className="not-italic italic text-vela">{hero.tituloEmDestaque}</em>
            {hero.tituloFinal}
          </h1>
          <p className="font-display italic text-xl text-vela mb-6">{hero.subtitulo}</p>
          <p className="text-lg opacity-80 max-w-md mb-10">{hero.texto}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#atendimentos"
              className="inline-flex items-center text-sm font-semibold rounded-full px-6 py-3.5 bg-tinta text-papel transition-transform hover:-translate-y-0.5"
            >
              Conheça os atendimentos
            </a>
            <a
              href="#localizacao"
              className="inline-flex items-center text-sm font-semibold rounded-full px-6 py-3.5 border border-bruma transition-transform hover:-translate-y-0.5"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
