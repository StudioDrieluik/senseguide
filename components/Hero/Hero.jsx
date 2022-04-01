import React from 'react';
import Image from 'next/image';
import { ContentWrapper, Hexagon, ImageContainer, ImageWrapper, Wrapper } from './Hero.styles';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const Hero = ({ title, image, intro, isWorkshop }) => {
  const hasParentPage = true; // @TODO: Check if page has parent

  return (
  <Wrapper image={image} workshop={isWorkshop}>
    <ContentWrapper>
      {/* @TODO: Breadcrumbs */}
      {hasParentPage && <Breadcrumbs parent='To-do' title={title} />}
      {title?.[0] && <h1>{title[0].text}</h1>}
      {intro?.[0] && !isWorkshop && <p>{intro[0].text}</p>}
      <Hexagon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343 385"><path d="M169.413 1.233 4.69 93.928A8 8 0 0 0 .613 100.9v181.631a8 8 0 0 0 4.028 6.944l164.723 94.227a8 8 0 0 0 8.012-.039l160.98-94.175a8 8 0 0 0 3.96-6.905V100.85a8 8 0 0 0-4.01-6.934L177.327 1.27a8 8 0 0 0-7.914-.038Z" fill="#FFF" fillRule="evenodd"/></svg>
      </Hexagon>
    </ContentWrapper>

    {image?.url && <ImageWrapper>
      <ImageContainer>
        <Image src={image.url} layout="fill" />
      </ImageContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 138"><path d="M58.59 1.233 4.136 31.877a8 8 0 0 0-4.077 6.972v59.759a8 8 0 0 0 4.028 6.944l54.455 31.15a8 8 0 0 0 8.012-.039l53.158-31.098a8 8 0 0 0 3.96-6.905V38.797a8 8 0 0 0-4.009-6.934L66.504 1.271a8 8 0 0 0-7.913-.038Z" fill="#7372B6" fillRule="evenodd"/></svg>
    </ImageWrapper>}
  </Wrapper>
);
  };
