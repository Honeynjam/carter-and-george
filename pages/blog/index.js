import { getStoryblokApi, useStoryblokState } from "@storyblok/react";

import getGlobalDocs from "utils/getGlobalDocs";
import { linkResolver } from "utils/linkResolver";

import Seo from "components/base/Seo";
import BlogGrid from "components/blog/BlogGrid";
import Newsletter from "components/blog/Newsletter";
import Container from "components/common/Container";
import Layout from "components/global/Layout";
import Hero from "components/modules/Hero";

export default function BlogFolder({ story, articles, categories, globalDocs, preview }) {
  story = useStoryblokState(story);

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
      <Layout {...globalDocs} preview={preview}>
        <Hero
          eyebrow="Blog"
          title={story.content.title}
          subtitle={story.content.subtitle}
          image={story.content.image.filename}
        />
        <Container>
          <div className="my-20">{/* Featured articles */}</div>
          <div className="my-20">
            <h2 className="mb-4 text-lg font-semibold">Latest articles</h2>
            <hr className="text-stroke-light" />
            <BlogGrid className="mt-10" data={articles.slice(0, 3)} />
          </div>
          <div className="my-2xl">
            <Newsletter />
          </div>
          <div className="">
            {categories.map((category) => {
              return (
                <BlogGrid
                  className="my-2xl"
                  key={category.id}
                  data={articles.slice(0, 3)}
                  headerData={{
                    title: category.content.name,
                    subtitle: category.content.subtitle,
                    href: linkResolver(category),
                  }}
                />
              );
            })}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const storyblokApi = getStoryblokApi();

  let data = null;
  let doc = await storyblokApi.get(`cdn/stories/blog/`, {
    version: preview ? "draft" : "published",
  });
  data = doc.data;
  try {
  } catch (e) {
    return { notFound: true };
  }

  const { data: articlesData } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "blog",
    resolve_relations: ["blog_post.category"],
    is_startpage: 0,
    sort_by: "content.published_at:desc",
    excluding_slugs: "blog/categories/*",
  });

  const { data: categoriesData } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "blog/categories",
    resolve_relations: [],
    is_startpage: 0,
  });

  const globalDocs = await getGlobalDocs(preview);

  return {
    props: {
      story: data ? data.story : false,
      globalDocs,
      articles: articlesData.stories,
      categories: categoriesData.stories,
      key: data ? data.story.id : false,
      preview,
    },
  };
}
