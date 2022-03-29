import Image from 'next/image';
import React from 'react';
import { Wrapper } from './SplitHero.styles';

export const SplitHero = ({
  hero_cta_link,
  hero_cta_title,
  hero_image,
  hero_links,
  hero_title,
}) => {
  console.log({ hero_cta_link, hero_cta_title, hero_image, hero_links, hero_title });
  return (
    <Wrapper>
      <div>
        <Image src={hero_image.url} layout="fill" />
      </div>
      <div>
        {hero_title?.[0] && <h1>{hero_title[0].text}</h1>}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi numquam debitis dolorum
        aspernatur similique distinctio, facilis fuga neque. Eos, incidunt.
      </div>
    </Wrapper>
  );
};
