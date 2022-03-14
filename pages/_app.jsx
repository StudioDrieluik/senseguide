import React from 'react';
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
            <Component {...pageProps} />
            <style jsx>
              {`
                @font-face {
                  font-family: 'TestFont';
                  src: url('/fonts/TestFont.woff') format('woff'),
                    url('/fonts/TestFont.woff2') format('woff2');
                  font-weight: normal;
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
  if (appContext.ctx.req) {
    const url = process.env.hosts.fe + appContext.ctx.req.url;
    const segments = url.split('/');
    if (appContext?.ctx?.res?.statusCode === 404 && segments && segments[1] !== '_next') {
      const res = await fetch(`${process.env.hosts.be}/api/v1/redirects/find`, {
        method: 'POST',
        body: JSON.stringify({
          url,
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        appContext.ctx.res.writeHead(data.type, {
          Location: data.url,
        });
        appContext.ctx.res.end();
      }
    }
  }

  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
