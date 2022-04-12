import styled from 'styled-components';

export const BlockWrapper = styled.div`
  width: 100%;
  margin: 10rem 0 0;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    margin: 21.6rem 0 0;
  }
`;
