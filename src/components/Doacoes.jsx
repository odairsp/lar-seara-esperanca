import { doacoes } from "../data/conteudo.js";
import Eyebrow from "./ui/Eyebrow.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function Doacoes() {
  return (
    <section id="doacoes" className="py-24 bg-papel border-t border-[rgba(27,46,62,0.12)]">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal className="max-w-lg mb-12">
          <Eyebrow>{doacoes.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-4">{doacoes.titulo}</h2>
          <p className="opacity-80">{doacoes.texto}</p>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded bg-alvorada border border-[rgba(27,46,62,0.12)]">
              <h3 className="font-display text-xl mb-5">{doacoes.banco.titulo}</h3>
              <div>
                {doacoes.banco.itens.map((item) => (
                  <div
                    key={item.rotulo}
                    className="py-3 flex justify-between gap-4 border-b border-[rgba(27,46,62,0.1)] last:border-b-0"
                  >
                    <span className="text-xs uppercase tracking-wider pt-0.5 text-bruma">
                      {item.rotulo}
                    </span>
                    <span className="text-sm font-medium text-right">{item.valor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded bg-tinta text-papel flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl mb-3">{doacoes.pix.titulo}</h3>
                <p className="text-sm text-papel/70 mb-5">{doacoes.pix.texto}</p>
              </div>
              <div className="p-4 rounded bg-papel/10 border border-papel/15">
                <p className="text-xs uppercase tracking-wider text-vela-suave mb-1.5">
                  Chave Pix (CNPJ)
                </p>
                <p className="font-display text-lg tracking-wide">{doacoes.pix.chave}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
