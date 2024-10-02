import React from "react";

import dynamic from "next/dynamic";

import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const VideoSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="bg-stone py-2xl">
      <Container>
        <div className="mb-12">
          <Eyebrow className="mb-6" text={blok.eyebrow} />
          <Heading level={2} size="3xl">
            {blok.title}
          </Heading>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {blok.items.map((item) => {
            return (
              <div key={item._uid}>
                <span className="mb-6 block text-eyebrow uppercase text-gray-tertiary">
                  {item.eyebrow}
                </span>
                <Heading className="mb-2" level={3} size="large">
                  {item.title}
                </Heading>

                <Subtitle color="grey">{item.subtitle}</Subtitle>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          {blok.video_url ? (
            <div className="iframe-wrapper">
              <ReactPlayer controls={true} url={blok.video_url} />
            </div>
          ) : (
            <StoryblokImage className="aspect-[16/9] rounded object-cover" image={blok.image} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
