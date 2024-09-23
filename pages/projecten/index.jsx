import React from 'react';
import { htmlSerializer } from '@/utils/htmlSerializer';
import { Layout } from '@/layouts/default';
import { PageHead } from '@/components/PageHead';
import { Container } from '../../components/Container/Container.styles';
import DotPattern from '@/components/DotPattern';

import { useQuery } from '@/hooks/useQuery';
import { cmsDataService } from '@/services/cmsDataService';
import { twMerge } from 'tailwind-merge';
import CardCustomer from '../../components/cards/CardCustomer';
import { CLIENTS_PAGE_QUERY } from '../../queries/singles/CLIENTS_PAGE_QUERY';
import { RichText } from 'prismic-reactjs';
import { SubmitButton } from '../../components/ContactForm/ContactForm.styles';
import { getUrlFromMeta } from '../../utils/utils';
import Link from 'next/link';

const KlantenPage = ({ uid }) => {
  const { loading, error, data } = useQuery(CLIENTS_PAGE_QUERY);

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  const content = data?.allKlantens?.edges?.[0].node;
  console.log(content);

  const grid1Items = content.grid_1;
  const grid2Items = content.grid_2;

  return (
    <Layout>
      <PageHead
        meta={{ seoTitle: content.title[0].text, seoDescription: content.subtitle[0].text }}
      />

      <DotPattern
        className={twMerge(
          'fixed inset-0 [mask-image:radial-gradient(65vh_circle_at_center,white,transparent)] opacity-40'
        )}
      />

      <Container>
        <div className="mt-[12rem] md:mt-[12rem] relative">
          <div className="text-center py-[2.4rem] md:py-[10rem]">
            <h1 className="text-[4.5rem] md:text-[8rem] font-bold text-black">
              {content.title[0].text}
            </h1>
            <p className="leading-tight text-black text-[2.4rem] md:text-[3.2rem]">
              {content.subtitle[0].text}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 mt-20">
            {grid1Items.map(item => {
              if (!item.text[0].text) return;

              return (
                <CardCustomer
                  key={item?.title?.[0]?.text}
                  logo={item?.logo?.url}
                  text={item?.text?.[0]?.text}
                  subtitle={item?.subtitle?.[0]?.text}
                  link={getUrlFromMeta(item?.link?._meta)}
                />
              );
            })}
          </div>
          {content.cta_title?.[0].text && (
            <div className="max-w-[990px] mx-auto my-16 md:my-48">
              <div className="bg-[--color-blue-light] text-[--color-dark] rounded-[--border-radius] p-[2.4rem] md:py-[4.8rem] md:px-[6.4rem]">
                <h2 className="text-[24px] md:text-[32px] mb-[1.6rem]">
                  {content.cta_title?.[0].text}
                </h2>
                {content.cta_text && (
                  <RichText render={content.cta_text} htmlSerializer={htmlSerializer} />
                )}
                {content.cta_button_url?.[0]?.text && (
                  <div className="mt-[4rem]">
                    <Link href={content.cta_button_url?.[0]?.text}>
                      <a>
                        <SubmitButton as="span" className="!rounded-[4px] ">
                          {content.cta_button_title?.[0]?.text}
                        </SubmitButton>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 mb-12 mt-20">
            {grid2Items.map(item => {
              if (!item.text[0].text) return;

              return (
                <CardCustomer
                  key={item?.title?.[0]?.text}
                  logo={item?.logo?.url}
                  text={item?.text?.[0]?.text}
                  title={item?.title?.[0]?.text}
                  subtitle={item?.subtitle?.[0]?.text}
                  link={getUrlFromMeta(item?.link?._meta)}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: CLIENTS_PAGE_QUERY,
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}
export default KlantenPage;
