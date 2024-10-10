import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { arrayNotEmpty } from "utils/arrayNotEmpty";
import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const FullWidthImage = ({ blok }) => {
  return (
    <section className="section-spacing-p relative overflow-hidden" {...storyblokEditable(blok)}>
      <StoryblokImage fill className="absolute inset-0 z-10 object-cover" image={blok.image} />
      <div className="absolute inset-0 z-20 bg-black/20" />
      <Container className="relative z-30">
        {blok.variation === "left" ? (
          <div className="relative z-30 max-w-2xl p-8 backdrop-blur-[75px] lg:p-12">
            <Eyebrow color="white" text={blok.eyebrow} />
            <Heading color="white" size="3xl" level={2}>
              {blok.title}
            </Heading>
            <Subtitle size="medium" color="white" className="mt-4">
              {blok.subtitle}
            </Subtitle>
            {arrayNotEmpty(blok.buttons) ? (
              <div className="mt-10">
                {blok.buttons.map((button) => {
                  return (
                    <Button key={button._uid} color="white" href={linkResolver(button.link)}>
                      {button.text}
                    </Button>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
        {blok.variation === "center" ? (
          <>
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
          </>
        ) : null}
      </Container>
    </section>
  );
};

export default FullWidthImage;
