import styled from 'styled-components';
import Emoji from './shared/Emoji';
import NextLink from './shared/NextLink';
import {
  ExternalLink,
  RepeatArrow,
} from './shared/Icons';
import {
    PATH_DONATE,
    PATH_CATEGORY,
} from '../constants/paths';

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

const Subheading = styled.h2`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: var(--default-line-height);
  margin-bottom: 0.25rem;
`;

const Link = styled.p`
  text-decoration: underline;
`;

const StyledNextLink = styled(NextLink)`
  margin: 0 auto
`;

const TEXT_HEADING = 'thanks for playing ';
const TEXT_SUBHEADING = 'did you like the game?';
const TEXT_DESCRIPTION = 'if you\'d like to help me make this app better, you can';
const TEXT_LINK = 'buy me a coffee';
const TEXT_BUTTON = 'try another';

const Summary = () => (
    <>
        <Content>
          <h1>
            {TEXT_HEADING}
            <Emoji label='party popper'>🎉</Emoji>
          </h1>
          <Subheading>{TEXT_SUBHEADING}</Subheading>
          <Description>{TEXT_DESCRIPTION}</Description>
          <a
              href={PATH_DONATE}
              title={TEXT_LINK}
              target='_blank'
              rel='noopener noreferrer'
          >
            <Link>
              <ExternalLink />
              {TEXT_LINK}
            </Link>
          </a>
        </Content>
        <StyledNextLink to={`${PATH_CATEGORY}`}>
          {TEXT_BUTTON}
          <RepeatArrow />
        </StyledNextLink>
    </>
);

export default Summary;
