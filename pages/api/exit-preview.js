import { initializeApollo } from '@/lib/apollo/apolloClient';
import { gql, useQuery } from '@apollo/client';

const ExitPreview = async (req, res) => {
  res.clearPreviewData();

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: req.headers.referer ? req.headers.referer : '/' });
  res.end();
};

export default ExitPreview;
