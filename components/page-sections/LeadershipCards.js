import React from "react";

import Link from "next/link";

import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { storyblokEditable } from "@storyblok/react";

import Button from "components/common/Button";
import Container from "components/common/Container";
import TextButton from "components/common/TextButton";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const LeadershipCards = ({ blok }) => {
  console.log(blok);
  return (
    <section {...storyblokEditable(blok)} className="section-spacing-m">
      <Container>
        <Eyebrow text={blok.eyebrow} />
        <Heading className="mb-2" size="3xl" level={2}>
          {blok.title}
        </Heading>
        <Subtitle alternate>{blok.subtitle}</Subtitle>
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:gap-16">
          {blok.leadership.map((profile) => {
            return (
              <StoryblokLink
                link={profile}
                className="grid overflow-hidden rounded bg-stone duration-100 hover:-translate-y-0.5 hover:shadow-2xl lg:grid-cols-2"
              >
                <div className="h-full w-full overflow-hidden">
                  <StoryblokImage
                    className="h-full max-h-[600px] w-full object-cover object-top md:max-h-[400px] lg:max-h-min"
                    image={profile.content.image}
                  />
                </div>
                <div className="p-6">
                  <p className="text-md font-semibold">{profile.content.name}</p>
                  <p>{profile.content.position}</p>
                  <p className="mb-6 mt-8 text-gray-secondary md:mt-12 lg:mt-20">
                    {profile.content.short_summary}
                  </p>
                  <TextButton>Read more</TextButton>
                </div>
              </StoryblokLink>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default LeadershipCards;
