import { gql } from '@apollo/client';

export const WHO_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allVoor_wies(lang: $lang) {
      edges {
        node {
          title
          intro
        }
      }
    }
    allAudiences(lang: $lang) {
      edges {
        node {
          title
          image
          intro
          tags {
            tag
          }
          _meta {
            uid
            type
          }
        }
      }
    }
  }
`;
