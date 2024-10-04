import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";

import { determineNavbarType } from "utils/determineNavbarType";
import getGlobalDocs from "utils/getGlobalDocs";

import Seo from "components/base/Seo";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import Layout from "components/global/Layout";
import StoryblokImage from "components/storyblok/StoryblokImage";

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
        <div className="section-spacing-m">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-20">
              <div className="md:col-span-7">
                <Heading level={1} size="3xl">
                  {story.content.title}
                </Heading>
                <Subtitle className="mt-6" size="medium">
                  {story.content.subtitle}
                </Subtitle>
              </div>
              <div className="md:col-span-5">
                <div className="flex gap-4">
                  <Phone className="mt-1" size={24} />
                  <div className="flex flex-1 flex-col">
                    <span className="font-semibold">Phone</span>
                    <span className="mt-1">{story.content.phone}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <EnvelopeSimple className="mt-1" size={24} />
                  <div className="flex flex-1 flex-col">
                    <span className="font-semibold">Email</span>
                    <span className="mt-1">{story.content.email}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-20">
              <StoryblokImage
                className="aspect-[16/9] w-full rounded"
                priority
                image={story.content.image}
              />
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const storyblokApi = getStoryblokApi();

  let data = null;
  try {
    const doc = await storyblokApi.get(`cdn/stories/contact-us`, {
      // version: preview ? "draft" : "published",
      version: "draft",
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