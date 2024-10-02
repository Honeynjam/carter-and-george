import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const Grid = ({ blok }) => {
  return (
    <section className="bg-stone py-20 md:py-xl lg:py-2xl" {...storyblokEditable(blok)}>
      <Container>
        <div className="grid gap-side-padding md:grid-cols-2">
          <div>
            <Eyebrow text={blok.eyebrow} />

            <Heading level={2} size="3xl" className="mb-4">
              {blok.title}
            </Heading>
            <p className="text-gray-secondary">{blok.subtitle}</p>
            <div className="mt-12">
              {blok.buttons.map((button) => {
                return <Button href={linkResolver(button.link)}>{button.text}</Button>;
              })}
            </div>
          </div>
          <div className="grid gap-large sm:grid-cols-2">
            {blok.cards.map((card) => {
              return (
                <div>
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
