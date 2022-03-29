export const toCommaSeparatedList = items => {
  if (!items) return;
  const list = items.map(item => Object.values(item)[1]);
  return list.join(', ');
};
