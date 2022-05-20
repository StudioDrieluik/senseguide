import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
  flex-direction: column;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    flex-direction: row;
  }

  &.variant-white {
    background: white;
    border: 2px solid var(--color-gray-300);
  }

  &.variant-purple {
    background: var(--color-primary-300);
    color: white;
  }
`;

export const ImageContainer = styled.div`
  flex: 1 0 40%;
  position: relative;
  aspect-ratio: 16 / 9;

  img {
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
  padding: 2.4rem;

  @media (${({ theme }) => theme.respondTo.tabletL}) {
    padding: 4rem 4.8rem;
  }

  p {
    flex-grow: 1;
  }

  .arrow-link {
    margin-top: 2.4rem;

    .variant-purple & a {
      color: white;
    }
  }
`;
