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
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--color-white);
  padding: 2.4rem;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    aspect-ratio: 4/3;
  }
  @media (${({ theme }) => theme.respondTo.desktopXXL}) {
    aspect-ratio: 1;
  }

  .image-wrapper {
    position: relative;
    max-width: 15rem;
    height: 30px;
    width: 100%;
    margin: 0 0 2.4rem;
    flex-shrink: 0;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      height: 75px;
    }

    img {
      object-fit: contain;
    }
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  z-index: 1;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0 0 2.4rem;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
  }

  h4 {
    margin-bottom: 0;
    line-height: 1.2;
  }

  span {
    display: block;
    font-weight: bold;
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
