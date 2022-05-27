import NextLink from 'next/link'
import React from 'react'
import { Link } from './ArrowLink.styles'

export default function ArrowLink({href, children, large, ...props}) {
  return (
    <Link className='arrow-link' large={large}>
      <NextLink href={href}>
        <a {...props}>
          <span>{children}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"/><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1Z" fill="currentColor" fillRule="nonzero"/></g></svg>
        </a>
      </NextLink>
    </Link>
  )
}
