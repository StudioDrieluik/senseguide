import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
  font-size: var(--font-size-md);

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 7rem;
  }

  p {
    + a {
      display: inline-block;
      margin: 2.4rem 0 0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    width: 40rem;
  }
`;

export const LogosWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (${({ theme }) => theme.respondTo.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(18rem, 0.5fr));
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem;

    @media (${({ theme }) => theme.respondTo.tablet}) {
      padding: 2rem;
    }

    img {
      object-fit: contain;
    }
  }
`;
