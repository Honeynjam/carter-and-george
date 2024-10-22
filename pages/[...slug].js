import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";

import { skipPageCreationWithinCatchAllPage } from "config/storyblok";

import { determineNavbarType } from "utils/determineNavbarType";
import getGlobalDocs from "utils/getGlobalDocs";

import Seo from "components/base/Seo";
import Layout from "components/global/Layout";

export default function Page({ story, globalDocs, preview }) {
  story = useStoryblokState(story);

  if (story.content) {
    return (
      <>
        <Seo
          title={story.content.seo_title}
          description={story.content.seo_description}
          socialTitle={story.content.seo_og_title}
          socialDescription={story.content.seo_og_description}
          socialImage={story.content.seo_og_image?.filename}
        />
        <Layout navbarType={determineNavbarType(story)} {...globalDocs} preview={preview}>
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

  if (skipPageCreationWithinCatchAllPage.some((v) => slug.includes(v))) {
    return { notFound: true };
  }

  let sbParams = {
    version: preview ? "draft" : "published",
    resolve_relations: [
      "blog_post.category",
      "service_cards.cards",
      "leader_profile.recommended_services",
      "blog_cards.blog_posts",
      "location.services",
      "testimonial_carousel.testimonials",
      "testimonial_carousel_with_media.testimonials",
      "leadership_cards.leadership",
      "job_listing.open_positions",
    ],
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
    per_page: 1000,
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
