import { styled } from 'styled-components';
import { UnstyledButton } from '../ui/UnstyledButton';
import { COLORS, WEIGHTS } from '../../constants';

export const Wrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

export const FilterButton = styled(UnstyledButton)<{
  $isActive: boolean;
}>`
  font-size: 0.75rem;
  font-weight: ${WEIGHTS.medium};
  padding: 6px;
  border: 1px solid ${COLORS.gray[100]};
  background-color: ${({ $isActive }) => ($isActive ? COLORS.gray[300] : COLORS.gray[100])};
  border-radius: 12px;
`;
