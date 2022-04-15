import { gql } from '@apollo/client';

export const AUDIENCE_QUERY = gql`
  query ($uid: String!, $lang: String! = "nl-nl") {
    allAudiences(uid: $uid, lang: $lang) {
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
          }
          body {
            ... on AudienceBodyTitle__text___cta {
              type
              primary {
                title_text_cta_title
                title_text_cta_text
                title_text_cta_text_columns
                title_text_cta_cta_title
                title_text_cta_cta_link {
                  _linkType
                  ... on _ExternalLink {
                    url
                    target
                  }
                  ... on _Document {
                    _meta {
                      uid
                      id
                    }
                  }
                }
              }
            }
            ... on AudienceBodyQuote {
              type
              primary {
                text
                author
              }
            }
            ... on AudienceBodyVideo {
              type
              primary {
                video_title
                video_text
                video_source
                video_id
              }
            }
            ... on AudienceBodyAccordion {
              type
              primary {
                accordion_title
                accordion_text
              }
              fields {
                accordion_item_title
                accordion_item_text
              }
            }
            ... on AudienceBodyImages {
              type
              primary {
                image_slider_sizing
              }
              fields {
                image_slider_image
                description
              }
            }
            __typename
          }
        }
      }
    }
  }
`;
