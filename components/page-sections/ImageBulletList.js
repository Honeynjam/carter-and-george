import React from "react";

import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ImageBulletList = ({ blok }) => {
  return (
    <section
      className={cn("py-side-padding md:py-xl lg:py-2xl", {
        "bg-black": blok.background === "dark",
        "bg-stone": blok.background === "light",
      })}
      {...storyblokEditable(blok)}
    >
      <Container>
        <div className="grid items-center gap-medium lg:grid-cols-12 lg:gap-xl">
          <div
            className={cn("lg:col-span-7 lg:py-xl", {
              "order-1 lg:order-2": blok.image_position === "left",
              "order-1 lg:order-1": blok.image_position === "right",
            })}
          >
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
            <div
              className={cn({
                "grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2": blok.bullet_columns === "two",
              })}
            >
              {blok.bullet_list.map((item) => {
                if (item.text) {
                  return (
                    <div
                      {...storyblokEditable(item)}
                      key={item._uid}
                      className={cn("flex items-center gap-4 md:text-md", {
                        "text-white": blok.background === "dark",
                        "text-black": blok.background === "light",
                        "py-4 md:py-6 lg:py-8": blok.bullet_columns === "one",
                        "border-t border-stroke-dark":
                          blok.background === "dark" && blok.bullet_columns === "one",
                        "border-t border-stroke-light":
                          blok.background === "light" && blok.bullet_columns === "one",
                      })}
                    >
                      <div
                        className={cn({
                          "": blok.background === "dark",
                          "rounded-full bg-[#E9F0F2] p-1.5": blok.background === "light",
                        })}
                      >
                        <Check className="h-6 w-6 text-blue" weight="bold" />
                      </div>
                      <span className="flex-1">{item.text}</span>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
          <div
            className={cn("h-full w-full lg:col-span-5 lg:max-h-[800px]", {
              "order-2 lg:order-1": blok.image_position === "left",
              "order-2 lg:order-2": blok.image_position === "right",
            })}
          >
            <StoryblokImage className="h-full w-full rounded object-cover" image={blok.image} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageBulletList;
