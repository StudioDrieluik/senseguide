import Image from 'next/image';
import { Container } from '../../Container/Container.styles';
import { ImageContainer, ImageGrid, ImageGridItem, ImageWrapper } from './BlockImage.styles';
import { ImageSlider } from '../../ImageSlider.jsx/ImageSlider';

export const BlockImage = ({ block, images }) => {
  const { image_slider_sizing: width } = block;

  if (images.length <= 2 && width === 'Half-width') {
    return (
      <Container>
        <ImageGrid compact>
          {images.map(({ image_slider_image: image, description }, index) => (
            <ImageGridItem key={index}>
              <ImageWrapper compact>
                <ImageContainer>
                  <Image src={image.url} layout="fill" />
                </ImageContainer>
              </ImageWrapper>
              <span>{description[0].text}</span>
            </ImageGridItem>
          ))}
        </ImageGrid>
      </Container>
    );
  }

  if (images.length === 1 && width === 'Full-width') {
    const { image_slider_image: image, description } = images[0];
    return (
      <Container>
        <ImageWrapper>
          <ImageContainer>
            {/* @TODO: Guess contain will be a better choice */}
            <Image src={image.url} layout="fill" />
          </ImageContainer>
        </ImageWrapper>
        <span>{description[0].text}</span>
      </Container>
    );
  }

  return <ImageSlider width={width} images={images} />;
};
