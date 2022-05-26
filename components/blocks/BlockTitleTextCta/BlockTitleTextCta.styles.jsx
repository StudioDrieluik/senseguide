import styled from 'styled-components';

export const Columns = styled.div`
  @media (${({ theme }) => theme.respondTo.desktop}) {
    column-count: ${props => props.columns};
    column-gap: 4rem;
  }

  @media (${({ theme }) => theme.respondTo.desktopL}) {
    column-gap: 12rem;
  }

  + .btn {
    margin: 2.4rem 0 0;
  }
`;
