import Button from './Button';
import { Link } from 'react-router-dom';

const NextLink = ({
  to,
  className,
  children,
}) => (
  <Link to={to} className={className}>
    <Button>
      {children}
    </Button>
  </Link>
);

export default NextLink;
