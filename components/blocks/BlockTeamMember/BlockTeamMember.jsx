import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '@/utils/htmlSerializer';
import { Container } from '../../Container/Container.styles';
import Button from '../../Button/Button';
import { ButtonGroup, ContentWrapper, ImageContainer, Wrapper } from '../BlockImageText/BlockImageText.styles';
import useTranslation from 'next-translate/useTranslation';

export const BlockTeamMember = ({ block }) => {
  const { t } = useTranslation('common');
  const alignment = block.position_image;
  const {
    first_name,
    last_name,
    linkedin,
    email_address,
    image
  } = block.person;

  return (
    <Container>
      <Wrapper>
        {(image?.url && alignment) && (
          <ImageContainer alignment={alignment}>
            <Image src={image.url} layout="fill" />
          </ImageContainer>
        )}
        <ContentWrapper>
          {first_name && <h4>{first_name?.[0]?.text} {last_name?.[0]?.text}</h4>}
          {block.text && (
            <RichText render={block.text} htmlSerializer={htmlSerializer} />
          )}
          {(linkedin || email_address) && (
            <ButtonGroup>
              {linkedin && (
                <Button target="blank" href={linkedin?.[0]?.text}>
                  LinkedIn
                </Button>
              )}
              {email_address && (
                <Button variant="primary" href={`mailto:${email_address?.[0]?.text}`}>
                  {t('teamMemberBlock.button')}
                </Button>
              )}
            </ButtonGroup>
          )}
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};
