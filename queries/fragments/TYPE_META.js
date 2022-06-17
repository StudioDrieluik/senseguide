const types = [
  '_Document',
  'Workshop',
  'Diensten',
  'Dienst',
  'Audience',
  'Contact',
  'Voor_wie',
  'Info_page',
  'Story',
  'Testimonial',
  'Team',
  'Homepage',
  'Workshops',
  'Over_ons',
];

export const TYPE_META = () =>
  `
  _linkType
  ... on _ExternalLink {
    url
    target
  }
  ... on _FileLink {
    url
  }
  ${types.map(
    type =>
      `... on ${type} {
      _meta {
        type
        uid
        id
      }
    }`
  )}
`;
