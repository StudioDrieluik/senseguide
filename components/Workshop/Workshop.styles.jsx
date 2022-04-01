import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2.4rem;
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-gray-300);

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
  }

  h3 {
    margin-bottom: 1.2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -2rem 2rem;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 2rem;
  }

  span {
    color: var(--color-gray-600);
    font-weight: var(--font-weight-medium);
  }

  svg {
    flex-shrink: 0;
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.2rem;
  }

  a {
    display: inline-block;
    padding: 1rem 2.4rem;
    border-radius: 4rem;
    color: white;
    background: var(--color-primary-300);
    font-weight: var(--font-weight-medium);
  }
`

export const ContentWrapper = styled.div`
  max-width: 73.4rem;
`;
