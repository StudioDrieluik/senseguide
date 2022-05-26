export const getUrlFromMeta = meta => {
  if (!meta?.uid) return;

  switch (meta.type) {
    case 'story':
      return `/verhalen/${meta.uid}`;
    case 'audience':
      return `/voor-wie/${meta.uid}`;
    case 'info_page':
      return `/info/${meta.uid}`;
    case 'workshop':
      return `/workshops/${meta.uid}`;
    default:
      return `/${meta.uid}`;
  }
};
