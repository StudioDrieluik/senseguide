import React from 'react'
import { Crumbs } from './Breadcrumbs.styles'

export const Breadcrumbs = ({parent, title}) => (
    <Crumbs>
      <a href="#">{parent}</a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10"><path d="m1 1 4 4-4 4" stroke="#80868B" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span href="#">{title[0].text}</span>
    </Crumbs>
  )
