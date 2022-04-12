import { Container } from "../../Container/Container.styles";
import { Wrapper } from "./BlockTitleTextCta.styles";

export const BlockTitleTextCta = ({ block }) => {
  // @TODO: Remove
  console.log(block.title_text_cta_text_columns);

  return (
    <Container medium={block?.title_text_cta_text_columns !== '2'}>
      <Wrapper>
        {block?.title_text_cta_title && <h2>{block?.title_text_cta_title[0].text}</h2>}

        {block?.title_text_cta_text &&
          <p className={block?.title_text_cta_text_columns === '2' ? 'two-columns' : ''}>{block?.title_text_cta_text[0].text}</p>
        }

        {block?.title_text_cta_cta_title && block?.title_text_cta_cta_link?.url && (
          // @TODO: Global button
          <a type="button" href={block?.title_text_cta_cta_link?.url} target={block?.title_text_cta_cta_link?.target} >{block?.title_text_cta_cta_title[0].text}</a>
        )}
        {/* @Lothar TODO: cta_link for document werkt niet? */}
      </Wrapper>
    </Container>
  );
};
