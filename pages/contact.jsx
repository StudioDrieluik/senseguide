import React from 'react';
import { useQuery } from '@/hooks/useQuery';
import { CONTACT_QUERY } from '@/queries/singles/CONTACT_QUERY';
import { cmsDataService } from '@/services/cmsDataService';
import { ContactTemplate } from '@/templates/contact/ContactTemplate';

const ContactPage = ({ uid }) => {
  const { loading, error, data } = useQuery(CONTACT_QUERY, {
    variables: { uid },
  });

  if (error) return <p>Error...</p>;
  if (!data && loading) return <p>Loading</p>;

  return <ContactTemplate data={data?.allContacts?.edges?.[0]?.node}></ContactTemplate>
};

export async function getStaticProps(ctx) {
  // build queries
  const queries = [
    {
      query: CONTACT_QUERY,
      variables: {
        uid: 'contact',
      },
    },
  ];

  // wait for page data
  const pageProps = await cmsDataService.getPageProps({ ctx, queries });

  return {
    ...pageProps,
    revalidate: 1,
  };
}

export default ContactPage;
