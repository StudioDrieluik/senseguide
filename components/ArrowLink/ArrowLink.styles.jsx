import styled from 'styled-components';

export const Link = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: ${props => props.large && '20px'};
    font-weight: ${props => props.large ? 'var(--font-weight-medium)' : 'var(--font-weight-bold)'};
    transition: color var(--transition);

    > * {
      flex-shrink: 0;
    }

    &:hover {
      font-size: ${props => props.large ? 'white' : 'var(--color-primary-300)'};

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



