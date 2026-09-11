import { acaoSocial } from "../data/conteudo.js";
import Eyebrow from "./ui/Eyebrow.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function AcaoSocial() {
  return (
    <section id="acao-social" className="py-24">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        <Reveal>
          <Eyebrow>{acaoSocial.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-6">{acaoSocial.titulo}</h2>
          <div className="space-y-4 opacity-85 max-w-prose">
            {acaoSocial.paragrafos.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="p-8 rounded bg-papel border border-[rgba(27,46,62,0.12)]">
            <h3 className="font-display text-xl mb-3">{acaoSocial.doacoesAceitas.titulo}</h3>
            <p className="text-sm opacity-80 mb-4">{acaoSocial.doacoesAceitas.texto}</p>
            <ul className="space-y-2.5">
              {acaoSocial.doacoesAceitas.itens.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vela shrink-0" />
                  <span className="opacity-85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
