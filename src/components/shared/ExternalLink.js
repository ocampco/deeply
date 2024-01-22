import styled from 'styled-components';

const Link = styled.a`
  color: inherit;
`;

const ExternalLink = ({
  to,
  title,
  children,
}) => (
  <Link
    href={to}
    title={title}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </Link>
);

export default ExternalLink;
