import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getUrlFromMeta } from '../../utils/utils';
import HeadingLink from '../HeadingLink/HeadingLink';
import {
  ContentWrapper,
  ImageContainer,
  ImageWrapper,
  Tag,
  TagList,
  Wrapper,
} from './Story.styles';

const Story = ({ data, compact }) => {
  const href = getUrlFromMeta(data?._meta);

  if (!data) return null;

  return (
    <Wrapper compact={compact}>
      <ImageWrapper compact={compact}>
        <ImageContainer>
          <Link href={href}>
            <a>
              {data?.image?.url ? (
                <Image src={data?.image.url} layout="fill" />
              ) : (
                <span>Placeholder voor geen afbeelding</span>
              )}
            </a>
          </Link>
        </ImageContainer>
      </ImageWrapper>
      <ContentWrapper compact={compact}>
        <HeadingLink href={href}>
          <h3>{data.title[0].text}</h3>
        </HeadingLink>
        <TagList>
          {data?.tags?.[0]?.tag &&
            data.tags.map(({ tag }, index) => <Tag key={index}>{tag?.[0].text}</Tag>)}
          {data?.category && <Tag>{data.category}</Tag>}
          {data?.category === 'Nieuws' && <time dateTime={data?.date}>{data?.date}</time>}
        </TagList>
        {data.intro?.[0] && <p>{data.intro[0].text}</p>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Story;
