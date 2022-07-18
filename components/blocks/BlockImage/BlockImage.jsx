import Image from 'next/image';
import { Container } from '../../Container/Container.styles';
import { ImageContainer, ImageGrid, ImageGridItem, ImageWrapper, RatioImageWrapper } from './BlockImage.styles';
import { ImageSlider } from '../../ImageSlider.jsx/ImageSlider';

export const BlockImage = ({ block, images }) => {
  const { image_slider_sizing: width, title1: title } = block;

  if (images.length <= 2 && width === 'Half-width') {
    return (
      <Container>
        {title?.[0]?.text && <h3>{title?.[0]?.text}</h3>}
        <ImageGrid compact>
          {images.map(({ image_slider_image: image, description }, index) => (
            <ImageGridItem key={index}>
              <ImageWrapper compact>
                <ImageContainer>
                  <Image src={image.url} layout="fill" />
                </ImageContainer>
              </ImageWrapper>
              {description?.[0]?.text && <span>{description[0].text}</span>}
            </ImageGridItem>
          ))}
        </ImageGrid>
      </Container>
    );
  }

  if (images.length === 1 && width === 'Full-width') {
    const { image_slider_image: image, description, ratio } = images[0];
    return (
      <Container>
        {title?.[0]?.text && <h3>{title?.[0]?.text}</h3>}
        {ratio && (
          <RatioImageWrapper>
            <Image
              src={image.url}
              width={image.dimensions.width}
              height={image.dimensions.height}
            />
          </RatioImageWrapper>
        )}
        {!ratio && (
          <ImageWrapper>
            <ImageContainer>
              <Image src={image.url} layout="fill" />
            </ImageContainer>
          </ImageWrapper>
        )}
        {description?.[0]?.text && <span>{description[0].text}</span>}
      </Container>
    );
  }

  return <ImageSlider width={width} title={title} images={images} />;
};
