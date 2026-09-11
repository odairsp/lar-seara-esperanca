import { rodape, redesSociais } from "../data/conteudo.js";

export default function Footer() {
  return (
    <footer className="pt-14 pb-8 bg-tinta text-papel/75">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start gap-8 pb-9 border-b border-papel/15">
          <p className="font-display italic text-lg max-w-sm text-papel">
            "{rodape.citacao}"
          </p>

          <div className="flex gap-12">
            <div>
              <h4 className="text-xs uppercase tracking-wider mb-3.5 text-vela-suave">
                Navegação
              </h4>
              {rodape.navegacao.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm mb-2.5 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider mb-3.5 text-vela-suave">
                Casa
              </h4>
              {rodape.contatoLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm mb-2.5 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider mb-3.5 text-vela-suave">
                Redes
              </h4>
              {redesSociais.map((rede) => (
                <a
                  key={rede.href}
                  href={rede.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm mb-2.5 hover:text-white transition-colors"
                >
                  {rede.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 text-xs flex flex-wrap justify-between gap-2 text-papel/45">
          <span>{rodape.nomeCentro}</span>
          <span>{rodape.aviso}</span>
        </div>
      </div>
    </footer>
  );
}
