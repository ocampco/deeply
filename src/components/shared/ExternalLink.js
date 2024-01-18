const ExternalLink = ({
  to,
  title,
  children,
}) => (
  <a
    href={to}
    title={title}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
);

export default ExternalLink;
