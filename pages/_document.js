import { Head, Html, Main, NextScript } from "next/document";

import { GTMNoScript } from "components/base/GoogleTagManager";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <GTMNoScript />
      </body>
    </Html>
  );
}
