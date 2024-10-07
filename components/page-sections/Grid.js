import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const Grid = ({ blok }) => {
  return (
    <section className="section-spacing-p bg-stone" {...storyblokEditable(blok)}>
      <Container>
        <div className="grid gap-side-padding md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow text={blok.eyebrow} />

            <Heading level={2} size="3xl" className="mb-4">
              {blok.title}
            </Heading>
            <Subtitle color="grey">{blok.subtitle}</Subtitle>

            <div className="mt-8 md:mt-12">
              {blok.buttons.map((button) => {
                return (
                  <Button key={button._uid} href={linkResolver(button.link)}>
                    {button.text}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-large sm:grid-cols-2 md:col-span-7">
            {blok.cards.map((card) => {
              return (
                <div {...storyblokEditable(card)} key={card._uid}>
                  <StoryblokImage className="h-8 w-8" image={card.icon} />

                  <hr className="my-4 text-stroke-light" />
                  <Heading level={3} className="mb-2">
                    {card.title}
                  </Heading>

                  <p className="text-gray-secondary">{card.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Grid;
