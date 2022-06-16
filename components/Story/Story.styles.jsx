import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 2.4rem;
  margin-bottom: 4.8rem;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    flex-direction: ${props => (props.compact && 'row')};
  }

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    flex-direction: ${props => (props.compact ? 'columm' : 'row')};
    gap: ${props => (props.compact ? '3.2rem' : '4rem')};
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    gap: ${props => (props.compact ? '4.8rem' : '7.2rem')};
    margin-bottom: ${props => (props.compact ? '4.8rem' : '7.2rem')};
  }

  a:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    aspect-ratio: ${props => (props.compact && '10 / 8')};
    width: ${props => (props.compact && '30%')};
  }

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    aspect-ratio: 4 / 3;
    width: 35%;
  }

  img {
    object-fit: cover;
    transition: var(--transition);
  }
  `;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  background: var(--color-gray-300);
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  a {
    display: inline-block;
  }

  h3 {
    margin-bottom: 1.2rem;
    font-size: ${props => props.compact && 'var(--font-size-lg)'};

    @media (${({ theme }) => theme.respondTo.desktop}) {
      margin-bottom: 2.4rem;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.compact ? '3' : '4'};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      -webkit-line-clamp: 5;
    }
  }
`;

export const TagList = styled.div`
  margin-bottom: 1.6rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    margin-top: -1rem;
    margin-bottom: 2.4rem;
  }

  &:empty {
    display: none;
  }

  time {
    margin-left: 1.6rem;
    color: var(--color-gray-600);
    font-weight: var(--font-weight-medium);
  }
`;

export const Tag = styled.div`
  display: inline-block;
  padding: 0.2rem 1.2rem;
  color: var(--color-gray-600);
  font-size: 1.4rem;
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-gray-300);
  border-radius: 2.5em;

  &:not(:last-of-type) {
    margin-right: 0.8rem;
    margin-bottom: 0.6rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding: 0.4rem 1.6rem;
    font-size: var(--font-size-xs);
  }
`;
