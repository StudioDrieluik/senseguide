import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;

  @media (${({ theme }) => theme.respondTo.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 15rem;
  }

  p {
    font-size: var(--font-size-md);
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ImageWrapper = styled.div`
  img {
    object-fit: cover;
  }
`;