import { styled } from 'styled-components';
import { COLORS } from '../../constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li`
  border: 1px solid ${COLORS.gray[500]};
  border-radius: 12px;

  /* Give different padding for bottom for Optical Alignment due to line-height */
  padding: 12px 12px 8px 12px;
  text-decoration: none;
  list-style-type: none;

  display: flex;
`;

export const TodoName = styled.span<{
  $isCompleted: boolean;
}>`
  color: ${COLORS.secondary};
  flex: 1;
  font-size: 1.1rem;
  text-decoration: ${({ $isCompleted }) => $isCompleted && 'line-through'};
`;

export const DoneCheckbox = styled.input<{
  $isCompleted: boolean;
}>`
  min-width: 35px;
  border: 2px solid ${({ $isCompleted }) => ($isCompleted ? COLORS.warning : COLORS.primary)};
  border-radius: 12px;
  accent-color: ${({ $isCompleted }) => $isCompleted && COLORS.primary};
  padding: 2px;

  display: grid;
  place-content: center;
`;
