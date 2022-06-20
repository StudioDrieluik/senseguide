import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: var(--color-secondary-300);
  color: white;
  border-radius: 50px;
  padding: 1rem 1.75rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    bottom: 3rem;
    right: 3rem;
    padding: 1.25rem 2.5rem;
    font-size: 1.7rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
  }
`;
