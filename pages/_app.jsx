import React from 'react';
import { AnimatePresence } from 'framer-motion';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';
import theme from '@/styles/theme';
import { useApollo } from '@/lib/apollo/apolloClient';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import StickyCta from '../components/StickyCta/StickyCta';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      {process.env.gtm && (
        <Script
          id="gtmScript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                          })(window,document,'script','dataLayer', '${process.env.gtm}')
                        `,
          }}
        />
      )}
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <AnimatePresence initial={false}>
              <Component {...pageProps} />
            </AnimatePresence>
            <StickyCta />
            <style jsx>
              {`
                @font-face {
                  font-family: 'Google Sans';
                  src: url('/fonts/GoogleSans-Regular.woff') format('woff'),
                    url('/fonts/GoogleSans-Regular.woff2') format('woff2');
                  font-weight: 400;
                  font-style: normal;
                  font-display: fallback;
                }
                @font-face {
                  font-family: 'Google Sans';
                  src: url('/fonts/GoogleSans-Medium.woff') format('woff'),
                    url('/fonts/GoogleSans-Medium.woff2') format('woff2');
                  font-weight: 500;
                  font-style: normal;
                  font-display: fallback;
                }
                @font-face {
                  font-family: 'Google Sans';
                  src: url('/fonts/GoogleSans-Bold.woff') format('woff'),
                    url('/fonts/GoogleSans-Bold.woff2') format('woff2');
                  font-weight: 700;
                  font-style: normal;
                  font-display: fallback;
                }
              `}
            </style>
          </RecoilRoot>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
