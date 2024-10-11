import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { truncate } from "utils/truncate";

import Button from "components/common/Button";
import Container from "components/common/Container";
import TextButton from "components/common/TextButton";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const LeadershipCards = ({ blok }) => {
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
            if (profile?.content) {
              return (
                <StoryblokLink
                  key={profile.content._uid}
                  link={profile}
                  className="grid overflow-hidden rounded bg-stone duration-100 hover:-translate-y-0.5 hover:shadow-2xl lg:grid-cols-2"
                >
                  <div className="h-full w-full overflow-hidden">
                    <StoryblokImage
                      className="h-full max-h-[600px] w-full object-cover object-top md:max-h-[400px] lg:max-h-min"
                      image={profile.content.image}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between p-6">
                    <div>
                      <p className="text-md font-semibold">{profile.content.name}</p>
                      <p>{profile.content.position}</p>
                      <p className="mb-6 mt-6 text-gray-secondary">
                        {truncate(profile.content.short_summary, 250)}
                      </p>
                    </div>
                    <TextButton>Read more</TextButton>
                  </div>
                </StoryblokLink>
              );
            }

            return null;
          })}
        </div>
      </Container>
    </section>
  );
};

export default LeadershipCards;
