const StoryblokClient = require("storyblok-js-client");
const redirects = require("./config/redirects");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = async () => {
  // Put your plugins and its options here
  // Inspired by https://github.com/hashicorp/next-mdx-enhanced/issues/18#issuecomment-859167393
  const plugins = [withBundleAnalyzer];

  // Storyblok redirects
  // ----
  let Storyblok = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    cache: {
      clear: "auto",
      type: "memory",
    },
  });

  const { data } = await Storyblok.get("cdn/stories/global/redirects", {
    version: "published",
  });

  const storyblokRedirects = data.story.content.entries.map((item) => {
    return {
      source: item.source_url,
      destination: item.destination_url,
      permanent: true,
    };
  });
  // ----

  return plugins.reduce((acc, next) => next(acc), {
    trailingSlash: true,

    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      // deviceSizes: [375, 768, 1024, 1280, 1440, 1680, 2500, 3840],
      domains: ["a.storyblok.com", "s3.amazonaws.com"],
    },
    async redirects() {
      return [...redirects, ...storyblokRedirects];
    },
  });
};
