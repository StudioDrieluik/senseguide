import styled from 'styled-components';

export const PanelGroup = styled.div`
  margin-top: 2.4rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-top: 4rem;
  }
`;

export const Panel = styled.div``;

export const PanelHeading = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background: none;
  color: inherit;
  border: none;
  border-top: 2px solid var(--color-gray-300);
  text-align: left;
  cursor: pointer;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 2.4rem 0;
  }
`;

export const PanelIcon = styled.svg`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1.6rem;

  path {
    transition: var(--transition);
    transition-duration: 0.25s;
    transform-origin: 50% 50%;
  }

  [aria-expanded='true'] & {
    .vertical {
      transform: rotate(-90deg);
    }

    .horizontal {
      opacity: 0;
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 2rem;
    height: 2rem;
    margin-right: 2.4rem;
  }
`;

export const PanelTitle = styled.h4`
  margin: 0;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);

  @media (${({ theme }) => theme.respondTo.desktop}) {
    font-size: 2.2rem;
  }
`;

export const PanelContent = styled.div`
  overflow: hidden;
  max-height: 0px;
  transition: max-height var(--transition);

  p {
    margin-bottom: 2.4rem;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      &:last-of-type {
        margin-bottom: 3.2rem;
      }
    }
  }

  &[aria-expanded='true'] {
    max-height: 1000px; // @TODO: Niet de beste manier
    transition: max-height 0.8s ease-in;
  }
`;