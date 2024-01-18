import styled from 'styled-components';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdRepeat,
  IoMdOpen,
  IoMdAddCircle,
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

export const RepeatArrow = styled(IoMdRepeat)`
  vertical-align: middle;
  margin-left: 0.25rem;
`;

export const OpenExternalLink = styled(IoMdOpen)`
  vertical-align: middle;
  margin-right: 0.25rem;
`;

export const Add = styled(IoMdAddCircle)`
  vertical-align: middle;
  margin-right: 0.25rem;
`;
