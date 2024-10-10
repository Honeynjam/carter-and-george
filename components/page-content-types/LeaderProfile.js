import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { linkResolver } from "utils/linkResolver";
import { truncate } from "utils/truncate";

import Breadcrumbs from "components/common/Breadcrumbs";
import Container from "components/common/Container";
import TextButton from "components/common/TextButton";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const LeaderProfile = ({ blok }) => (
  <div className="mt-20" {...storyblokEditable(blok)} key={blok._uid}>
    <Container>
      <div className="mb-2xl">
        <Breadcrumbs
          data={[
            { name: "About", href: "/about/" },
            { name: blok.name, current: true },
          ]}
        />
        <hr className="mb-12 mt-6 text-stroke-light" />
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="border-stroke-light lg:col-span-9 lg:border-r lg:pr-12">
            <Heading className="mb-8" size="3xl" level={1}>
              {blok.name}
            </Heading>
            <StoryblokImage
              className="aspect-[16/9] rounded object-contain object-left"
              priority
              image={blok.image}
            />
            <div className="prose mt-14 max-w-none lg:prose-lg">{render(blok.text)}</div>
          </div>
          <div className="lg:sticky lg:top-32 lg:col-span-3">
            <Heading className="mb-12" size="large">
              {blok.name}’s Recommended Services
            </Heading>
            <div className="grid grid-cols-1 gap-12">
              {blok.recommended_services &&
                blok.recommended_services?.map((item) => {
                  if (item.content) {
                    return (
                      <div key={item._uid} className="border-b border-stroke-light pb-8">
                        <Heading className="mb-2" level={3} size="medium">
                          {item.content.card_title}
                        </Heading>
                        <Subtitle>{truncate(item.content.card_subtitle, 100)}</Subtitle>
                        <TextButton className="mt-12 w-1/2 justify-start" href={linkResolver(item)}>
                          Find out more
                        </TextButton>
                      </div>
                    );
                  }

                  return null;
                })}
            </div>
          </div>
        </div>
      </div>
    </Container>
    {blok.bottom_sections?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default LeaderProfile;
