import { gql } from '@apollo/client';

export const STORIES_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl", $selectedCategory: String) {
    allStoriess(lang: $lang) {
      edges {
        node {
          title
          seo_title
          seo_description
        }
      }
    }
    allStorys(sortBy: date_DESC, lang: $lang, first: 99, where: { category: $selectedCategory }) {
      edges {
        node {
          date
          title
          intro
          image
          category
          _meta {
            type
            uid
          }
        }
      }
    }
  }
`;
