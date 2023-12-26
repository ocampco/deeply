import styled from 'styled-components';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdOpen,
} from 'react-icons/io';

export const BackArrow = styled(IoIosArrowBack)`
  margin-right: 0.25rem;
  vertical-align: middle;
  color: inherit;
`;

export const ForwardArrow = styled(IoIosArrowForward)`
  margin-left: 0.25rem;
  vertical-align: middle;
`;

export const ExternalLink = styled(IoMdOpen)`
  vertical-align: middle;
  margin-right: 0.25rem;
`;
