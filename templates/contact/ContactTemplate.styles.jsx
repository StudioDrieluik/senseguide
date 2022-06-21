import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
  }
`
