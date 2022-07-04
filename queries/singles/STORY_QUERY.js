import { gql } from '@apollo/client';
import { BLOCKS } from '../fragments/BLOCKS';

export const STORY_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allStorys(uid: $uid, lang: $lang) {
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
            ${BLOCKS('Story')}
          }
        }
      }
    }
  }
`;
