import Link from "next/link";
import { useRouter } from "next/router";

import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import cn from "classnames";

import getGlobalDocs from "utils/getGlobalDocs";
import { linkResolver } from "utils/linkResolver";

import Seo from "components/base/Seo";
import BlogCard from "components/blog/BlogCard";
import BlogGrid from "components/blog/BlogGrid";
import Newsletter from "components/blog/Newsletter";
import Container from "components/common/Container";
import Layout from "components/global/Layout";
import Hero from "components/modules/Hero";

export default function BlogFolder({ story, articles, categories, globalDocs, preview }) {
  story = useStoryblokState(story);
  const router = useRouter();

  return (
    <>
      <Seo
        title={story.content.seo_title}
        description={story.content.seo_description}
        socialTitle={story.content.seo_og_title}
        socialDescription={story.content.seo_og_description}
        socialImage={story.content.seo_og_image}
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
            {/* Category selector */}
            <div className="my-8 md:hidden">
              <label
                htmlFor="categories"
                className="text-gray-900 font-petite-caps block text-small font-medium leading-6"
              >
                Category
              </label>
              <select
                id="categories"
                name="categories"
                onChange={(e) => router.push({ pathname: e.target.value })}
                className="rounded-md text-gray-900 ring-gray-300 focus:ring-indigo-600 sm:text-sm mt-2 block w-full rounded border-0 py-2 pl-3 pr-10 ring-1 ring-inset ring-stroke-light focus:ring-2 sm:leading-6"
              >
                <option value="/blog/">All categories</option>
                {categories.map((category) => (
                  <option
                    value={linkResolver(category)}
                    key={category.uuid}
                    selected={category.uuid === story.uuid}
                  >
                    {category.content.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10 mt-6 hidden items-center gap-4 border-b border-stroke-light pb-4 md:flex">
              <Link href="/blog/" className="relative text-small">
                <span>All</span>
                <span className="absolute bottom-[-17px] left-0 h-px w-full bg-black"></span>
              </Link>
              {categories.map((category) => (
                <Link
                  href={linkResolver(category)}
                  key={category.id}
                  className={cn("relative text-small", {
                    "opacity-50 duration-100 hover:opacity-100": category.uuid !== story.uuid,
                  })}
                >
                  <span>{category.content.name}</span>
                  {category.uuid === story.uuid ? (
                    <span className="absolute bottom-[-17px] left-0 h-px w-full bg-black"></span>
                  ) : null}
                </Link>
              ))}
            </div>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              <div className="lg:sticky lg:top-32">
                <BlogCard size="large" data={story.content.featured_articles[0]} />
              </div>
              <div className="grid grid-cols-1 gap-8 max-lg:mt-12 lg:border-l lg:border-stroke-light lg:pl-6">
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
          <div className="my-12 lg:my-20">
            <h2 className="mb-4 text-lg font-semibold">{story.content.latest_articles_title}</h2>
            <hr className="text-stroke-light" />
            <BlogGrid className="mt-10" data={articles.slice(0, 3)} />
          </div>
          <div className="section-spacing-m">
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
    version: preview ? "draft" : "published",
    resolve_relations: ["blog_hub.featured_articles", "blog_post.category"],
    excluding_fields: "body",
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
    excluding_fields: "body",
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
