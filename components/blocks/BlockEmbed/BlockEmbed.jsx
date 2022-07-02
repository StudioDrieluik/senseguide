import { Container } from '../../Container/Container.styles';
import { Wrapper } from './BlockEmbed.styles';

export const BlockEmbed = ({ block }) => {
  return (
    <Wrapper>
      {block?.embed_title && (
        <Container small>
          <h3>{block?.embed_title[0].text}</h3>
        </Container>
      )}
      <Container small>
        <div dangerouslySetInnerHTML={{ __html: block.embed?.[0]?.text }} />
      </Container>
    </Wrapper>
  );
};
