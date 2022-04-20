import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  padding: var(--container-padding);

  @media (${({ theme }) => theme.respondTo.tablet}) {
    padding: 0;
  }
`;

export const Slide = styled.div`
  span {
    opacity: 0;
    transition: opacity 0.5s 0.1s ease-in;
  }

  &.active {
    span {
      display: inline-block;
      margin-top: 1.2rem;
      opacity: 1;

      .large & {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-bold);
      }
    }
  }
`;

export const SliderNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.large {
    margin-top: 3.2rem;
  }
`;

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
