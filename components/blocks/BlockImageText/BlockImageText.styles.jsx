import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3.2rem;

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    flex-direction: row;
  }

  @media (${({ theme }) => theme.respondTo.desktopL}) {
    align-items: center;
    gap: 12rem;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 1 60%;

  @media (${({ theme }) => theme.respondTo.desktop}) {
  }
`;

export const ImageContainer = styled.div`
  flex: 1 0 40%;
  width: 100%;
  max-width: 560px;
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    aspect-ratio: 4 / 3;
    order: ${props => (props.alignment == 'Left' ? '0' : '1')};
  }

  img {
    object-fit: cover;
  }
`;