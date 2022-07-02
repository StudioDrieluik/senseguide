import styled from 'styled-components';

export const Wrapper = styled.div`
  p {
    margin-bottom: 1.6rem;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      margin-bottom: 4.8rem;
    }
  }
`;
