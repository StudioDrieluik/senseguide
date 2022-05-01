export const getUrlFromMeta = meta => {
  if (!meta?.uid) return;

  switch (meta.type) {
    case 'story':
      return `/verhalen/${meta.uid}`;
    default:
      return `/${meta.uid}`;
  }
};
