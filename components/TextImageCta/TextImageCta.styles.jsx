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

  h3 {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 0;
    font-size: 2.2rem;
    font-weight: normal;
    text-decoration: underline 0.1em rgba(255, 255, 255, 0);
    transition: var(--transition);

    svg {
      width: 2rem;
      height: 2rem;
    }

    @media (${({ theme }) => theme.respondTo.desktop}) {
      font-size: 2rem;
      transform: translateX(-3.6rem);

      svg {
        width: 2.4rem;
        height: 2.4rem;
        opacity: 0;
        transform: translateX(-2rem);
        transition: var(--transition);
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  img {
    object-fit: cover;
  }
`;
