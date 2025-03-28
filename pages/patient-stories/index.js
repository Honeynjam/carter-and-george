import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";
import cn from "classnames";

import getGlobalDocs from "utils/getGlobalDocs";

import GoogleRating from "components/base/GoogleRating";
import Seo from "components/base/Seo";
import Container from "components/common/Container";
import { Heading } from "components/common/Typography";
import Layout from "components/global/Layout";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

export default function PatientStoriesFolder({ story, globalDocs, preview, stories }) {
  story = useStoryblokState(story, { resolveRelations: ["patient_story.category"] });

  return (
    <>
      <Seo
        title={story.content.seo_title}
        description={story.content.seo_description}
        socialTitle={story.content.seo_og_title}
        socialDescription={story.content.seo_og_description}
        socialImage={story.content.seo_og_image?.filename}
      />
      <Layout navbarType="white" {...globalDocs} preview={preview}>
        <Container>
          <div className="section-spacing-m text-center">
            <GoogleRating center />
            <Heading className="my-6" size="4xl" level={1}>
              {story.content.title}
            </Heading>

            <p className="mx-auto max-w-3xl text-balance text-normal">{story.content.subtitle}</p>
          </div>
          <div
            className={cn("my-xl grid gap-8", {
              "md:grid-cols-2": story.content.stats.length === 2,
              "md:grid-cols-3": story.content.stats.length === 3,
            })}
          >
            {story.content.stats.map((stat, index) => (
              <div className="rounded bg-stone p-8 text-center" key={index}>
                <h2 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl">{stat.stat}</h2>
                <p className="text-balance font-semibold lg:text-md">{stat.name}</p>
              </div>
            ))}
          </div>
          <div className="mb-2xl mt-xl">
            <div className="columns-1 gap-10 md:columns-2">
              {stories.map((story) => {
                if (story.content.component === "patient_story") {
                  return (
                    <StoryblokLink
                      link={story}
                      className="mb-10 block break-inside-avoid border-b border-stroke-light pb-12"
                      key={story.id}
                    >
                      <div className="relative">
                        <div className="absolute right-4 top-4 z-20 rounded bg-black p-2.5">
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                        <StoryblokImage
                          className="relative mb-12 aspect-[16/9] w-full rounded bg-stone object-contain"
                          image={story.content.image}
                        />
                      </div>

                      <div>
                        <span className="font-petite-caps text-eyebrow font-medium text-blue">
                          Patient Story
                        </span>
                        <h2 className="mb-2 mt-6 text-2xl font-semibold">{story.content.title}</h2>
                        <p>{story.content.subtitle}</p>
                        <div className="mt-8 flex items-center gap-2 text-button font-medium">
                          <span>Read the story</span> <CaretRight />
                        </div>
                      </div>
                    </StoryblokLink>
                  );
                }
                if (story.content.component === "quote_media") {
                  return (
                    <div
                      className="mb-10 block break-inside-avoid border-b border-stroke-light pb-12"
                      key={story.id}
                    >
                      <div className="relative">
                        <StoryblokImage
                          className="relative mb-12 aspect-[16/9] rounded object-cover"
                          image={story.content.image}
                        />
                      </div>

                      <div>
                        <p className="my-8">{story.content.quote}</p>
                        <div className="text-small">
                          <p className="font-semibold">{story.content.person}</p>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (story.content.component === "quote") {
                  return (
                    <div
                      className="mb-10 break-inside-avoid border-b border-stroke-light pb-12"
                      key={story.id}
                    >
                      <svg
                        width="116"
                        height="19"
                        viewBox="0 0 116 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_532_36342)">
                          <path
                            d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z"
                            fill="#00A9E0"
                          />
                          <path
                            d="M33.0709 0.612343C33.4146 -0.204115 34.5854 -0.204114 34.9291 0.612346L36.9579 5.43123C37.1029 5.77543 37.4306 6.01061 37.8067 6.0404L43.0727 6.45748C43.9649 6.52814 44.3267 7.62813 43.6469 8.2034L39.6348 11.5987C39.3482 11.8412 39.223 12.2218 39.3106 12.5843L40.5363 17.661C40.744 18.5211 39.7969 19.201 39.033 18.7401L34.5245 16.0196C34.2025 15.8252 33.7975 15.8252 33.4755 16.0196L28.967 18.7401C28.2031 19.201 27.256 18.5211 27.4636 17.661L28.6894 12.5843C28.777 12.2218 28.6518 11.8412 28.3653 11.5987L24.3531 8.2034C23.6733 7.62813 24.0351 6.52814 24.9273 6.45748L30.1934 6.0404C30.5695 6.01061 30.8972 5.77543 31.0421 5.43123L33.0709 0.612343Z"
                            fill="#00A9E0"
                          />
                          <path
                            d="M57.0709 0.612343C57.4146 -0.204115 58.5854 -0.204114 58.9291 0.612346L60.9579 5.43123C61.1029 5.77543 61.4306 6.01061 61.8067 6.0404L67.0727 6.45748C67.9649 6.52814 68.3267 7.62813 67.6469 8.2034L63.6348 11.5987C63.3482 11.8412 63.223 12.2218 63.3106 12.5843L64.5363 17.661C64.744 18.5211 63.7969 19.201 63.033 18.7401L58.5245 16.0196C58.2025 15.8252 57.7975 15.8252 57.4755 16.0196L52.967 18.7401C52.2031 19.201 51.256 18.5211 51.4636 17.661L52.6894 12.5843C52.777 12.2218 52.6518 11.8412 52.3653 11.5987L48.3531 8.2034C47.6733 7.62813 48.0351 6.52814 48.9273 6.45748L54.1934 6.0404C54.5695 6.01061 54.8972 5.77543 55.0421 5.43123L57.0709 0.612343Z"
                            fill="#00A9E0"
                          />
                          <path
                            d="M81.0709 0.612343C81.4146 -0.204115 82.5854 -0.204114 82.9291 0.612346L84.9579 5.43123C85.1029 5.77543 85.4306 6.01061 85.8067 6.0404L91.0727 6.45748C91.9649 6.52814 92.3267 7.62813 91.6469 8.2034L87.6348 11.5987C87.3482 11.8412 87.223 12.2218 87.3106 12.5843L88.5363 17.661C88.744 18.5211 87.7969 19.201 87.033 18.7401L82.5245 16.0196C82.2025 15.8252 81.7975 15.8252 81.4755 16.0196L76.967 18.7401C76.2031 19.201 75.256 18.5211 75.4636 17.661L76.6894 12.5843C76.777 12.2218 76.6518 11.8412 76.3653 11.5987L72.3531 8.2034C71.6733 7.62813 72.0351 6.52814 72.9273 6.45748L78.1934 6.0404C78.5695 6.01061 78.8972 5.77543 79.0421 5.43123L81.0709 0.612343Z"
                            fill="#00A9E0"
                          />
                          <path
                            d="M105.071 0.612343C105.415 -0.204115 106.585 -0.204114 106.929 0.612346L108.958 5.43123C109.103 5.77543 109.431 6.01061 109.807 6.0404L115.073 6.45748C115.965 6.52814 116.327 7.62813 115.647 8.2034L111.635 11.5987C111.348 11.8412 111.223 12.2218 111.311 12.5843L112.536 17.661C112.744 18.5211 111.797 19.201 111.033 18.7401L106.525 16.0196C106.202 15.8252 105.797 15.8252 105.475 16.0196L100.967 18.7401C100.203 19.201 99.256 18.5211 99.4636 17.661L100.689 12.5843C100.777 12.2218 100.652 11.8412 100.365 11.5987L96.3531 8.2034C95.6733 7.62813 96.0351 6.52814 96.9273 6.45748L102.193 6.0404C102.569 6.01061 102.897 5.77543 103.042 5.43123L105.071 0.612343Z"
                            fill="#00A9E0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_532_36342">
                            <rect width="116" height="18.8889" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p className="my-8">{story.content.quote}</p>
                      <div className="text-small">
                        <p className="font-semibold">{story.content.person_name}</p>
                        <p>{story.content.person_position}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </Container>
        {story.content.bottom_sections?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const storyblokApi = getStoryblokApi();

  let data = null;
  let doc = await storyblokApi.get(`cdn/stories/patient-stories/`, {
    version: preview ? "draft" : "published",
  });

  data = doc.data;
  try {
  } catch (e) {
    return { notFound: true };
  }

  const { data: patientStoriesData } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "patient-stories",
    resolve_relations: ["patient_story.category"],
    is_startpage: 0,
    excluding_slugs: "patient-stories/quotes-media/*,patient-stories/quotes/*",
  });

  const { data: quotesData } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "patient-stories/quotes/",
    is_startpage: 0,
  });

  const { data: quoteMedia } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "patient-stories/quotes-media",
    is_startpage: 0,
  });

  let stories = [...patientStoriesData.stories, ...quotesData.stories, ...quoteMedia.stories];
  stories = stories.sort((a, b) => new Date(b.first_published_at) - new Date(a.first_published_at));

  const globalDocs = await getGlobalDocs(preview);

  return {
    props: {
      story: data ? data.story : false,
      globalDocs,
      stories,
      key: data ? data.story.id : false,
      preview,
    },
  };
}
