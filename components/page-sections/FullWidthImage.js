import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const FullWidthImage = ({ blok }) => {
  return (
    <section className="relative overflow-hidden py-2xl lg:py-3xl" {...storyblokEditable(blok)}>
      <StoryblokImage fill className="absolute inset-0 z-10 object-cover" image={blok.image} />
      <div className="absolute inset-0 z-20 bg-black/20" />
      <Container className="relative z-30">
        <Heading
          level={2}
          size="4xl"
          color="white"
          className="mx-auto mb-12 max-w-4xl text-pretty text-center"
        >
          {blok.title}
        </Heading>
        <div className="flex justify-center">
          {blok.buttons.map((button) => {
            return (
              <Button color="white" href={linkResolver(button.link)}>
                {button.text}
              </Button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FullWidthImage;
