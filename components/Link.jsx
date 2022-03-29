import NextLink from 'next/link';

export const Link = ({ children, ...rest }) => (
  <NextLink prefetch={false} {...rest}>
    {children}
  </NextLink>
);
