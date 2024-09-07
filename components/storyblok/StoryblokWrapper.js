import { apiPlugin, storyblokInit } from "@storyblok/react";

import FaqPage from "../page-content-types/FaqPage";
import Page from "../page-content-types/Page";

const components = {
  // custom types (don't lazy load)
  page: Page,
  faq_page: FaqPage,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

const StoryblokWrapper = ({ children }) => {
  return <>{children}</>;
};

export default StoryblokWrapper;
