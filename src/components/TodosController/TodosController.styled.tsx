import { styled } from 'styled-components';
import { COLORS } from '../../constants';

export const Wrapper = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InputAndFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ErrorText = styled.h2`
  color: ${COLORS.danger};
`;
