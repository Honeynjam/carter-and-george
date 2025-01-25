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

  const { data: locationsData } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "locations",
    is_startpage: 0,
  });

  const locations = locationsData.stories;

  const { data: articlesData } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "blog",
    resolve_relations: ["blog_post.category"],
    per_page: 3,
    is_startpage: 0,
    sort_by: "content.published_at:desc",
    excluding_slugs: "blog/categories/*",
  });

  const latestArticles = articlesData.stories;

  return { navbar, footer, globalSettings, locations, latestArticles };
};

export default getGlobalDocs;
