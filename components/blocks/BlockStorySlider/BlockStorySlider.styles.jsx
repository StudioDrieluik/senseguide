import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  max-width: var(--max-container-width);
  margin: 0 auto;
  padding: var(--container-padding);
  padding-right: 0;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    padding-right: var(--container-padding-horizontal);
  }
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;

  img {
    object-fit: cover;
    transition: transform var(--transition);
    backface-visibility: hidden;
  }

  a {
    display: block;
    height: 100%;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 2.4rem;
  color: white;
  z-index: 1;

  h4 {
    margin-bottom: 0;
    line-height: 1.2;
  }

  span {
    display: block;
    margin-bottom: 0.8rem;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  @media (${({ theme }) => theme.respondTo.tabletXL}) {
    padding: 2.4rem 3.2rem;

    span {
      margin-bottom: 1.2rem;
      font-size: var(--font-size-md);
    }
  }
`;

export const SliderNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2.4rem;
`;

export const Icon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 2px solid var(--color-gray-200);
  border-radius: 50%;
  background: none;
  opacity: 1;
  transition: var(--transition);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.6rem;
  }

  &:hover:not(.arrow--disabled) {
    border-color: var(--color-primary-300);

    svg {
      color: var(--color-primary-300);
    }
  }

  svg {
    width: 2.8rem;
    height: 2.8rem;
    transition: color var(--transition);
  }

  &.arrow--left svg {
    transform: rotate(180deg);
  }

  &.arrow--disabled {
    opacity: 0.6;
    cursor: not-allowed;

    svg {
      color: var(--color-gray-300);
    }
  }

  @media (${({ theme }) => theme.respondTo.desktop}) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;
