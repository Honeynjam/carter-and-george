import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import cn from "classnames";

import getGlobalDocs from "utils/getGlobalDocs";
import { linkResolver } from "utils/linkResolver";

import Seo from "components/base/Seo";
import BlogCard from "components/blog/BlogCard";
import BlogGrid from "components/blog/BlogGrid";
import Newsletter from "components/blog/Newsletter";
import Container from "components/common/Container";
import { Heading } from "components/common/Typography";
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
          eyebrowColor="white"
          eyebrow="Blog"
          title={story.content.title}
          subtitle={story.content.subtitle}
          image={story.content.image}
        />
        <Container>
          <div className="my-20">
            <h2 className="mb-4 text-lg font-semibold">Featured articles</h2>
            <hr className="mb-10 text-stroke-light" />
            <div className="grid items-start gap-6 lg:grid-cols-2">
              <div className="lg:sticky lg:top-6">
                <BlogCard size="large" data={story.content.featured_articles[0]} />
              </div>
              <div className="grid grid-cols-1 gap-8 lg:border-l lg:border-stroke-light lg:pl-6">
                {story.content.featured_articles.slice(1, 4).map((article, idx) => {
                  return (
                    <BlogCard
                      layout="horizontal"
                      className={cn("", {
                        "border-b border-stroke-light pb-6":
                          idx < story.content.featured_articles.slice(1, 4).length - 1,
                      })}
                      key={article.uuid}
                      data={article}
                    />
                  );
                })}
              </div>
            </div>
          </div>
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
              const categoryArticles = articles
                .filter((article) => article.content?.category?.uuid === category.uuid)
                .slice(0, 3);
              return (
                <BlogGrid
                  className="section-spacing-m"
                  key={category.id}
                  data={categoryArticles}
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
    // version: preview ? "draft" : "published",
    version: "draft",
    resolve_relations: ["blog_hub.featured_articles", "blog_post.category"],
  });
  data = doc.data;
  try {
  } catch (e) {
    return { notFound: true };
  }

  const { data: articlesData } = await storyblokApi.get("cdn/stories/", {
    // version: preview ? "draft" : "published",
    version: "draft",
    starts_with: "blog",
    resolve_relations: ["blog_post.category"],
    is_startpage: 0,
    sort_by: "content.published_at:desc",
    excluding_slugs: "blog/categories/*",
  });

  const { data: categoriesData } = await storyblokApi.get("cdn/stories/", {
    // version: preview ? "draft" : "published",
    version: "draft",
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
