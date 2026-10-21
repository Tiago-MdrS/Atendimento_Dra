import { DATA } from "../data";

export default function About() {
  return (
    <section className="about" id="sobre">
      <h2>Sobre</h2>
      <p>
        <strong className="serif name">{DATA.nome}</strong>
      </p>
      <p>Médica dermatologista, com atendimento na {DATA.clinica}.</p>
      <div className="tags">
        <span className="tag">{DATA.crm}</span>
        <span className="tag">{DATA.rqe}</span>
        <span className="tag">Convênios e particular</span>
      </div>
    </section>
  );
}
