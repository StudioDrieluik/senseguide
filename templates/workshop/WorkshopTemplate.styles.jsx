import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 3.2rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
    gap: 4.8rem;
  }

  @media (${({ theme }) => theme.respondTo.desktopXXL}) {
    padding-left: 10.2rem;
  }
`;

export const ContentBlocks = styled.div`
  * {
    padding: 0;
    margin-left: 0;
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
`

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
  min-width: 37rem;
  padding: 2.4rem;
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

  @media (${({ theme }) => theme.respondTo.desktop}) {
    order: 1;
    padding: 4rem;

    li {
      margin-bottom: 3.2rem;
    }

    span {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`
