import styled from 'styled-components';

export const Link = styled.div`
  a {
    display: inline-block;
  }

  h3 {
    position: relative;
    display: inline-block;
    text-decoration: underline 0.15em rgba(255, 255, 255, 0);
    transition: text-decoration-color var(--transition), color var(--transition);

    &:hover,
    &:focus {
      color: var(--color-primary-300);
      text-decoration-color: var(--color-primary-300);
    }
  }
`;



