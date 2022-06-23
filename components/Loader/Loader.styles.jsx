import styled from "styled-components"

export const Spinner = styled.svg`
  display: ${props => props.isLoading ? 'block' : 'none'};
  height: 1.6rem;
  width: 1.6rem;
  animation: spin 1.25s linear infinite;
  color: white;

  circle {
    opacity: 0.25;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
