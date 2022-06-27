import styled from 'styled-components';

export const Crumbs = styled.nav`
  display: none;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    display: block;

    ol {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin: 0;
      margin-bottom: 0.8rem;
      padding: 0;
    }

    li {
      list-style: none;
      display: contents;
      flex-wrap: nowrap;
      align-items: center;


      &:last-child span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    a,
    span {
      color: var(--color-gray-600);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);

      &::first-letter {
        text-transform: uppercase;
      }
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
