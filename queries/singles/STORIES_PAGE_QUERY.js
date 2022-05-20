import { gql } from '@apollo/client';

export const STORIES_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allStorys(lang: $lang) {
      edges {
        node {
          title
          intro
          image
          category
          _meta {
            uid
          }
        }
      }
    }
  }
`;
