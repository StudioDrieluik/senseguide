import { useRouter } from 'next/router';
import ROUTES from '../config/senseguide/routes';

export const getUrlFromMeta = meta => {
  if (!meta?.uid) return;
  const { locale } = useRouter();

  switch (meta.type) {
    case 'story':
      return `/${ROUTES.STORIES[locale]}/${meta.uid}`;
    case 'audience':
      return `/${ROUTES.AUDIENCES[locale]}/${meta.uid}`;
    case 'dienst':
      return `/diensten/${meta.uid}`;
    case 'info_page':
      return `/info/${meta.uid}`;
    case 'workshop':
      return `/workshops/${meta.uid}`;
    default:
      return `/${meta.uid}`;
  }
};
