import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";

import getGlobalDocs from "utils/getGlobalDocs";

import Seo from "components/base/Seo";
import Layout from "components/global/Layout";

export default function Page({ story, globalDocs, articles, preview }) {
  story = useStoryblokState(story);

  if (story.content) {
    return (
      <>
        <Seo
          title={story.content.seo_title}
          description={story.content.seo_description}
          socialTitle={story.content.seo_og_title}
          socialDescription={story.content.seo_og_description}
          socialImage={story.content.seo_og_image}
          noindex={story.content.seo_index !== "true"}
        />
        <Layout navbarType="white" {...globalDocs} preview={preview}>
          <StoryblokComponent articles={articles} blok={story.content} />
        </Layout>
      </>
    );
  }
}

export async function getStaticProps({ params, preview = null }) {
  let slug = params.slug;

  let sbParams = {
    // version: preview ? "draft" : "published",
    version: "draft",
    resolve_relations: ["blog_post.category"],
    resolve_links: "url",
  };

  const storyblokApi = getStoryblokApi();

  let data = null;
  try {
    let doc = await storyblokApi.get(`cdn/stories/blog/${slug}`, sbParams);
    data = doc.data;
  } catch (e) {
    if (e?.status === 404) {
      return { notFound: true };
    }
  }

  const { data: articles } = await storyblokApi.get("cdn/stories/", {
    // version: preview ? "draft" : "published",
    version: "draft",
    starts_with: "blog",
    resolve_relations: ["blog_post.category"],
    excluding_slugs: `blog/categories/*,${data.story.full_slug}`,
    is_startpage: 0,
    per_page: 3,
    sort_by: "content.published_at:desc",
    filter_query: {
      category: {
        in: `${data.story.content.category.uuid}`,
      },
    },
  });

  const globalDocs = await getGlobalDocs(preview);

  return {
    props: {
      story: data ? data.story : false,
      globalDocs,
      articles: articles.stories.length > 0 ? articles.stories : false,
      key: data ? data.story.id : false,
      preview,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  let { data: articlesData } = await storyblokApi.get(`cdn/stories/`, {
    // version: "published",
    version: "draft",
    starts_with: "blog",
    is_startpage: 0,
    per_page: 100,
  });

  const articles = articlesData?.stories;

  const paths = [];
  articles?.map((item) => paths.push({ params: { slug: item.slug } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
