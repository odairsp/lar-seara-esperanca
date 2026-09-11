import { sobre } from "../data/conteudo.js";
import Eyebrow from "./ui/Eyebrow.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        <Reveal>
          <Eyebrow>{sobre.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-6">{sobre.titulo}</h2>
          <div className="space-y-4 opacity-85 max-w-prose">
            {sobre.paragrafos.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="relative p-9 rounded bg-papel border border-[rgba(27,46,62,0.12)]">
            <div className="absolute top-0 left-0 w-[3px] h-full bg-vela" />
            <blockquote className="font-display italic text-xl leading-snug">
              "{sobre.citacao}"
            </blockquote>
            <cite className="block mt-4 not-italic text-xs uppercase tracking-wider text-bruma">
              {sobre.citacaoFonte}
            </cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
