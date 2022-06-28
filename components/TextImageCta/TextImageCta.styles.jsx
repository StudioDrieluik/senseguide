import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;

  @media (${({ theme }) => theme.respondTo.tabletXL}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 8rem;
    font-size: var(--font-size-md);
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    gap: 15rem;
  }

  p {
    + * {
      display: inline-block;
      margin: 2.4rem 0 0;
    }
  }
`;

export const Content = styled.div`
  flex: 1 0 55%;
  max-width: 70rem;
`;

export const ImageWrapper = styled.div`
  img {
    object-fit: cover;
  }
`;
