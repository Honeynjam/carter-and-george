import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";

import { skipPageCreationWithinCatchAllPage } from "config/storyblok";

import getGlobalDocs from "utils/getGlobalDocs";

import Seo from "components/base/Seo";
import Layout from "components/global/Layout";

export default function Page({ story, globalDocs, preview }) {
  story = useStoryblokState(story);

  if (story.content) {
    return (
      <>
        <Seo
          title={story.content.seo?.title}
          description={story.content.seo?.description}
          socialTitle={story.content.seo?.og_title}
          socialDescription={story.content.seo?.og_description}
          socialImage={story.content.seo?.og_image}
          noindex={story.content.seo_index !== "true"}
        />
        <Layout {...globalDocs} preview={preview}>
          <StoryblokComponent blok={story.content} />
        </Layout>
      </>
    );
  }
}

export async function getStaticProps({ params, preview = null }) {
  let slug = params.slug ? params.slug.join("/") : null;

  // special rule for home page
  // I can't define it as a root folder within Storyblok for some reason - it's erroring out
  if (slug === "home" && !preview) {
    return { notFound: true };
  }

  let sbParams = {
    // version: preview ? "draft" : "published",
    version: "draft",
    resolve_relations: [],
    resolve_links: "url",
  };

  const storyblokApi = getStoryblokApi();

  let data = null;
  try {
    let doc = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    data = doc.data;
  } catch (e) {
    if (e?.status === 404) {
      return { notFound: true };
    }
  }

  const globalDocs = await getGlobalDocs(preview);

  return {
    props: {
      story: data ? data.story : false,
      globalDocs,
      key: data ? data.story.id : false,
      preview,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  let sbParams = {
    version: "published",
  };

  let { data } = await storyblokApi.get(`cdn/links`, sbParams);

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    const slug = data.links[linkKey].slug;

    if (data.links[linkKey].is_folder || slug === "home") {
      return;
    }

    if (skipPageCreationWithinCatchAllPage.some((v) => slug.includes(v))) {
      return;
    }

    let splittedSlug = slug.split("/");
    paths.push({ params: { slug: splittedSlug } });
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}
