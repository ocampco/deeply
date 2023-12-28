import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Emoji from './shared/Emoji';
import { PATH_INSTRUCTIONS } from '../constants/paths';

const StyledCategory = styled.li`
  border-radius: var(--default-border-radius);
  background-color: var(--default-primary-white);
  box-shadow: var(--default-box-shadow);
  font-size: 1.125rem;
  font-weight: 700;
  height: auto;
  width: auto;
  padding: 1.5rem 1rem;
`;

const StyledName = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 700;

  @media (min-width: 640px) {
    margin-bottom: 1rem;
  }
`;

const StyledDescription = styled.p`
  color: var(--default-primary-grey);
  line-height: var(--default-line-height);
  font-weight: 400;
`;

const StyledPlaceholderCategory = styled(StyledCategory)`
  color: var(--default-primary-grey);
  opacity: 60%;
  height: fit-content;

  @media (min-width: 640px) {
    height: auto;
  }
`;

export const PlaceholderCategory = () => (
  <StyledPlaceholderCategory>
    <StyledName>
      user submitted - unavailable <Emoji label='construction'>🚧</Emoji>
    </StyledName>
  </StyledPlaceholderCategory>
);

const Category = ({
  url,
  displayName,
  emoji: {
    icon,
    label,
  },
  description,
}) => (
  <StyledCategory>
    <Link
      to={PATH_INSTRUCTIONS}
      state={{ category: url }}
    >
      <StyledName>
        {displayName} <Emoji label={label}>{icon}</Emoji>
      </StyledName>
      <StyledDescription>
        {description}
      </StyledDescription>
    </Link>
  </StyledCategory>
);

export default Category
