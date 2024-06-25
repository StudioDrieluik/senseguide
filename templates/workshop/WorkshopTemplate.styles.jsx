import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
    gap: 4.8rem;
  }

  @media (${({ theme }) => theme.respondTo.desktopXXL}) {
    padding-left: 10.2rem;
  }
`;

export const ContentBlocks = styled.div`
  width: 100%;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    max-width: 55vw;
  }

  @media (${({ theme }) => theme.respondTo.desktopXL}) {
    max-width: 84rem;
  }

  * {
    padding: 0;
    margin-left: 0;
  }

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
    margin-top: 4rem;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    > * + * {
      margin-top: 6.4rem;
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    > * + * {
      margin-top: 8rem;
    }
  }
`;

export const Intro = styled.p`
  margin-bottom: 2.4rem;
  font-size: var(--font-size-md);

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-bottom: 4rem;
    font-size: 2.2rem;
  }
`;

export const Meta = styled.div`
  order: -1;
  margin-top: -4rem;
  padding: 3.2rem;
  background: var(--color-primary-50);
  border-radius: var(--border-radius);

  li {
    margin-bottom: 2.4rem;
  }

  h4 {
    margin-bottom: 0;
    color: var(--color-gray-600);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
  }

  span {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
  }

  p {
    font-size: 1.5rem;
  }

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    width: 100%;
    padding: 3.2rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
    }

    li {
      width: calc(50% - 1.6rem);
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 37rem;
    order: 1;
    margin-top: 0;
    position: sticky;
    top: 110px;
    ul {
      display: block;
    }

    li {
      margin-bottom: 3.2rem;
      width: 100%;
    }

    span {
      font-size: 2.2rem;
    }
  }
`;
