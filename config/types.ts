type Envs = 'default' | 'dev' | 'test' | 'accept' | 'production';

export type ConfigTypes = {
  meta: {
    title: string;
    social?: object;
    email?: string;
  };
  i18n: {
    locales: ('nl' | 'en' | 'de' | 'fr')[];
    defaultLocale: 'nl' | 'en' | 'de' | 'fr';
  };
  sites: {
    locale: 'nl' | 'en' | 'de' | 'fr';
    handle: string;
  }[];
  theme: {
    name: string;
  };
  pages: {
    name: string;
    options?: {
      structure?: ('highlights' | 'news' | 'cta')[];
    };
  }[];
  features: {
    name: 'search' | 'newsletter';
    options?: object;
  }[];
  environments: {
    // eslint-disable-next-line no-unused-vars
    [env in Envs]: {
      hosts?: {
        fe?: string;
        be?: string;
      };
      gtm?: string;
      facebookAppId?: string;
      seoAllowIndexing?: boolean;
    };
  };
  rewrites: {
    source: string;
    destination: string;
    locale?: boolean;
  }[];
};
