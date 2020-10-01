import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/noto-sans-v9-latin-regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;