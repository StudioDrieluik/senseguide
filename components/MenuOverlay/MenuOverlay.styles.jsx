import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: var(--color-primary-300);
  color: var(--color-text-light);
  font-weight: bold;
  padding: 4.8rem 3.2rem;
  z-index: 999;
  overflow: auto;

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

export const Menu = styled.nav`
  margin-top: auto;
  margin-bottom: 2.4rem;
  padding-top: 2.4rem;
  width: 100%;
  text-align: center;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-top: 0;
    width: auto;
    text-align: left;
  }
`;

export const MenuList = styled(motion.ul)``;

export const MenuItem = styled(motion.li)`
  position: relative;
  margin-bottom: 2.4rem;
  font-size: calc(2rem + 2vw);

  a {
    position: relative;
    display: inline-block;
    text-decoration: underline 0.125em rgba(255, 255, 255, 0);
    transition: text-decoration-color var(--transition), color var(--transition);

    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 1);
      text-decoration-color: rgba(255, 255, 255, 1);
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 4rem;
  }
`;

export const LanguageWrapper = styled(motion.div)`
  margin-top: auto;

  > div {
    gap: 1.6rem;
  }

  a {
    font-size: var(--font-size-md);
    opacity: 0.6;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    display: none;
  }
`;
