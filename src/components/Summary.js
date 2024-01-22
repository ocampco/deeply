import styled from 'styled-components';
import Emoji from './shared/Emoji';
import NextLink from './shared/NextLink';
import ExternalLink from './shared/ExternalLink';
import {
  OpenExternalLinkIcon,
  RepeatArrowIcon,
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

const StyledEmoji = styled(Emoji)`
  margin-left: 0.5rem;
`;

const Subheading = styled.h2`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: var(--default-line-height);
  margin-bottom: 0.25rem;
`;

const LinkText = styled.span`
  text-decoration: underline;
`;

const StyledNextLink = styled(NextLink)`
  margin: 0 auto
`;

const TEXT_HEADING = 'thanks for playing';
const TEXT_SUBHEADING = 'did you like the game?';
const TEXT_DESCRIPTION = 'if you\'d like to help me make this app better, you can';
const TEXT_LINK = 'buy me a coffee';
const TEXT_BUTTON = 'try another';

const Summary = () => (
  <>
    <Content>
      <h1>
        {TEXT_HEADING}
        <StyledEmoji label='party popper'>🎉</StyledEmoji>
      </h1>
      <Subheading>{TEXT_SUBHEADING}</Subheading>
      <Description>{TEXT_DESCRIPTION}</Description>
      <LinkText>
        <ExternalLink
          to={PATH_DONATE}
          title={TEXT_LINK}
        >
        <OpenExternalLinkIcon />
        {TEXT_LINK}
        </ExternalLink>
      </LinkText>
    </Content>
    <StyledNextLink to={`${PATH_CATEGORY}`}>
      {TEXT_BUTTON}
      <RepeatArrowIcon />
    </StyledNextLink>
  </>
);

export default Summary;
