import { contato } from "../data/conteudo.js";
import Eyebrow from "./ui/Eyebrow.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function Contato() {
  return (
    <section id="localizacao" className="py-24">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">
        <Reveal>
          <Eyebrow>{contato.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-7">{contato.titulo}</h2>
          <div>
            {contato.informacoes.map((info) => (
              <div
                key={info.rotulo}
                className="py-4 flex justify-between gap-6 border-b border-[rgba(27,46,62,0.12)] first:pt-0"
              >
                <span className="text-xs uppercase tracking-wider pt-0.5 text-bruma">
                  {info.rotulo}
                </span>
                <span className="text-sm text-right max-w-[60%]">{info.valor}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="relative rounded overflow-hidden min-h-[280px] flex items-end p-7 bg-noite">
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 400 280"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 200 Q 100 150 200 190 T 400 160" stroke="#E4C878" strokeWidth="1" fill="none" />
              <path d="M0 240 Q 120 200 220 230 T 400 210" stroke="#E4C878" strokeWidth="1" fill="none" />
              <circle cx="220" cy="150" r="3" fill="#E4C878" />
            </svg>
            <span className="relative font-display italic text-papel text-base">
              {contato.mapaLabel}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
