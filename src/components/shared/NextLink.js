import Button from './Button';
import { Link } from 'react-router-dom';

const NextLink = ({
  to,
  className,
  secondary,
  children,
}) => (
  <Link to={to}>
    <Button
      className={className}
      secondary={secondary}
    >
      {children}
    </Button>
  </Link>
);

export default NextLink;
