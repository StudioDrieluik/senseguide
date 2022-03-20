import { gql } from '@apollo/client';

export const HOME_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allHomepages(lang: $lang) {
      edges {
        node {
          hero_title
          hero_image
          hero_links {
            title
            hero_link {
              _linkType
              ... on _ExternalLink {
                url
              }
              ... on _Document {
                _meta {
                  uid
                  id
                }
              }
            }
          }
          hero_cta_title
          hero_cta_link {
            _linkType
            ... on _ExternalLink {
              url
            }
            ... on _Document {
              _meta {
                uid
                id
              }
            }
          }
          intro_image
          intro_title
          intro_cta_title
          intro_cta_link {
            _linkType
            ... on _ExternalLink {
              url
            }
            ... on _Document {
              _meta {
                uid
                id
              }
            }
          }
          testimonials {
            ... on HomepageTestimonials {
              testimonial {
                _linkType
              }
            }
          }
          clients_title
          clients_logos {
            client_logo
          }
          stories_title
          stories {
            story {
              ... on Story {
                title
                image
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
`;
