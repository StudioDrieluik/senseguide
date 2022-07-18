const ROUTES = require('../../../config/senseguide/routes');

const translations = {
  agency: 'Client name',
  menu: [
    {
      title: 'Services',
      href: `/services`,
    },
    {
      title: 'For who',
      href: `/for-who`,
    },
    {
      title: 'Stories',
      href: `/stories`,
    },
    {
      title: 'Projects',
      href: `/stories?type=project`,
    },
    {
      title: 'Workshops',
      href: `/workshops`,
    },
    {
      title: 'About us',
      href: `/about-us`,
    },
    {
      title: 'Contact',
      href: `/contact`,
    },
  ],
  close: 'Close',
  home: {
    logoGrid: 'Our projects',
    storySlider: 'Senseguide stories',
  },
  categories: {
    projects: 'Projects',
    views: 'Insights',
    news: 'News',
  },
  stories: {
    filterTitle: 'Filter',
    all: 'All',
  },
  workshop: {
    c2a: 'View workshop',
    time: 'Duration',
    persons: 'Number of persons',
    location: 'Location',
    price: 'Price',
    signUp: 'Aanmelden',
  },
  contactForm: {
    title: 'Contactform',
    intro: 'Fill in the form below and we will contact you as soon as possible. Or give us a call',
    name: 'Name',
    phone: 'Phone number',
    email: 'E-mail address',
    question: 'Question',
    button: 'Send',
    success: 'The form has been sent successfully',
    error: 'Sorry, something went wrong. Try again later.',
  },
  teamMemberBlock: {
    button: 'Send an email',
  },
  stickyCta: 'Contact us',
  readmore: 'Read more',
  terms: 'Terms and Conditions',
};

module.exports = translations;
