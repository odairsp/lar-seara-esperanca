import { atendimentos } from "../data/conteudo.js";
import Eyebrow from "./ui/Eyebrow.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function Atendimentos() {
  return (
    <section id="atendimentos" className="py-24 bg-noite text-papel">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal className="max-w-lg mb-12">
          <Eyebrow light>{atendimentos.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3">{atendimentos.titulo}</h2>
          <p className="mt-3 text-papel/70">{atendimentos.texto}</p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px rounded overflow-hidden bg-papel/10 border border-papel/10">
            {atendimentos.servicos.map((item) => (
              <div
                key={item.nome}
                className="p-7 bg-noite-2 transition-colors hover:bg-[#1c3247]"
              >
                <h3 className="font-display text-xl mb-2">{item.nome}</h3>
                <p className="text-sm text-papel/70">{item.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
