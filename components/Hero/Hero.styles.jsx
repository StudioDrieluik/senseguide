import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  max-width: ${props => (props.image ? 'var(--max-container-width)' : 'var(--medium-container-width)')};
  max-width: ${props => props.workshop && 'var(--max-container-width)'};
  margin: 6rem auto 4rem; // @TODO: If Header will be fixed
  padding: var(--container-padding);

  @media (${({ theme }) => theme.respondTo.tablet}) {
    margin-bottom: 6rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
    margin-top: 14.4rem; // @TODO: If Header will be fixed
    margin-bottom: 13.6rem;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => (props.image ? '58.4rem' : 'var(--small-container-width)')};
  padding-top: 11.2rem;

  p {
    font-size: var(--font-size-md);
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-right: 4.8rem;

    h1 {
      margin-bottom: 4rem;
    }

    p {
      font-size: 2.2rem;
    }
  }
`;

export const Hexagon = styled.div`
  svg {
    position: absolute;
    top: 2.4rem;
    left: -25%;
    width: 38.8rem;
    height: 38.8rem;
    z-index: -1;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 4.8rem;
  width: 100%;
  aspect-ratio: 16 / 9;

  img {
    object-fit: cover;
  }

  svg {
    position: absolute;
    bottom: -3.5rem;
    right: 2.4rem;
    width: 6.2rem;
    height: 7rem;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    svg {
      bottom: -5rem;
      right: 2.4rem;
      width: 9.3rem;
      height: 10.5rem;
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    min-width: 40rem;
    max-width: 52rem;
    max-height: 64rem;
    margin-top: 0;
    aspect-ratio: 13 / 16;

    svg {
      bottom: 2.4rem;
      right: -6.2rem;
      width: 12.4rem;
      height: 14rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
`;
