import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5.6rem;
  color: white;
  background: var(--color-primary-300);

  img {
    object-fit: cover;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    margin-bottom: 6.4rem;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    height: 90vh;
    flex-direction: row;
    margin-bottom: 16rem;
  }

  > *:first-child {
    position: relative;
    width: 100%;
    height: 50vh;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      height: auto;
      width: 40%;
    }
  }

  > *:nth-child(2) {
    flex: 1;
    padding: 2.4rem 1.6rem;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      padding: 15rem 5vw 10rem;
    }
  }
`;

export const Content = styled.div`
  h1 {
    font-size: var(--font-size-xxxl);
    margin: 0 0 4rem;
  }

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
      font-size: 2.8rem;
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

  li a {
    display: block;
    margin-top: 1.2rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    @media (${({ theme }) => theme.respondTo.desktop}) {
      margin-top: 2.4rem;
      padding-bottom: 2.4rem;
    }

    &:hover,
    &:focus {
      h3 {
        text-decoration-color: white;

        @media (${({ theme }) => theme.respondTo.desktop}) {
          transform: translateX(-1.6rem);
        }
      }

      svg {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &:focus-within {
      outline: none;
    }
  }

  ul {
    margin: 0 0 8rem;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      margin: 0 0 14rem;
    }
  }
`;
