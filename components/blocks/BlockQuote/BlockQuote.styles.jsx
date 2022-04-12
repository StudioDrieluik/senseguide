import styled from 'styled-components';

export const Wrapper = styled.blockquote`
  position: relative;
  margin: 0;

  svg {
    position: absolute;
    top: -2.4rem;
    left: -2.4rem;
    width: 11.2rem;
    height: 8.4rem;
    z-index: -1;
  }

  p {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);

    &::before {
      content: '“';
    }

    &::after {
      content: '”';
    }
  }

  span {
    display: block;
    margin-top: 1.2rem;
    color: var(--color-gray-600);
    font-weight: var(--font-weight-medium);
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    p {
      font-size: var(--font-size-lg);
    }
  }
`;
