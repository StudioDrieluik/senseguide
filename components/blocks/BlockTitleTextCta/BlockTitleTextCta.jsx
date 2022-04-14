import { Container } from "../../Container/Container.styles";
import { Columns } from "./BlockTitleTextCta.styles";

export const BlockTitleTextCta = ({ block }) => {
  return (
    <Container small={block?.title_text_cta_text_columns !== '2'}>
        {block?.title_text_cta_title && <h2>{block?.title_text_cta_title[0].text}</h2>}

        {block?.title_text_cta_text &&
          <Columns columns={block?.title_text_cta_text_columns}>{block?.title_text_cta_text[0].text}</Columns>
        }

        {block?.title_text_cta_cta_title && block?.title_text_cta_cta_link?.url && (
          // @TODO: Global button
          <a type="button" href={block?.title_text_cta_cta_link?.url} target={block?.title_text_cta_cta_link?.target} >{block?.title_text_cta_cta_title[0].text}</a>
        )}
        {/* @Lothar TODO: cta_link for document werkt niet? */}
    </Container>
  );
};
