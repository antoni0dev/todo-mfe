import { styled } from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';

export const MaxWidthWrapper = styled.div`
  margin-top: 24px;
  height: 100%;
  margin-inline: auto;
  max-width: min(100%, 560px);
  height: 560px;
  overflow-y: auto;
  border: 1px solid ${COLORS.gray[700]};
  border-radius: 12px;
  padding: 24px;
`;

export const Title = styled.h1`
  color: ${COLORS.primary};
  text-align: center;
  font-weight: ${WEIGHTS.normal};
`;
