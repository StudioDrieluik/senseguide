import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import lazySizes from 'lazysizes';

lazySizes.cfg.minSize = 40;
lazySizes.cfg.expand = 1200;
lazySizes.cfg.addClasses = true;
lazySizes.cfg.ricTimeout = 50;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" content="website" />
          <link rel="shortcut icon" href="/images/favicon/favicon.png" />
          <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
        </Head>
        <body>
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="tel" name="phone" />
              <input type="email" name="email" />
              <textarea name="question"></textarea>
          </form>
          {process.env.gtm && (
            <noscript>
              <iframe
                title="tag-manager"
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.gtm}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
