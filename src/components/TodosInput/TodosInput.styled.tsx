import { styled } from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import { UnstyledButton } from '../ui/UnstyledButton';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${COLORS.gray[700]};
  border-radius: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 12px;
  border: none;
  outline: none;
`;

export const Button = styled(UnstyledButton)`
  min-width: 55px;
  color: ${COLORS.primary};
  padding: 12px;
  border-left: 1px solid ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};

  &:disabled {
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[300]};
    cursor: not-allowed;
  }
`;
