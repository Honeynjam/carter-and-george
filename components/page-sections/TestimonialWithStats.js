import React from "react";

import { storyblokEditable } from "@storyblok/react";
import ReactPlayer from "react-player";

import Container from "components/common/Container";
import { Eyebrow, Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const TestimonialWithStats = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="section-spacing-m relative">
      <Container>
        <div className="text-center">
          <Eyebrow text={blok.eyebrow} />
          <Heading level={2} size="3xl">
            {blok.title}
          </Heading>
        </div>
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-12">
          <div className="grid overflow-hidden rounded md:grid-cols-2 lg:col-span-7">
            <div>
              {blok.video_url ? (
                <ReactPlayer
                  className="aspect-video"
                  width="100%"
                  height="100%"
                  controls={true}
                  url={blok.video_url}
                />
              ) : (
                <StoryblokImage className="h-full w-full object-cover" image={blok.image} />
              )}
            </div>
            <div className="flex flex-col justify-between gap-12 bg-stone p-8">
              <p className="text-md">{blok.quote}</p>
              <p className="text-gray-secondary">{blok.person}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row lg:col-span-5 lg:flex-col lg:gap-8">
            {blok.stats.map((item) => {
              return (
                <div className="rounded bg-stone p-8">
                  <span className="mb-6 block text-4xl font-medium">{item.stat}</span>
                  <p className="mb-2 text-lg font-normal">{item.name}</p>
                  <p className="text-gray-secondary">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialWithStats;
