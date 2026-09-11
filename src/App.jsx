import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Sobre from "./components/Sobre.jsx";
import Atendimentos from "./components/Atendimentos.jsx";
import AcaoSocial from "./components/AcaoSocial.jsx";
import Cursos from "./components/Cursos.jsx";
import Doacoes from "./components/Doacoes.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-alvorada text-tinta font-body">
      <Header />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-vela to-transparent opacity-60" />
      <Sobre />
      <Atendimentos />
      <AcaoSocial />
      <Cursos />
      <Doacoes />
      <Contato />
      <Footer />
    </div>
  );
}
