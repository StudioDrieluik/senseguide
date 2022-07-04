import { gql } from '@apollo/client';

export const SERVICES_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allDienstens(lang: $lang) {
      edges {
        node {
          title
          seo_title
          seo_description
          intro
          services {
            service {
              ... on Dienst {
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
