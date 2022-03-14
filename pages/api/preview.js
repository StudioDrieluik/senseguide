import { gql } from '@apollo/client';
import { initializeApollo } from '@/lib/apollo/apolloClient';

const Preview = async (req, res) => {
  const apolloClient = initializeApollo();

  const GET_ENTRY_QUERY = gql`
    query entry($uid: [String], $siteId: [QueryArgument]) {
      entry(uid: $uid, siteId: $siteId, status: ["live", "pending", "disabled", "expired"]) {
        url
      }
      draft: entry(uid: $uid, siteId: $siteId, status: ["live", "pending", "disabled", "expired"], drafts: true) {
        url
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: GET_ENTRY_QUERY,
    variables: {
      uid: req.query.entryUid,
      siteId: req.query.siteId,
    },
  });

  let parsedUrl;
  if (data?.entry?.url) {
    parsedUrl = new URL(data.entry.url);
  } else if (data?.draft?.url) {
    parsedUrl = new URL(data.draft.url);
  } else {
    return res.status(404).json({
      message: `URL of the entry "${req.query.entryUid}" could not be fetched`,
    });
  }

  if (req.query['x-craft-live-preview'] || req.query.entryUid) {
    res.setPreviewData(
      {
        previewToken: req.query.token ?? null,
      },
      {
        maxAge: 60 * 15, // 15
      }
    );
  }

  res.writeHead(307, { Location: parsedUrl.pathname });
  res.end();
};

export default Preview;
