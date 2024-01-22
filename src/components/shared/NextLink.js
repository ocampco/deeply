import Button from './Button';
import { Link } from 'react-router-dom';

const NextLink = ({
  to,
  className,
  secondary,
  children,
}) => (
  <Button
    className={className}
    secondary={secondary}
  >
    <Link to={to}>
      {children}
    </Link>
  </Button>
);

export default NextLink;
