import Script from "next/script";

import { APIProvider } from "@vis.gl/react-google-maps";
import { LazyMotion, domAnimation } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import "styles/globals.scss";

import { GlobalContextWrapper } from "contexts/globalContext";

import { GTMScript } from "components/base/GoogleTagManager";
import StoryblokWrapper from "components/storyblok/StoryblokWrapper";

const GOOGLE_MAPS_API_KEY = "AIzaSyBELN_3if61U7k0iO6IzMe7aDVb6kXQmJI";

// TEST KEY
// const GOOGLE_MAPS_API_KEY = "AIzaSyCQm4y_CgaoI1XKXJxTpVY3B1EEEC7G4UY";

export default function App({ Component, pageProps }) {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Script
        id="iubenda"
        dangerouslySetInnerHTML={{
          __html: `var _iub = _iub || [];
_iub.csConfiguration = {"siteId":3798932,"cookiePolicyId":25536912,"lang":"en-GB","storage":{"useSiteId":true}};`,
        }}
      />

      <Script type="text/javascript" src="//cs.iubenda.com/sync/3798932.js" />
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js" />
      <Script
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        charset="UTF-8"
        async
      />

      <LazyMotion features={domAnimation}>
        <GlobalContextWrapper
          value={{
            global: pageProps.globalDocs?.globalSettings?.content,
            locations: pageProps.globalDocs?.locations,
            latestArticles: pageProps.globalDocs?.latestArticles,
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
