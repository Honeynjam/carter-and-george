import { APIProvider } from "@vis.gl/react-google-maps";
import { LazyMotion, domAnimation } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import "styles/globals.scss";

import { GlobalContextWrapper } from "contexts/globalContext";

import { GTMScript } from "components/base/GoogleTagManager";
import StoryblokWrapper from "components/storyblok/StoryblokWrapper";

export default function App({ Component, pageProps }) {
  return (
    <APIProvider apiKey={"AIzaSyCQm4y_CgaoI1XKXJxTpVY3B1EEEC7G4UY"}>
      <LazyMotion features={domAnimation}>
        <GlobalContextWrapper
          value={{
            global: pageProps.globalDocs?.globalSettings?.content,
            locations: pageProps.globalDocs?.locations,
          }}
        >
          <StoryblokWrapper>
            <Component {...pageProps} />
            <GTMScript />
          </StoryblokWrapper>
        </GlobalContextWrapper>
      </LazyMotion>
    </APIProvider>
  );
}
