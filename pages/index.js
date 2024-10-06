import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";

import { determineNavbarType } from "utils/determineNavbarType";
import getGlobalDocs from "utils/getGlobalDocs";

import Seo from "components/base/Seo";
import Layout from "components/global/Layout";

export default function Home({ preview, story, globalDocs }) {
  story = useStoryblokState(story);

  return (
    <>
      <Seo
        title={story.content.seo_title}
        description={story.content.seo_description}
        socialTitle={story.content.seo_og_title}
        socialDescription={story.content.seo_og_description}
        socialImage={story.content.seo_og_image}
      />
      <Layout navbarType={determineNavbarType(story)} {...globalDocs} preview={preview}>
        <StoryblokComponent blok={story.content} key={story.content._uid} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const storyblokApi = getStoryblokApi();

  let data = null;
  try {
    const doc = await storyblokApi.get(`cdn/stories/home`, {
      // version: preview ? "draft" : "published",
      version: "draft",
      resolve_relations: [
        "blog_post.category",
        "service_cards.cards",
        "leader_profile.recommended_services",
        "blog_cards.blog_posts",
        "location.services",
        "testimonial_carousel.testimonials",
        "testimonial_carousel_with_media.testimonials",
      ],
    });
    data = doc.data;
  } catch (error) {
    if (JSON.parse(error).status === 404) {
      return { notFound: true };
    }
  }

  const globalDocs = await getGlobalDocs(preview);

  return {
    props: {
      story: data ? data.story : false,
      globalDocs,
      preview,
    },
  };
}
