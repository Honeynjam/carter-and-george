import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";

import getGlobalDocs from "utils/getGlobalDocs";

import Layout from "components/global/Layout";

export default function Home({ preview, story, globalDocs }) {
  story = useStoryblokState(story);

  return (
    <Layout {...globalDocs} preview={preview}>
      <div className="my-20 text-center text-5xl">
        <h1>Carter and George 2.0</h1>

        <StoryblokComponent blok={story.content} key={story.content._uid} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = null }) {
  const sbParams = {
    version: preview ? "draft" : "published",
  };

  const storyblokApi = getStoryblokApi();

  let data = null;
  try {
    const doc = await storyblokApi.get(`cdn/stories/home`, sbParams);
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
