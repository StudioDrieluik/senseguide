import { gql } from '@apollo/client';
import { BLOCKS } from '../fragments/BLOCKS';

export const ABOUT_US_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allOver_onss(uid: $uid, lang: $lang) {
      edges {
        node {
          title
          seo_title
          seo_description
          image
          intro
          _meta {
            type
            uid
          }
          body {
            ${BLOCKS('Over_ons')}
          }
        }
      }
    }
  }
`;
