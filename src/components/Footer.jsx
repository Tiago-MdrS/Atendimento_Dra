import { DATA } from "../data";

export default function Footer() {
  return (
    <footer>
      <p className="serif foot-name">{DATA.curto}</p>
      <p>{DATA.crm} · {DATA.rqe}</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
