import styled from 'styled-components';
import React from 'react';

export interface UnstyledButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  display?: string;
}

export const UnstyledButton = styled.button<UnstyledButtonProps>`
  display: ${({ display }) => display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
