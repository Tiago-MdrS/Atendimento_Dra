import { DATA } from "../data";

export default function Hero() {
  return (
    <div className="hero" id="topo">
      <p className="mono">C<small>✦</small>M</p>
      <h1>{DATA.curto}</h1>
      <div className="role">DERMATOLOGISTA</div>
      <div className="btns">
        <a className="btn fill" href={DATA.whatsLink} target="_blank" rel="noopener noreferrer">
          Agendar consulta
        </a>
        <a className="btn" href="#contato">Como chegar</a>
      </div>
    </div>
  );
}
