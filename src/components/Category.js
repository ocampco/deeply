import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Emoji from './shared/Emoji';
import { PATH_INSTRUCTIONS } from '../constants/paths';

const Container = styled.li`
  border-radius: var(--default-border-radius);
  background-color: var(--default-primary-white);
  box-shadow: var(--default-box-shadow);
  font-size: 1.125rem;
  font-weight: 700;
  height: auto;
  width: auto;
  padding: 1.5rem 1rem;
`;

const Name = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 700;

  @media (min-width: 640px) {
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  color: var(--default-primary-grey);
  line-height: var(--default-line-height);
  font-weight: 400;
`;

const PlaceholderContainer = styled(Container)`
  color: var(--default-primary-grey);
  opacity: 60%;
  height: fit-content;

  @media (min-width: 640px) {
    height: auto;
  }
`;

export const PlaceholderCategory = () => (
  <PlaceholderContainer>
    <Name>
      user submitted - unavailable <Emoji label='construction'>🚧</Emoji>
    </Name>
  </PlaceholderContainer>
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
  <Container>
    <Link
      to={PATH_INSTRUCTIONS}
      state={{ category: url }}
    >
      <Name>
        {displayName} <Emoji label={label}>{icon}</Emoji>
      </Name>
      <Description>
        {description}
      </Description>
    </Link>
  </Container>
);

export default Category
