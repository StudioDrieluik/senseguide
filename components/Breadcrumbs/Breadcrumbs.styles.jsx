import styled from 'styled-components';

export const Crumbs = styled.nav`
  display: none;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;

    a,
    span {
      color: var(--color-gray-600);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
    }

    a:hover {
      text-decoration: underline;
    }

    svg {
      width: 0.9rem;
      height: 0.9rem;
      margin: 0 0.4rem;
    }
  }
`;
