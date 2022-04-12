import styled from 'styled-components';

export const BlockWrapper = styled.div`
  width: 100%;

  // Component spacing
  > * + * {
    margin-top: 8rem;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    > * + * {
      margin-top: 10rem;
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    > * + * {
      margin-top: 16rem;
    }
  }
`;
