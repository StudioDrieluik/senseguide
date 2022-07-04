import { gql } from '@apollo/client';
import { BLOCKS } from '../fragments/BLOCKS';

export const INFO_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allInfo_pages(uid: $uid, lang: $lang) {
      edges {
        node {
          title
          seo_title
          seo_description
          image
          intro
          _meta {
            uid
          }
          body {
            ${BLOCKS('Info_page')}
          }
        }
      }
    }
  }
`;
