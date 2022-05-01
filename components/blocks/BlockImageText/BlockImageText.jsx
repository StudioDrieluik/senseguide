import Image from 'next/image';
import Link from 'next/link';
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

  console.log(alignment);

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
          1. Global Button
          2. Verschillende links */}
          {link.url && cta_title && (
            <Link href={link?.url} target={link?.target}>
              {cta_title?.[0]?.text}
            </Link>
          )}
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};
