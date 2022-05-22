import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Wrapper, Content } from './SplitHero.styles';

export const SplitHero = ({
  hero_cta_link,
  hero_cta_title,
  hero_image,
  hero_links,
  hero_title,
}) => {
  return (
    <Wrapper>
      <div>
        <Image src={hero_image.url} layout="fill" />
      </div>
      <Content>
        {hero_title?.[0] && <h1>{hero_title[0].text}</h1>}
        <ul>
          {hero_links.map(link => {
            const title = link.title[0].text;
            return (
              <li key={title}>
                <h3>{title}</h3>
              </li>
            );
          })}
        </ul>
        {/* {hero_cta_link && hero_cta_title && (
          <Link href={hero_cta_link.url}>
            <a>{hero_cta_title?.[0]?.text}</a>
          </Link>
        )} */}
      </Content>
    </Wrapper>
  );
};
