import { Container } from '../../Container/Container.styles';
import { Columns } from './BlockTitleTextCta.styles';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import Button from '../../Button/Button';
import { getUrlFromMeta } from '../../../utils/utils';

export const BlockTitleTextCta = ({ block }) => {
  const {
    title_text_cta_text_columns: columns,
    title_text_cta_title: title,
    title_text_cta_text: text,
    title_text_cta_cta_title: cta_title,
    title_text_cta_cta_link: link,
  } = block;

  return (
    <Container small={columns !== '2'}>
      {title && <h2>{title?.[0].text}</h2>}

      {text && (
        <Columns columns={columns}>
          <RichText render={text} htmlSerializer={htmlSerializer} />
        </Columns>
      )}

      {cta_title && (link?.url || link?._meta?.uid) && (
        <Button href={link?.url || getUrlFromMeta(link?._meta)} target={link?.url && '_blank'}>
          {cta_title[0].text}
        </Button>
      )}
    </Container>
  );
};
