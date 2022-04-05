import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (${({ theme }) => theme.respondTo.desktop}) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;

  img {
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`

`

export const TagList = styled.div`
  margin-top: -1rem;
  margin-bottom: 2.4rem;
`

export const Tag = styled.div`
  display: inline-block;
  padding: 0.4rem 1.6rem;
  color: var(--color-gray-600);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-gray-300);
  border-radius: 2.5em;

  &:not(:last-of-type) {
    margin-right: 0.8rem;
  }
`
