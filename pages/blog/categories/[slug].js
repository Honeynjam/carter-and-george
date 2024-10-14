import Link from "next/link";
import { useRouter } from "next/router";

import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import cn from "classnames";

import getGlobalDocs from "utils/getGlobalDocs";
import { linkResolver } from "utils/linkResolver";

import Seo from "components/base/Seo";
import BlogGrid from "components/blog/BlogGrid";
import Newsletter from "components/blog/Newsletter";
import Breadcrumbs from "components/common/Breadcrumbs";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import Layout from "components/global/Layout";

export default function BlogFolder({ story, articles, categories, globalDocs, preview }) {
  story = useStoryblokState(story);
  const router = useRouter();
  const featuredArticles = articles.slice(0, 6);
  const otherArticles = articles.slice(6);

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
        <Container>
          <div className="mt-12 lg:my-20">
            <Breadcrumbs
              highlightCurrent
              data={[
                { name: "Blog", href: "/blog" },
                { name: story.content.name, current: true },
              ]}
            />
            <Heading level={1} size="4xl" className="mt-4">
              {story.content.name}
            </Heading>
            <Subtitle className="mt-2 max-w-xl" size="medium" color="grey">
              {story.content.subtitle}
            </Subtitle>
          </div>
          <div className="mt-8 md:hidden">
            <label
              htmlFor="categories"
              className="text-sm text-gray-900 font-petite-caps block font-medium leading-6"
            >
              Category
            </label>
            <select
              id="categories"
              name="categories"
              onChange={(e) => router.push({ pathname: e.target.value })}
              className="rounded-md text-gray-900 ring-gray-300 focus:ring-indigo-600 sm:text-sm mt-2 block w-full rounded border-0 py-2 pl-3 pr-10 ring-1 ring-inset ring-stroke-light focus:ring-2 sm:leading-6"
            >
              <option value="/blog">All categories</option>
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
          <div className="mt-20 hidden items-center gap-4 border-b border-stroke-light pb-4 md:flex">
            <Link href="/blog" className="text-small opacity-50 duration-100 hover:opacity-100">
              All categories
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
          <div className="my-12">
            <BlogGrid data={featuredArticles} />
          </div>
          <Newsletter className="my-20" />
          <div className="my-20">
            <BlogGrid data={otherArticles} />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null, params }) {
  let slug = params.slug;

  const storyblokApi = getStoryblokApi();

  let categoryData = null;
  try {
    let doc = await storyblokApi.get(`cdn/stories/blog/categories/${slug}`, {
      version: preview ? "draft" : "published",
      resolve_relations: [],
    });
    categoryData = doc.data;
  } catch (e) {
    if (JSON.parse(e).status === 404) {
      return { notFound: true };
    }
  }

  const { data: articlesData } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "blog",
    resolve_relations: ["blog_post.category"],
    is_startpage: 0,
    sort_by: "content.published_at:desc",
    excluding_slugs: "blog/category/*",
    filter_query: {
      category: {
        in: `${categoryData.story.uuid}`,
      },
    },
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
      story: categoryData ? categoryData.story : false,
      globalDocs,
      articles: articlesData.stories,
      categories: categoriesData.stories,
      key: categoryData ? categoryData.story.id : false,
      preview,
    },
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/", {
    version: "published",
    starts_with: "blog/categories",
    is_startpage: 0,
  });

  const categories = data.stories;
  const paths = [];
  categories.map((item) => paths.push({ params: { slug: item.slug } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
