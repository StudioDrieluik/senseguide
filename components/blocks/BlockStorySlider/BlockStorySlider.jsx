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
} from './BlockStorySlider.styles';
import { Container } from '../../Container/Container.styles';
import ArrowLink from '../../ArrowLink/ArrowLink';
import Link from 'next/link';
import { getUrlFromMeta } from '../../../utils/utils';
import useTranslation from 'next-translate/useTranslation';

export const BlockStorySlider = ({ title, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation('common');

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1.3,
      spacing: 24,
    },
    breakpoints: {
      '(min-width: 480px)': {
        slides: {
          perView: 1.8,
          spacing: 24,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 2.4,
          spacing: 24,
        },
      },
      '(min-width: 1025px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
      '(min-width: 1600px)': {
        slides: {
          perView: 4,
          spacing: 32,
        },
      },
    },
  });

  return (
    <div>
      {title && (
        <Container className="flex flex-col md:flex-row justify-between md:items-center">
          <h2 className="mb-3 md:mb-[2.4rem]">{title} </h2>
          <ArrowLink className="mb-12 md:m-0" href={t('menu.storySliderCtaLink')}>
            {t('home.storySliderCta')}
          </ArrowLink>
        </Container>
      )}
      <SliderContainer>
        <div ref={sliderRef} className={`keen-slider`}>
          {slides.map((slide, index) => {
            if (!slide?.story_slider_story) return;
            const href = getUrlFromMeta(slide?.story_slider_story?._meta);
            return (
              <Slide className={`keen-slider__slide`} key={index}>
                <Link href={href}>
                  <a>
                    <SlideContent>
                      <span>{slide.story_slider_story.category}</span>
                      <h4>{slide.story_slider_story.title?.[0]?.text}</h4>
                    </SlideContent>
                    {slide.story_slider_story.image && (
                      <Image src={slide.story_slider_story.image?.url} layout="fill" />
                    )}
                  </a>
                </Link>
              </Slide>
            );
          })}
        </div>
      </SliderContainer>
      {loaded && slides.length > 3 && instanceRef.current && (
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
