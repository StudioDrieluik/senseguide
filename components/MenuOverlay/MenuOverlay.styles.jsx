import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: var(--color-primary-300);
  color: var(--color-text-light);
  font-weight: bold;
  padding: 3.6rem;
  z-index: 999;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    min-width: 70rem;
    width: 40vw;
    padding: 3.2rem 6.4rem;
  }
`;

export const PageDarkOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
`;
