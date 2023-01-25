// import dayjs from 'dayjs';
// import config from '~/config';

export const trackingDataService = {
  pushDataLayer({ dataLayer = null }) {
    if (!process.env.gtm) return;

    window.dataLayer = window.dataLayer || [];
    if (dataLayer) {
      window.dataLayer.push(dataLayer);
    }
  },
};
