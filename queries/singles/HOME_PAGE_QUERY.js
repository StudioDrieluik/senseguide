import { gql } from '@apollo/client';
import { TYPE_META } from '../fragments/TYPE_META';

export const HOME_PAGE_QUERY = gql`
  query ($lang: String! = "nl-nl") {
    allHomepages(lang: $lang) {
      edges {
        node {
          _meta {
            uid
            id
          }
          hero_title
          hero_text
          hero_subtitle
          hero_image
          hero_links {
            title
            hero_link {
              ${TYPE_META()}
            }
          }
          hero_button_cta_title
          hero_button_cta_link {
            ${TYPE_META()}
          }
          hero_cta_title
          hero_cta_link_url {
            ${TYPE_META()}
          }
          intro_image
          intro_title
          intro_text
          intro_links {
            title
            link {
              ${TYPE_META()}
            }
          }
          intro_cta_title
          intro_cta_link {
            ${TYPE_META()}
          }
          testimonials {
            ... on HomepageTestimonials {
              testimonial {
              	... on Testimonial {
                  position
									title
                  text
                  position
                  logo
                }
              }
            }
          }
          clients_title
          clients_logos {
            client_logo
          }
          stories_title
          stories {
            story_slider_story: story {
              ... on Story {
                title
                intro
                image
                category
                _meta {
                  type
                  id
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
