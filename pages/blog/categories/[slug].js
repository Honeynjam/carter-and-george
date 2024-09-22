import Link from "next/link";

import { getStoryblokApi, useStoryblokState } from "@storyblok/react";

import getGlobalDocs from "utils/getGlobalDocs";
import { linkResolver } from "utils/linkResolver";

import Seo from "components/base/Seo";
import BlogGrid from "components/blog/BlogGrid";
import Newsletter from "components/blog/Newsletter";
import Breadcrumbs from "components/common/Breadcrumbs";
import Container from "components/common/Container";
import Layout from "components/global/Layout";

export default function BlogFolder({ story, articles, categories, globalDocs, preview }) {
  story = useStoryblokState(story);
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
          <div className="my-20">
            <Breadcrumbs
              data={[
                { name: "Blog", href: "/blog" },
                { name: story.content.name, current: true },
              ]}
            />
            <h1 className="mt-4 text-4xl font-semibold">{story.content.name}</h1>
          </div>
          <div className="mt-20 flex items-center gap-4 border-b border-stroke-light pb-4">
            <Link href="/blog" className="text-small text-opacity-50">
              View all
            </Link>
            {categories.map((category) => (
              <Link
                href={linkResolver(category)}
                key={category.id}
                className="text-small text-opacity-50"
              >
                {category.content.name}
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
    // version: preview ? "draft" : "published",
    version: "draft",
    starts_with: "blog",
    resolve_relations: ["blog_post.categories"],
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
