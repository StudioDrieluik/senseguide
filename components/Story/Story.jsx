import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  ContentWrapper,
  ImageContainer,
  ImageWrapper,
  Tag,
  TagList,
  Wrapper,
} from './Story.styles';

const Story = ({ data, compact }) => {
  let preHref;
  if (data.__typename === 'Story') {
    preHref = '/verhalen/';
  } else if (data.__typename === 'Audience') {
    preHref = '/voor-wie/';
  }

  return (
    <Wrapper compact={compact}>
      <ImageWrapper compact={compact}>
        <ImageContainer>
          <Link href={`${preHref}${data._meta.uid}`} passHref>
            {data?.image?.url ? (
              <Image src={data?.image.url} layout="fill" />
            ) : (
              <span>Placeholder voor geen afbeelding</span>
            )}
          </Link>
        </ImageContainer>
      </ImageWrapper>
      <ContentWrapper compact={compact}>
        <Link href={`${preHref}${data._meta.uid}`} passHref>
          <a>
            <h3>
              <span>{data.title[0].text}</span>
            </h3>
          </a>
        </Link>
          <TagList>
            {data?.tags?.[0]?.tag && data.tags.map(({ tag }, index) => (
              <Tag key={index}>{tag?.[0].text}</Tag>
            ))}
            {data?.category && (
              <Tag>{data.category}</Tag>
              )}
            {data?.category === 'Nieuws' && <time datetime={data?.date}>{data?.date}</time>}
          </TagList>
        {data.intro?.[0] && <p>{data.intro[0].text}</p>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Story;
