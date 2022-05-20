import styled from 'styled-components';

export const Link = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: var(--font-weight-bold);
    transition: color var(--transition);

    > * {
      flex-shrink: 0;
    }

    &:hover {
      color: var(--color-primary-300);

      svg {
        transform: translateX(0.4rem); // @TODO better animation
      }
    }
  }

  span {
    text-decoration: underline;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: transform var(--transition);
  }

  @media (${({ theme }) => theme.respondTo.tabletL}) {
  }
`;



