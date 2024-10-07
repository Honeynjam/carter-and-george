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
        <div className="grid gap-medium lg:grid-cols-12 lg:gap-xl">
          <div className="lg:col-span-7 lg:py-xl">
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
                      {...storyblokEditable(item)}
                      key={item._uid}
                      className={cn("flex items-center gap-4 border-t py-6 text-md lg:py-8", {
                        "border-stroke-dark text-white": blok.background === "dark",
                        "border-stroke-light text-black": blok.background === "light",
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
          <div className="w-full lg:col-span-5">
            <StoryblokImage className="h-full w-full rounded object-cover" image={blok.image} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageBulletList;
