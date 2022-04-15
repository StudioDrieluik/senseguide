import styled from "styled-components";

export const Icon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 2px solid var(--color-gray-200);
  border-radius: 50%;
  background: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.6rem;
  }

  svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  &.arrow--left svg {
    transform: rotate(180deg);
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 4.8rem;
    height: 4.8rem;
  }
`

export const Dots = styled.div`
  display: inline-flex;
  gap: 0.8rem;

  .dot {
    width: 1.2rem;
    height: 1.2rem;
    background: var(--color-gray-300);
    border: 0;
    border-radius: 50%;
    transition: background var(--transition);

    &.active {
      background: var(--color-primary-200);
    }
  }
`
