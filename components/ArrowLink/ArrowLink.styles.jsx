import styled from 'styled-components';

export const Link = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: var(--font-weight-bold);

    > * {
      flex-shrink: 0;
    }

    &:hover {
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



