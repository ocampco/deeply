import styled from 'styled-components';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdRepeat,
  IoMdOpen,
  IoMdAddCircle,
} from 'react-icons/io';

export const BackArrowIcon = styled(IoIosArrowBack)`
  margin-right: 0.25rem;
  vertical-align: middle;
  color: inherit;
`;

export const ForwardArrowIcon = styled(IoIosArrowForward)`
  margin-left: 0.25rem;
  vertical-align: middle;
`;

export const RepeatArrowIcon = styled(IoMdRepeat)`
  vertical-align: middle;
  margin-left: 0.25rem;
`;

export const OpenExternalLinkIcon = styled(IoMdOpen)`
  vertical-align: middle;
  margin-right: 0.25rem;
`;

export const Add = styled(IoMdAddCircle)`
  vertical-align: middle;
  margin-right: 0.25rem;
`;
