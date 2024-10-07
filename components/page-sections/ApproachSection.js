import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ApproachSection = ({ blok }) => {
  return (
    <section className="py-2xl" {...storyblokEditable(blok)}>
      <Container>
        <div className="mb-xl flex items-end justify-between gap-20">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6" text={blok.eyebrow} />
            <Heading className="mb-2" level={2} size="3xl">
              {blok.title}
            </Heading>

            <Subtitle>{blok.subtitle}</Subtitle>
          </div>
          <div>
            {blok.buttons.map((button) => {
              return (
                <Button key={button._uid} outline href={linkResolver(button.link)}>
                  {button.text}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="group/test flex flex-col gap-6 md:mt-3xl md:flex-row">
          {blok.items.map((item) => {
            return (
              <div
                className="group/item duration-500 ease-in-out md:w-1/6 md:hover:mt-[max(-92px,-6.05vw)] md:hover:w-1/4 md:hover:!opacity-100 md:group-hover/test:opacity-50"
                key={item.title}
              >
                <StoryblokImage
                  className="mb-9 aspect-square rounded object-cover"
                  image={item.image}
                />
                <hr className="mb-5 mt-4 text-stroke-light" />
                <Heading className="mb-2" level={3} size="medium">
                  {item.title}
                </Heading>

                <Subtitle
                  className="opacity-0 duration-150 ease-in group-hover/item:opacity-100 group-hover/item:delay-[400ms]"
                  size="small"
                >
                  {item.subtitle}
                </Subtitle>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ApproachSection;
