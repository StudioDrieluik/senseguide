import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  margin-top: -4rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
    gap: 1.6rem;
  }
`;

export const Content = styled.div`
  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 75%;
  }
`;

export const Filter = styled.nav`
  @media (${({ theme }) => theme.respondTo.desktop}) {
    align-self: flex-start;
    position: sticky;
    top: 6.4rem;
    width: 25%;
  }

  h3 {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-600);
    margin-bottom: 1.2rem;
  }

  ul {
    display: flex;
    gap: 1.2rem;
    padding-bottom: 1.2rem;
    overflow: auto;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      flex-direction: column;
      gap: 1.6rem;
      padding-bottom: 0;
    }
  }

  button {
    border: none;
    margin: 0;
    padding: 0.4rem 0.8rem;
    width: auto;
    background: var(--color-gray-100);
    color: var(--color-gray-600);
    font: inherit;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    -webkit-appearance: none;
    border: 2px solid var(--color-gray-300);
    border-radius: 1.2rem;
    cursor: pointer;
    transition: var(--transition);
    opacity: 0.8;

    &:hover,
    &:focus {
      color: inherit;
    }

    &[aria-current='true'] {
      background: white;
      opacity: 1;
      color: inherit;
      border-color: inherit;
    }

    @media (${({ theme }) => theme.respondTo.desktop}) {
      background: none;
      padding: 0;
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      border: 0;

      &[aria-current='true'] {
        background: none;
        text-decoration: underline;
      }
    }
  }
`;
