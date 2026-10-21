import { DATA } from "../data";

export default function Header() {
  return (
    <header>
      <a href="#topo" className="logo">CM</a>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        <a href={DATA.whatsLink} className="cta" target="_blank" rel="noopener noreferrer">
          Agendar
        </a>
      </nav>
    </header>
  );
}
