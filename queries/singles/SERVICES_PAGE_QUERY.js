import { gql } from '@apollo/client';

export const SERVICES_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allDienstens(lang: $lang) {
      edges {
        node {
          title
          intro
        }
      }
    }
    allDiensts {
      edges {
        node {
          title
          image
          intro
          _meta {
            uid
            type
          }
        }
      }
    }
  }
`;
