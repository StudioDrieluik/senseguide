import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ContentWrapper, Hexagon, ImageContainer, ImageWrapper, LittleHexagon, Wrapper } from './Hero.styles';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useRouter } from 'next/router';

export const Hero = ({ title, image, intro, isWorkshop }) => {
  const router = useRouter();
  const [hasParent, setHasParent] = useState(false);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      if (linkPath.length > 1) {
        setHasParent(true);
      }
    }
  }, [router]);

  return (
    <Wrapper image={image} workshop={isWorkshop}>
      <ContentWrapper>
        {hasParent && <Breadcrumbs />}
        {title && (title?.[0].text ? <h1>{title[0].text}</h1> : <h1>{title}</h1>)}
        {intro?.[0] && !isWorkshop && <p>{intro[0].text}</p>}
        <Hexagon
          initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5, delay: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343 385">
            <path
              d="M169.413 1.233 4.69 93.928A8 8 0 0 0 .613 100.9v181.631a8 8 0 0 0 4.028 6.944l164.723 94.227a8 8 0 0 0 8.012-.039l160.98-94.175a8 8 0 0 0 3.96-6.905V100.85a8 8 0 0 0-4.01-6.934L177.327 1.27a8 8 0 0 0-7.914-.038Z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </Hexagon>
      </ContentWrapper>

      {image?.url && (
        <ImageWrapper>
          <ImageContainer>
            <Image src={image.url} layout="fill" priority />
          </ImageContainer>
          <LittleHexagon
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5, delay: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 138">
              <path
                d="M58.59 1.233 4.136 31.877a8 8 0 0 0-4.077 6.972v59.759a8 8 0 0 0 4.028 6.944l54.455 31.15a8 8 0 0 0 8.012-.039l53.158-31.098a8 8 0 0 0 3.96-6.905V38.797a8 8 0 0 0-4.009-6.934L66.504 1.271a8 8 0 0 0-7.913-.038Z"
                fill="#7372B6"
                fillRule="evenodd"
              />
            </svg>
          </LittleHexagon>
        </ImageWrapper>
      )}
    </Wrapper>
  );
};
