import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { Container } from '../Container/Container.styles';
import { ImageContainer, ImageWrapper } from '../Hero/Hero.styles';
import { Dots, Icon } from './ImageSlider.styles';

export const ImageSlider = ({ width, images }) => {
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
    slides: {
      origin: 'center',
      perView: 2.5,
      spacing: 10,
    },
  });

  return (
    <Container>
      <div>
        <div ref={sliderRef} className="keen-slider">
          {images.map(({ image_slider_image: image, description }, index) => (
            <div className="keen-slider__slide" key={index}>
              <ImageWrapper>
                <ImageContainer>
                  <Image src={image.url} layout="fill" />
                </ImageContainer>
              </ImageWrapper>
              <span>{description[0].text}</span>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={e => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
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
      )}
    </Container>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <Icon onClick={props.onClick} className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><g fill="none" fillRule="evenodd"> <path d="M0 0h28v28H0z" /> <g strokeLinecap="round" strokeLinejoin="round" stroke="#000" strokeWidth="1.75"> <path d="M4.375 14.004h19.25M15.75 6.125 23.625 14l-7.875 7.875" /></g></g></svg>
    </Icon>
  );
}
