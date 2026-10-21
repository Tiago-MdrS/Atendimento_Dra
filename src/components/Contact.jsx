import { DATA } from "../data";
import { PhoneIcon, ChatIcon, InstaIcon, PinIcon } from "./Icons";

function ContactCard({ icon, label, value, href }) {
  return (
    <a className="card" href={href} target="_blank" rel="noopener noreferrer">
      <div className="ic">{icon}</div>
      <div>
        <b>{label}</b>
        <span>{value}</span>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <div className="grid">
        <ContactCard icon={<PhoneIcon />} label={`Telefone (${DATA.clinica})`} value={DATA.fone} href={DATA.foneLink} />
        <ContactCard icon={<ChatIcon />} label="WhatsApp" value={DATA.whats} href={DATA.whatsLink} />
        <ContactCard icon={<InstaIcon />} label="Instagram" value={DATA.insta} href={DATA.instaLink} />
        <ContactCard icon={<PinIcon />} label={DATA.clinica} value={DATA.endereco} href={DATA.mapa} />
      </div>
      <div className="badge">Atendimentos por convênios e particular</div>
    </section>
  );
}
