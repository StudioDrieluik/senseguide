import styled from 'styled-components';

export const Link = styled.div`
  flex-shrink: 0;

  a {
    display: inline-block;
    padding: 1.2rem 2.4rem;
    color: var(--color-secondary-300);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-secondary-300);
    border-radius: 2.6rem;
    transition: all var(--transition);

    &:hover {
      color: white;
      background: var(--color-secondary-300);
    }

    span {
      font-size: var(--font-size-base);
      color: inherit;
    }

    svg {
      display: none;
    }
  }

  &[class*='is-'] a {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    color: white;

    &:hover {
      svg {
        transform: translateX(0.4rem); // @TODO better animation
      }
    }

    svg {
      flex-shrink: 0;
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      transition: transform var(--transition);
    }
  }

  &.is-primary a {
    background: var(--color-secondary-300);
    border-color: var(--color-secondary-300);

    &:hover {
      background: var(--color-secondary-500);
    }
  }

  &.is-secondary a {
    background: var(--color-primary-300);
    border-color: var(--color-primary-300);

    &:hover {
      background: var(--color-primary-500);
    }

    svg {
      display: none;
    }
  }

  &.is-secondary-arrow a {
    background: var(--color-primary-300);
    border-color: var(--color-primary-300);

    &:hover {
      background: var(--color-primary-500);
    }
  }
`;



