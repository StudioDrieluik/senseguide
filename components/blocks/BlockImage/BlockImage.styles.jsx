import styled from 'styled-components';

export const ImageGrid = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImageGridItem = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 50%;
  }

  span {
    display: inline-block;
    margin-top: 1.2rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${props => (props.compact ? '4 / 3' : '16 / 9')};

  img {
    object-fit: cover;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    aspect-ratio: ${props => (props.compact ? '4 / 3' : '20 / 13')};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export const RatioImageWrapper = styled.div`
  text-align: center;

  img {
    max-height: 1200px;
  }
`;
