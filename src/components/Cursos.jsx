import { cursos } from "../data/conteudo.js";
import Eyebrow from "./ui/Eyebrow.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function Cursos() {
  return (
    <section id="cursos" className="py-24 bg-noite text-papel">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal className="max-w-lg mb-12">
          <Eyebrow light>{cursos.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl mt-3">{cursos.titulo}</h2>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {cursos.lista.map((curso) => (
              <div
                key={curso.titulo}
                className="p-8 rounded bg-noite-2 border border-papel/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-2xl mb-3">{curso.titulo}</h3>
                  <p className="text-sm text-papel/70 mb-6">{curso.texto}</p>
                </div>
                <a
                  href="#doacoes"
                  className="inline-flex self-start items-center text-sm font-semibold rounded-full px-5 py-2.5 border border-vela-suave text-vela-suave hover:bg-vela-suave hover:text-noite transition-colors"
                >
                  {curso.link}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
