import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  &[class*='variant'] {
    padding: 2.4rem;
    border-radius: var(--border-radius);
  }

  &.variant-white {
    background: white;
    border: 2px solid var(--color-gray-300);
  }

  &.variant-purple {
    background: var(--color-primary-300);
    color: white;
  }

  @media (${({ theme }) => theme.respondTo.tablet}) {
    flex-direction: row;
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    align-items: center;

    &[class*='variant'] {
      padding: 4.8rem;
    }
  }
`;

export const ContentWrapper = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 8rem;
  height: 8rem;
  margin-right: 3.2rem;
  margin-bottom: 2.4rem;
  border-radius: 50%;
  overflow: hidden;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 19.6rem;
    height: 19.6rem;
    margin-right: 4.8rem;
    margin-bottom: 0;

    [class*='variant'] & {
      width: 16rem;
      height: 16rem;
    }
  }

  img {
    object-fit: cover;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 2.4rem;
  margin-top: 2.4rem;

  a {
    display: flex;
    align-items: center;
    font-weight: var(--font-weight-medium);
    transition: color var(--transition);

    &:hover {
      color: var(--color-primary-300);

      svg {
        color: var(--color-primary-300);
      }

      .variant-purple & {
        color: white;

        svg {
          color: white;
        }

        span {
          text-decoration: underline; // @TODO: default animation for links on purple?
        }
      }
    }

    svg {
      flex-shrink: 0;
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 0.8rem;
      transition: color var(--transition);
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    gap: 6.4rem;
    margin-top: 3.2rem;

    a {
      font-size: var(--font-size-md);

      svg {
        flex-shrink: 0;
        width: 3rem;
        height: 2.9rem;
        margin-right: 1.2rem;
      }
    }
  }
`;
