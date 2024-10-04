import React from "react";

import { storyblokEditable } from "@storyblok/react";

import GoogleRating from "components/base/GoogleRating";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ContentSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="my-side-padding md:my-xl lg:my-2xl">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <StoryblokImage className="h-full rounded object-cover" image={blok.image} />
          </div>
          <div className="lg:col-span-7">
            <GoogleRating />
            <Heading className="mb-4 mt-6" size="3xl" level={2}>
              {blok.title}
            </Heading>
            <Subtitle size="medium">{blok.subtitle}</Subtitle>
            <div className="mt-12 grid grid-cols-1 gap-12">
              {blok.items.map((item) => {
                return (
                  <div
                    key={item._uid}
                    className="grid grid-cols-2 gap-4 border-t border-stroke-light py-4"
                  >
                    <Heading size="large" level={3}>
                      {item.title}
                    </Heading>
                    <Subtitle className="" color="grey">
                      {item.subtitle}
                    </Subtitle>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentSection;
