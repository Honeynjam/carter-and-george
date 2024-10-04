import { LazyMotion, domAnimation } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import "styles/globals.scss";

import { GlobalContextWrapper } from "contexts/globalContext";

import { GTMScript } from "components/base/GoogleTagManager";
import StoryblokWrapper from "components/storyblok/StoryblokWrapper";

export default function App({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <GlobalContextWrapper value={pageProps.globalDocs?.globalSettings?.content}>
        <StoryblokWrapper>
          <Component {...pageProps} />
          <GTMScript />
        </StoryblokWrapper>
      </GlobalContextWrapper>
    </LazyMotion>
  );
}
