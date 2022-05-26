import { gql } from '@apollo/client';

export const STORIES_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allStorys(
      sortBy: date_DESC
      lang: $lang
    ) {
      edges {
        node {
          date
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
