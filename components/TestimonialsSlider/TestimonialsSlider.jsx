import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import {
  Icon,
  Slide,
  SlideContent,
  SliderContainer,
  SliderNavigation,
} from './TestimonialsSlider.styles';
import { Container } from '@/components/Container/Container.styles';

export const TestimonialsSlider = ({ slides }) => {
  if (!slides) {
    return null;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1.2,
      spacing: 24,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      '(min-width: 1600px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  });

  return (
    <div>
      <SliderContainer>
        <div ref={sliderRef} className={`keen-slider`}>
          {slides.map(({ testimonial: slide }, index) => {
            return (
              <Slide className={`keen-slider__slide`} key={index}>
                {slide?.logo?.url && (
                  <div className="image-wrapper">
                    <Image layout="fill" src={slide.logo?.url} />
                  </div>
                )}
                <SlideContent>
                  <p>{slide?.text?.[0]?.text}</p>
                  <div>
                    <span>{slide?.title?.[0]?.text}</span>
                    {slide?.position?.[0]?.text}
                  </div>
                </SlideContent>
              </Slide>
            );
          })}
        </div>
      </SliderContainer>
      {loaded && slides.length > 2 && instanceRef.current && (
        <Container>
          <SliderNavigation>
            <Arrow
              left
              onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={e => e.stopPropagation() || instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current?.track?.details?.slides.length -
                  Math.round(instanceRef.current?.options?.slides?.perView)
              }
            />
          </SliderNavigation>
        </Container>
      )}
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <Icon
      onClick={props.onClick}
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
        <g fill="none" fillRule="evenodd">
          {' '}
          <path d="M0 0h28v28H0z" />{' '}
          <g strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="1.75">
            {' '}
            <path d="M4.375 14.004h19.25M15.75 6.125 23.625 14l-7.875 7.875" />
          </g>
        </g>
      </svg>
    </Icon>
  );
}
