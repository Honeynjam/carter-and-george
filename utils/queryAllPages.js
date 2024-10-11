import { getStoryblokApi } from "@storyblok/react";

export const queryAllPages = async (page = 1, routes = []) => {
  const per_page = 100;
  const storyblokApi = getStoryblokApi();
  let sbParams = {
    version: "published",
    per_page: per_page,
    page: page,
  };

  let { data, headers } = await storyblokApi.get(`cdn/stories`, sbParams);
  const allRoutes = routes.concat(data.stories);

  const total = headers.total;
  const totalPages = Math.ceil(total / per_page);

  if (totalPages > page) {
    return queryAllPages(page + 1, allRoutes);
  } else {
    return allRoutes;
  }
};
