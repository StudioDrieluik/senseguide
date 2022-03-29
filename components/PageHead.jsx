import Head from 'next/head';

export const PageHead = ({ meta }) => {
  const {
    title,
    seoTitle,
    seoDescription,
    seoRobots,
    defaultMetaDescription,
    ogImage,
    url,
    defaultTitleSuffix,
  } = meta;
  const metaTitle = seoTitle || title + (defaultTitleSuffix ? ` | ${defaultTitleSuffix}` : '');
  const metaDescription = seoDescription || defaultMetaDescription;
  let seoRobotsContent = 'index, follow';

  if (seoRobots) seoRobotsContent = 'noindex, follow';

  if (!process.env.seoAllowIndexing) seoRobotsContent = 'noindex, nofollow';

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={seoRobotsContent} />
    </Head>
  );
};
