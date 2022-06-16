import NextLink from 'next/link'
import React from 'react'
import { Link } from './HeadingLink.styles'

export default function HeadingLink({href, children, ...props}) {
  return (
    <Link className='link'>
      <NextLink href={href}>
        <a {...props}>
          {children}
        </a>
      </NextLink>
    </Link>
  )
}
