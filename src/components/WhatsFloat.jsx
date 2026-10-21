import { DATA } from "../data";

export default function WhatsFloat() {
  return (
    <a className="wa" href={DATA.whatsLink} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.9 14c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .2-3.100-.7-2.700-1.100-4.400-3.800-4.500-4-.1-.2-1.100-1.400-1.100-2.700s.7-1.900.9-2.200c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .5l-.3.500-.4.400c-.1.200-.3.300-.1.600.2.300.7 1.200 1.500 1.900 1 .9 1.900 1.200 2.200 1.300.3.100.4.100.6-.1l.8-1c.2-.3.4-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z" />
      </svg>
    </a>
  );
}
