import Link from 'next/link'
import React from 'react'
import { ContentWrapper, Wrapper } from './Workshop.styles'

const Workshop = ({ data }) => (
  <Wrapper>
    <ContentWrapper>
      <h3>{data.title[0].text}</h3>
      <ul>
        {data.short_time?.[0] && <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"/><g strokeLinecap="round" strokeLinejoin="round" transform="translate(3.75 2.25)" stroke="#80868B" strokeWidth="2.228"><rect y="1.5" width="16.5" height="16.5" rx=".743"/><path d="M12.753 0v3M3.753 0v3M0 6.003h16.5"/></g></g></svg>
          <span>{data.short_time[0].text}</span>
        </li>}
        {data.persons?.[0] && <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"/><path d="M8.25 5.25a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75ZM14.57 5.432h-.001a4.875 4.875 0 1 1 1.322 9.567" stroke="#80868B" strokeWidth="2.228" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.5 18.505h0a8.25 8.25 0 0 1 13.498-.002M15.893 15h-.001a8.237 8.237 0 0 1 6.75 3.505" stroke="#80868B" strokeWidth="2.228" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
          <span>{data.persons[0].text}</span>
        </li>}
        {data.location?.[0] && <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"/><path d="M11.5 2.425 3.936 3.938l-1.513 7.56h0c-.05.245.028.5.205.676l9.792 9.793-.001-.001a.75.75 0 0 0 1.06 0v-.001l8.485-8.486h0a.751.751 0 0 0 0-1.062h-.001L12.17 2.622h-.001a.748.748 0 0 0-.678-.206l.007.008Z" stroke="#80868B" strokeWidth="2.228" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.874 6.375a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" fill="#80868B" fillRule="nonzero"/></g></svg>
          <span>{data.location[0].text}</span>
        </li>}
      </ul>
      {data.intro?.[0] && <p>{data.intro[0].text}</p>}
    </ContentWrapper>
    {/* @TODO: Create global button */}
    <Link href="/">Bekijk workshop</Link>
  </Wrapper>
);

export default Workshop;
