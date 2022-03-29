import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  background: var(--color-primary-300);
  color: white;

  h1 {
    font-size: var(--font-size-xl);
    margin: 0 0 2.4rem;
  }

  img {
    object-fit: cover;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;

    > *:first-child {
      position: relative;
      width: 40%;
    }

    > *:nth-child(2) {
      flex: 1;
      padding: 10rem 5vw;
    }
  }
`;
