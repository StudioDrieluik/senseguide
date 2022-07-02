import { TYPE_META } from './TYPE_META';

export const BLOCKS = type =>
  `
    __typename
    ... on ${type}BodyTitle__text___cta {
      type
      primary {
        title_text_cta_title
        title_text_cta_text
        title_text_cta_text_columns
        title_text_cta_cta_title
        title_text_cta_cta_link {
          ${TYPE_META()}
        }
      }
    }
    ... on ${type}BodyQuote {
      type
      primary {
        text
        author
      }
    }
    ... on ${type}BodyEmbed {
      type
      primary {
        embed_title
        embed
      }
    }
    ... on ${type}BodyVideo {
      type
      primary {
        video_title
        video_text
        video_source
        video_id
      }
    }
    ... on ${type}BodyAccordion {
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
    ... on ${type}BodyImages {
      type
      primary {
        image_slider_sizing
        title1
      }
      fields {
        image_slider_image
        description
        ratio
      }
    }
    ... on ${type}BodyImage_slider {
      type
      primary {
        image_slider_sizing
      }
      fields {
        image_slider_image
        description: text
      }
    }
    ... on ${type}BodyStory_slider {
      type
      fields {
        story_slider_story {
          ... on Story {
            title
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
      primary {
        story_slider_title
        story_slider_link_title
        story_slider_link {
          ${TYPE_META()}
        }
      }
      fields {
        story_slider_story {
          ${TYPE_META()}
        }
      }
    }
    ... on ${type}BodyHighlighted_item {
      type
      primary{
        highlighted_item_entry {
          _linkType
          ... on _Document {
            _meta {
              type
              uid
              id
            }
          }
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
        highlighted_item_background_color
        link_title
      }
    }
    ... on ${type}BodyContact_card {
      type
      primary {
        contact_image
        contact_title
        contact_text
        background
        contact_person {
          ... on Team {
            first_name
            last_name
            email_address
            phone
            image
          }
        }
      }
    }
    ... on ${type}BodyTeam_member {
      type
      primary {
        position_image
        text
        person {
          ... on Team {
            first_name
            last_name
            email_address
            linkedin
            image
          }
        }
      }
    }
    ... on ${type}BodyImage__title__text___cta {
      type
      primary {
        image_cta_image
        image_cta_image_alignment
        image_cta_item_title
        image_cta_item_text
        image_cta_cta_title
        image_cta_cta_link {
          ${TYPE_META()}
        }
      }
    }
`;
