import React from 'react';
import { Wrapper } from './TextColumns.styles';

export const TextColumns = ({ children, amount = 1 }) => (
  <Wrapper amount={amount}>{children}</Wrapper>
);
