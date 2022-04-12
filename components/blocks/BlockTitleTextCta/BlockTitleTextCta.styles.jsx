import styled from "styled-components";

export const Wrapper = styled.div`
  .two-columns {
    @media (${({ theme }) => theme.respondTo.desktop}) {
      column-count: 2;
      column-gap: 4rem;
    }

    @media (${({ theme }) => theme.respondTo.desktopL}) {
      column-gap: 12rem;
    }
  }
`
