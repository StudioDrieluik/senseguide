import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  color: white;
  background: var(--color-primary-300);


  img {
    object-fit: cover;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    margin-bottom: 6.4rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    height: 90vh;
    flex-direction: row;
    margin-bottom: 16rem;
  }

  > *:first-child {
    position: relative;
    width: 100%;
    height: 50vh;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      height: auto;
      width: 40%;
    }
  }

  > *:nth-child(2) {
    flex: 1;
    padding: 2.4rem 1.6rem;

    @media (${({ theme }) => theme.respondTo.desktop}) {
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
