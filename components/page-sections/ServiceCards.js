import React from "react";

import { CaretRight } from "@phosphor-icons/react";
import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";
import { Eyebrow, Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const ServiceCards = ({ blok }) => {
  console.log(blok.cards);
  return (
    <section {...storyblokEditable(blok)} className="py-side-padding md:py-xl lg:py-2xl">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Eyebrow className="mb-6" text={blok.eyebrow} />
          <Heading size="3xl" level={2}>
            {blok.title}
          </Heading>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {blok.cards.map((service) => {
            return (
              <StoryblokLink
                link={service}
                className="relative h-[500px] overflow-hidden rounded lg:h-[624px]"
              >
                <StoryblokImage
                  fill
                  className="absolute inset-0 z-10 object-cover"
                  image={service.content.card_image}
                />
                <div className="absolute inset-0 z-20 bg-black/30" />
                <div className="absolute bottom-8 left-8 right-8 z-30 p-4 text-white backdrop-blur-[75px]">
                  <Heading level={3} className="mb-6" size="xl">
                    {service.content.card_title}
                  </Heading>

                  <p className="flex items-center gap-2 text-button font-medium uppercase">
                    <span>Learn More</span>
                    <CaretRight className="h-4 w-4" />
                  </p>
                </div>
                <StoryblokImage />
              </StoryblokLink>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceCards;
