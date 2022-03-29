import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    columns: ${({ amount }) => amount};
    flex-direction: row;
  }
`;
