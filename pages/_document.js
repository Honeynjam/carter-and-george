import { Head, Html, Main, NextScript } from "next/document";

import { GTMNoScript } from "components/base/GoogleTagManager";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link rel="stylesheet" href="https://use.typekit.net/wyr7rga.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <GTMNoScript />
      </body>
    </Html>
  );
}
