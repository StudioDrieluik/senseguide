import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: 6.4rem 0 3.2rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;

  img {
    margin-bottom: 3.2rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;

    img {
      margin-bottom: 0;
    }
  }
`;

export const FooterTopLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem 6.4rem;

  a {
    display: flex;
    align-items: center;
    font-size: var(--font-size-md);
    font-weight: 500;

    svg {
      flex-shrink: 0;
      width: 3rem;
      height: 2.9rem;
      margin-right: 1.2rem;
    }
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-gray-600);
  font-size: var(--font-size-sm);

  > * {
    margin-bottom: 1.6rem;
  }

  a:hover span {
    text-decoration: underline;
  }

  span {
    order: 1;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;

    > * {
      margin-bottom: 0;
    }

    a::before {
      content: '·';
      margin: 0 0.6rem;
    }

    span {
      order: 0;
    }
  }
`;

export const FooterCredits = styled.div`
  color: var(--color-gray-600);
  font-size: var(--font-size-sm);

  a {
    text-decoration: underline;
  }
`;
