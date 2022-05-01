import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { Container } from '../../Container/Container.styles';
import { VideoWrapper, Wrapper } from './BlockVideo.styles';

export const BlockVideo = ({ block }) => {
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: `${block.video_id?.[0].text}`,
        provider: `${block.video_source.toLowerCase()}`,
      },
    ],
  };

  return (
    <Wrapper>
      <Container small>
        {block?.video_title && <h3>{block?.video_title[0].text}</h3>}

        {block?.video_text && <p>{block?.video_text[0].text}</p>}
      </Container>
      <Container medium>
        <VideoWrapper>{block.video_id?.[0]?.text && <Plyr source={videoSrc} />}</VideoWrapper>
      </Container>
    </Wrapper>
  );
};
