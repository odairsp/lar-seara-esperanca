import { useState } from "react";
import { navegacao, redesSociais } from "../data/conteudo.js";
import { useScrolled } from "../hooks/useScrolled.js";

export default function Header() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-alvorada/90 backdrop-blur-sm shadow-[0_1px_0_rgba(27,46,62,0.12)] py-3.5" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <div className="font-display text-lg font-semibold">
          Lar Seara <span className="text-vela">Esperança</span>
        </div>

        <nav className="hidden lg:flex gap-7 text-sm font-medium">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {redesSociais.map((rede) => (
            <a
              key={rede.href}
              href={rede.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold opacity-60 hover:opacity-100 transition-opacity"
            >
              {rede.label}
            </a>
          ))}
          <a
            href="#doacoes"
            className="text-sm font-semibold rounded-full px-5 py-2.5 border border-tinta hover:bg-tinta hover:text-papel transition-colors"
          >
            Doar
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-1.5"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="w-5 h-0.5 block bg-tinta" />
          <span className="w-5 h-0.5 block bg-tinta" />
          <span className="w-5 h-0.5 block bg-tinta" />
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden fixed top-16 left-5 right-5 flex flex-col gap-4 p-5 rounded-lg text-sm font-medium bg-papel shadow-xl">
          {navegacao.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
