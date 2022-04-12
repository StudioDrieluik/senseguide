import styled from "styled-components";

export const Wrapper = styled.div`
  p {
    margin-bottom: 1.6rem;

    @media (${({ theme }) => theme.respondTo.desktop}) {
      margin-bottom: 4.8rem;

    }
  }
`;

export const VideoWrapper = styled.div`
  --plyr-video-control-background-hover: var(--color-primary-300);
  --plyr-color-main: var(--color-primary-300);

  border-radius: var(--border-radius);
  overflow: hidden;

  .plyr__control--overlaid {
    --plyr-control-spacing: 1.6rem;
    --plyr-control-icon-size: 2.4rem;
  }

  .plyr--stopped .plyr__controls {
    opacity: 0; // Hide controls by default
  }
`
