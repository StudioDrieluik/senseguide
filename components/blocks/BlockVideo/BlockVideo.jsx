import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import { Container } from '../../Container/Container.styles';

export const BlockVideo = ({ block }) => {


  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: 'HrkWtRqpUwg',
        provider: 'youtube',
      },
    ],
  };

  return (
    <Container>
      <Plyr source={videoSrc} />
    </Container>
  );
};
