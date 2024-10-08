import React from "react";

import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import GoogleRating from "components/base/GoogleRating";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ContentSection = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className={cn("", {
        "section-spacing-p bg-black": blok.background === "dark",
        "section-spacing-m bg-white": blok.background === "light",
      })}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div
            className={cn("h-full w-full lg:col-span-5 lg:max-h-[800px]", {
              "order-2 lg:order-1": blok.image_position === "left",
              "order-2 lg:order-2": blok.image_position === "right",
            })}
          >
            <StoryblokImage className="h-full rounded object-cover" image={blok.image} />
          </div>
          <div
            className={cn("lg:col-span-7", {
              "order-1 lg:order-2": blok.image_position === "left",
              "order-1 lg:order-1": blok.image_position === "right",
            })}
          >
            <GoogleRating color={blok.background === "dark" ? "white" : "black"} />
            <Heading
              color={blok.background === "dark" ? "white" : "black"}
              className="mb-4 mt-6"
              size="3xl"
              level={2}
            >
              {blok.title}
            </Heading>
            <Subtitle alternate={blok.background === "dark"} color="grey" size="medium">
              {blok.subtitle}
            </Subtitle>
            <div className="mt-12 grid grid-cols-1 lg:gap-8">
              {blok.items.map((item) => {
                return (
                  <div
                    key={item._uid}
                    className="grid grid-cols-2 gap-4 border-t border-stroke-light py-4"
                  >
                    <Heading
                      color={blok.background === "dark" ? "white" : "black"}
                      size="large"
                      level={3}
                    >
                      {item.title}
                    </Heading>
                    <Subtitle alternate={blok.background === "dark"} color="grey">
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
