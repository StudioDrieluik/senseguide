import Image from 'next/image';
import Button from '../../Button/Button';
import { Container } from '../../Container/Container.styles';
import { ContentWrapper, ImageContainer, Wrapper } from './BlockImageText.styles';

export const BlockImageText = ({ block }) => {
  const {
    image_cta_image: image,
    image_cta_image_alignment: alignment,
    image_cta_item_title: title,
    image_cta_item_text: text,
    image_cta_cta_title: cta_title,
    image_cta_cta_link: link,
  } = block;

  return (
    <Container>
      <Wrapper>
        {(image && alignment) && (
          <ImageContainer alignment={alignment}>
            <Image src={image.url} layout="fill" />
          </ImageContainer>
        )}
        <ContentWrapper>
          {title && <h3>{title?.[0]?.text}</h3>}
          {text && <p>{text?.[0]?.text}</p>}

          {/* @TODO:
          1. Verschillende links */}
          {link.url && cta_title && (
            <Button href={link?.url} target={link?.target} variant="primary">
              {cta_title?.[0]?.text}
            </Button>
          )}
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};
