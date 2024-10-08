import React from "react";

import dynamic from "next/dynamic";

import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const VideoSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="section-spacing-p bg-stone">
      <Container>
        <div className="mb-12">
          <Eyebrow className="mb-6" text={blok.eyebrow} />
          <Heading level={2} size="3xl">
            {blok.title}
          </Heading>
        </div>
        <div
          className={cn("grid gap-6 md:grid-cols-3", {
            "lg:grid-cols-4": blok.items.length === 4,
            "lg:grid-cols-5": blok.items.length === 5,
          })}
        >
          {blok.items.map((item) => {
            return (
              <div key={item._uid}>
                <Eyebrow text={item.eyebrow} />

                <Heading className="mb-2" level={3} size="medium">
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
            <StoryblokImage
              className="aspect-[16/9] w-full rounded object-cover"
              image={blok.image}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
