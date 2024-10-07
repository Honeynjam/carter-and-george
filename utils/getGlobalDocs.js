import { getStoryblokApi } from "@storyblok/react";

const getGlobalDocs = async (preview = false) => {
  const storyblokApi = getStoryblokApi();
  let { data: globalDocs } = await storyblokApi.get(`cdn/stories/`, {
    starts_with: "global",
    // version: preview ? "draft" : "published",
    version: "draft",
  });

  const navbar = globalDocs.stories.find((story) => story.slug === "navbar");
  const footer = globalDocs.stories.find((story) => story.slug === "footer");

  const globalSettings = globalDocs.stories.find((story) => story.slug === "global-settings");

  const { data: locationsData } = await storyblokApi.get("cdn/stories/", {
    // version: preview ? "draft" : "published",
    version: "draft",
    starts_with: "locations",
    is_startpage: 0,
  });

  const locations = locationsData.stories.map((location) => location.content.clinic_name);

  return { navbar, footer, globalSettings, locations };
};

export default getGlobalDocs;
