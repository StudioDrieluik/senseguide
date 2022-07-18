import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: var(--container-padding);

  .is-workshop & {
    width: auto;
    max-width: none;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    padding: 0;
  }
`;

export const Slide = styled.div`
  transition: opacity 0.5s 0.1s ease-in;
  span {
    opacity: 0;
    transition: opacity 0.5s 0.1s ease-in;
  }

  &.last {
    opacity: 0.3;
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
    margin-top: 1.6rem;
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
  opacity: 1;
  transition: var(--transition);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.6rem;
  }

  &:hover:not(.arrow--disabled) {
    border-color: var(--color-primary-300);

    svg {
      color: var(--color-primary-300);
    }
  }

  svg {
    width: 2.8rem;
    height: 2.8rem;
    transition: color var(--transition);
  }

  &.arrow--left svg {
    transform: rotate(180deg);
  }

  &.arrow--disabled {
    opacity: 0.6;
    cursor: not-allowed;

    svg {
      color: var(--color-gray-300);
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

export const Dots = styled.div`
  display: inline-flex;
  gap: 0.8rem;

  .dot {
    flex-shrink: 0;
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
`;
