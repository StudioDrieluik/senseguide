import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { Container } from '../Container/Container.styles';
import { Dots, Icon, Slide, SliderContainer, SliderNavigation } from './ImageSlider.styles';
import { ImageContainer, ImageWrapper } from '../blocks/BlockImage/BlockImage.styles';

export const ImageSlider = ({ width, images }) => {
  // @Lothar TODO: Ergens dient de container van de navigatie gelijk te zijn aan de breedte van de slide
  // Jij een handige manier om dit op te lossen?
  const isCompact = width === 'Half-width';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    initial: 0,
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: {
          origin: 'center',
          perView: `${isCompact ? 1.15 : 1.15}`,
          spacing: 16,
        },
      },
      "(min-width: 1025px)": {
        slides: {
          origin: 'center',
          perView: `${isCompact ? 2.5 : 1.15}`,
          spacing: 32,
        },
      },
      "(min-width: 1860px)": {
        slides: {
          origin: 'center',
          perView: `${isCompact ? 2.75 : 1.5}`,
          spacing: 48,
        },
      },
    },
  });

  return (
    <div>
      <SliderContainer>
        <div ref={sliderRef} className={`keen-slider ${isCompact ? 'compact' : 'large'}`}>
          {images.map(({ image_slider_image: image, description }, index) => (
            <Slide className={`keen-slider__slide ${currentSlide === index ? "active" : ""}`} key={index}>
              <ImageWrapper>
                <ImageContainer>
                  <Image src={image.url} layout="fill" />
                </ImageContainer>
              </ImageWrapper>
              <span>{description[0].text}</span>
            </Slide>
          ))}
        </div>
      </SliderContainer>
      {loaded && instanceRef.current && (
        <Container>
          <SliderNavigation className={isCompact ? 'compact' : 'large'}>
            <Dots>
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  ></button>
                );
              })}
            </Dots>
            <div>
              <Arrow
                left
                onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={e => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </div>
          </SliderNavigation>
        </Container>
      )}
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <Icon onClick={props.onClick} className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><g fill="none" fillRule="evenodd"> <path d="M0 0h28v28H0z" /> <g strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="1.75"> <path d="M4.375 14.004h19.25M15.75 6.125 23.625 14l-7.875 7.875" /></g></g></svg>
    </Icon>
  );
}
