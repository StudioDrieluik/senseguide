import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 2.4rem;
  margin-bottom: 4.8rem;

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    flex-direction: row;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    gap: ${props => (props.compact ? '4.8rem' : '7.2rem')};
    margin-bottom: ${props => (props.compact ? '4.8rem' : '6.4rem')};
  }

  a:hover {
    img {
      transform: scale(1.05);
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

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    aspect-ratio: 4 / 3;
    flex-direction: row;
  }

  img {
    object-fit: cover;
    transition: var(--transition);
  }
`;

export const ContentWrapper = styled.div`
  h3 {
    position: relative;
    display: inline-block;
    font-size: ${props => (props.compact && 'var(--font-size-lg)')};

    /* @TODO: Create global animation for hover */
    &::after {
      content: '';
      position: absolute;
      height: 3px;
      bottom: 0;
      left: 0;
      right: 0;
      background: currentColor;
      opacity: 0;
      transition: var(--transition);
      transform: translateY(-0.3rem);
    }

    &:hover,
    &:focus {
      &:after {
        opacity: 1;
        transform: translateY(0rem);
      }
    }
  }
`

export const TagList = styled.div`
  margin-top: -1rem;
  margin-bottom: 1.6rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-bottom: 2.4rem;
  }
`

export const Tag = styled.div`
  display: inline-block;
  padding: 0.3rem 1.2rem;
  color: var(--color-gray-600);
  font-size: 1.4rem;
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-gray-300);
  border-radius: 2.5em;

  &:not(:last-of-type) {
    margin-right: 0.8rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 0.4rem 1.6rem;
    font-size: var(--font-size-xs);
  }
`
