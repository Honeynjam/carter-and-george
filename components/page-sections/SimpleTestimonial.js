import React from "react";

import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const SimpleTestimonial = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className={cn("section-spacing-p bg-black")}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div
            className={cn("h-full w-full lg:col-span-6 lg:max-h-[800px]", {
              "order-2 lg:order-1": blok.image_position === "left",
              "order-2 lg:order-2": blok.image_position === "right",
            })}
          >
            <StoryblokImage className="h-full rounded object-cover" image={blok.image} />
          </div>
          <div
            className={cn("lg:col-span-6", {
              "order-1 lg:order-2": blok.image_position === "left",
              "order-1 lg:order-1": blok.image_position === "right",
            })}
          >
            <Eyebrow text={blok.eyebrow} />
            <Heading color={"white"} className="mb-4 mt-6 max-w-xl" size="3xl" level={2}>
              {blok.title}
            </Heading>
            <Subtitle
              className="max-w-xl"
              alternate={blok.background === "dark"}
              color="white"
              size="large"
            >
              {blok.quote}
            </Subtitle>
            <div className="mt-8 text-white">
              <p className="font-semibold text-white">{blok.name}</p>
              <p className="text-white">{blok.position}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SimpleTestimonial;
