import styled from 'styled-components';

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 999;
  color: ${({ variant }) => variant || 'inherit'};
  font-weight: bold;
  padding: 1.6rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 3.2rem 6.4rem;
  }

  svg {
    width: 14rem;
    height: auto;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      width: 20rem;
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 4.8rem;
    display: none;
    @media (${({ theme }) => theme.respondTo.desktop}) {
      display: flex;
    }
  }
`;

export const LanguageSwitch = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Hamburger = styled.button`
  display: inline-block;
  appearance: none;
  border: none;
  box-shadow: none;
  background: white;
  height: 3.2rem;
  width: 8.7rem;
  color: var(--color-text-dark);
  font-family: inherit;
  font-weight: bold;
  border-radius: 2rem;
  font-size: 15px;
  z-index: 999999;
  cursor: pointer;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    height: 4rem;
    width: 11rem;
    font-size: 17px;
  }
`;
