import { apiPlugin, storyblokInit } from "@storyblok/react";

import BlogPost from "../page-content-types/BlogPost";
import FaqPage from "../page-content-types/FaqPage";
import Page from "../page-content-types/Page";
import PatientStory from "../page-content-types/PatientStory";

import RichText from "components/content-sections/RichText";
import CtaSection from "components/page-sections/CtaSection";

const components = {
  // custom types (don't lazy load)
  page: Page,
  faq_page: FaqPage,
  patient_story: PatientStory,
  blog_post: BlogPost,
  // content components
  rich_text: RichText,
  // Page section component
  cta_section: CtaSection,
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
