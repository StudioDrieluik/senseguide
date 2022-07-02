import { useQuery as useApolloQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { cmsDataService } from '../services/cmsDataService';

export const useQuery = (query, ...rest) => {
  const router = useRouter();
  const lang = cmsDataService.getSiteId(router.locale);

  const data = useApolloQuery(query, {
    ...rest?.[0],
    variables: {
      ...rest?.[0]?.variables,
      lang,
    },
  });

  return { ...data };
};
