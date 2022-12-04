import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4.8rem 0.8rem 7.2rem;
  z-index: var(--z-contactform-overlay);
  pointer-events: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 2px solid var(--color-gray-300);
  box-shadow: none;
  background: white;
  height: 4rem;
  width: 4rem;
  color: var(--color-text-dark);
  font-family: inherit;
  font-weight: bold;
  border-radius: 2rem;
  font-size: 0;
  cursor: pointer;
  transition: border var(--transition);

  svg {
    position: relative;
    width: 1.4rem;
    height: 1.4rem;
  }

  &:hover,
  &:focus {
    border-color: var(--color-text-dark);
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    top: 2rem;
    gap: 0.8rem;
    height: 4rem;
    width: 8.8rem;
    border-radius: 2rem;
    font-size: 15px;
  }

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    height: 4rem;
    width: 10.8rem;
    font-size: 17px;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;
export const ContentWrapper = styled(motion.div)`
  position: relative;
  width: calc(100vw - 1.6rem);
  max-width: 78.9rem;
  margin: 2.4rem auto;
  height: 100%;
  background: white;
  border-radius: var(--border-radius);
  z-index: var(--z-contactform-overlay-wrapper);
  overflow: auto;
  max-height: 100%;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    height: auto;
    top: 5%;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 2.4rem;
    top: 10%;
  }
`;

export const PageDarkOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: var(--z-contactform-background);
`;
