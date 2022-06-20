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
    allDiensts(lang: $lang, first: 99) {
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
