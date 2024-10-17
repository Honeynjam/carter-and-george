import { StoryblokComponent, getStoryblokApi, useStoryblokState } from "@storyblok/react";

import getGlobalDocs from "utils/getGlobalDocs";

import Seo from "components/base/Seo";
import Container from "components/common/Container";
import Layout from "components/global/Layout";

export default function Page({ story, globalDocs, content, preview }) {
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
        />
        <Layout navbarType="white" {...globalDocs} preview={preview}>
          <Container>
            <div
              className="section-spacing-m prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </Container>
        </Layout>
      </>
    );
  }
}

export async function getStaticProps({ params, preview = null }) {
  let slug = params.slug;

  let sbParams = {
    version: preview ? "draft" : "published",
  };

  const storyblokApi = getStoryblokApi();

  let data = null;
  try {
    let doc = await storyblokApi.get(`cdn/stories/legal/${slug}`, sbParams);
    data = doc.data;
  } catch (e) {
    if (e?.status === 404) {
      return { notFound: true };
    }
  }

  let response = await fetch(
    `https://www.iubenda.com/api/privacy-policy/${data.story.content.iubenda_id}/no-markup`
  );
  response = await response.json();

  const content = response?.content || null;

  const globalDocs = await getGlobalDocs(preview);

  return {
    props: {
      story: data ? data.story : false,
      globalDocs,
      content,
      key: data ? data.story.id : false,
      preview,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get(`cdn/stories/`, {
    version: "published",
    starts_with: "legal",
    is_startpage: 0,
    per_page: 100,
  });

  const docs = data?.stories;

  const paths = [];
  docs?.map((item) => paths.push({ params: { slug: item.slug } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
