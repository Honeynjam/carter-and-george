import { getStoryblokApi } from "@storyblok/react";

const getGlobalDocs = async (preview = false) => {
  const storyblokApi = getStoryblokApi();
  let { data: globalDocs } = await storyblokApi.get(`cdn/stories/`, {
    starts_with: "global",
    version: preview ? "draft" : "published",
  });

  const navbar = globalDocs.stories.find((story) => story.slug === "navbar");
  const footer = globalDocs.stories.find((story) => story.slug === "footer");

  const globalSettings = globalDocs.stories.find((story) => story.slug === "global-settings");

  return { navbar, footer, globalSettings };
};

export default getGlobalDocs;
