import React from "react";

import { Check } from "@phosphor-icons/react";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ImageBulletList = ({ blok }) => {
  return (
    <section
      className={cn("py-xl lg:py-2xl", {
        "bg-black": blok.background === "dark",
        "bg-stone": blok.background === "light",
      })}
      {...storyblokEditable(blok)}
    >
      <Container>
        <div className="grid gap-medium md:grid-cols-5 md:gap-xl">
          <div className="md:col-span-3 md:py-xl">
            <div className="mb-12 max-w-xl">
              <Eyebrow text={blok.eyebrow} />
              <Heading
                color={blok.background === "dark" ? "white" : "black"}
                level={2}
                className="mb-4"
                size="3xl"
              >
                {blok.title}
              </Heading>
              <Subtitle alternate={blok.background === "dark"} color="grey" size="medium">
                {blok.subtitle}
              </Subtitle>
            </div>
            <div>
              {blok.bullet_list.map((item) => {
                if (item.text) {
                  return (
                    <div
                      className={cn("flex items-center gap-4 border-t py-4 text-md", {
                        "border-stroke-dark text-white": blok.background === "dark",
                        "border-stroke-light text-black": blok.background === "light",
                      })}
                    >
                      <Check className="h-5 w-5 text-blue" />
                      <span>{item.text}</span>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
          <div className="w-full md:col-span-2">
            <StoryblokImage className="h-full w-full rounded object-cover" image={blok.image} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageBulletList;
