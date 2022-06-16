import styled from 'styled-components';

export const BlockWrapper = styled.div`
  width: 100%;

  a {
    font-weight: bold;
    text-decoration: underline;
    transition: color var(--transition);

    &:hover,
    &:focus {
      color: var(--color-primary-500);
    }
  }

  ul {
    list-style: initial;
    margin-left: 1.6rem;
  }

  // Component spacing
  > * + * {
    margin-top: 8rem;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    > * + * {
      margin-top: 10rem;
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    > * + * {
      margin-top: 16rem;
    }
  }
`;
