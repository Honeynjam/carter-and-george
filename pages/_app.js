import "styles/globals.scss";

import { GTMScript } from "components/base/GoogleTagManager";
import StoryblokWrapper from "components/storyblok/StoryblokWrapper";

export default function App({ Component, pageProps }) {
  return (
    <StoryblokWrapper>
      <Component {...pageProps} />
      <GTMScript />
    </StoryblokWrapper>
  );
}
