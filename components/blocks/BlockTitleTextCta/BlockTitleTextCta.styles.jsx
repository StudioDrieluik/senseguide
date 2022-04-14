import styled from "styled-components";

export const Columns = styled.p`
  @media (${({ theme }) => theme.respondTo.desktop}) {
    column-count: ${props => (props.columns)};
    column-gap: 4rem;
  }

  @media (${({ theme }) => theme.respondTo.desktopL}) {
    column-gap: 12rem;
  }
`
