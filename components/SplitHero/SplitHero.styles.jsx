import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  background: var(--color-primary-300);
  color: white;

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

export const Content = styled.div`
  h1 {
    font-size: var(--font-size-xxxl);
    margin: 0 0 4rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: normal;
  }

  ul {
    margin: 0 0 14rem;
  }
`;
