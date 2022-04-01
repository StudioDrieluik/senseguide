import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: var(--container-padding);

  @media (${({ theme }) => theme.respondTo.tablet}) {
    max-width: var(--max-container-width);
    max-width: ${props => props.medium && 'var(--medium-container-width)'};
    max-width: ${props => props.small && 'var(--small-container-width)'};
  }
`
