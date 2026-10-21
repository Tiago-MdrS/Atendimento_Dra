const wrap = (children) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);

export const PhoneIcon = () =>
  wrap(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />);

export const ChatIcon = () =>
  wrap(<path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20.5l1.7-5.3A8.5 8.5 0 1 1 21 11.5z" />);

export const InstaIcon = () =>
  wrap(
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" />
    </>
  );

export const PinIcon = () =>
  wrap(
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  );
