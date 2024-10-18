import React from "react";

import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { useKeenSlider } from "keen-slider/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ScrollerSection = ({ blok }) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 1.4,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2.2,
            spacing: 24,
          },
        },
        "(min-width: 1080px)": {
          slides: {
            perView: 2.7,
            spacing: 48,
          },
        },
      },
    },

    []
  );
  return (
    <section
      className={cn("overflow-hidden", {
        "section-spacing-p bg-black": blok.background === "dark",
        "section-spacing-p bg-stone": blok.background === "light",
      })}
      {...storyblokEditable(blok)}
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-20">
          <div className="max-w-4xl lg:w-7/12">
            <Heading
              className="mb-2 lg:mb-4"
              size="3xl"
              color={blok.background === "dark" ? "white" : "black"}
            >
              {blok.title}
            </Heading>
            <Subtitle alternate={blok.background === "dark"} color="grey">
              {blok.subtitle}
            </Subtitle>
          </div>
          <div className="flex flex-1 flex-col items-start gap-8 sm:flex-row md:gap-12 lg:gap-20">
            {blok.stat_items.map((item) => {
              return (
                <div
                  {...storyblokEditable(item)}
                  key={item._uid}
                  className={cn("max-w-sm border-l-2 pl-4", {
                    "border-stroke-dark": blok.background === "dark",
                    "border-stroke-light": blok.background === "light",
                  })}
                >
                  <span className="mb-2 text-3xl font-medium text-blue">{item.stat}</span>
                  <Subtitle alternate={blok.background === "dark"} color="grey">
                    {item.name}
                  </Subtitle>
                </div>
              );
            })}
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider mt-20 !w-auto !overflow-visible">
          {blok.cards.map((card, idx) => {
            return (
              <div
                {...storyblokEditable(card)}
                key={card._uid}
                className="keen-slider__slide w-[340px]"
              >
                <StoryblokImage
                  sizes={{ xs: "60vw", m: "40vw", l: "33vw" }}
                  className="aspect-[16/9] rounded object-cover"
                  image={card.image}
                />
                <hr
                  className={cn("mb-4 mt-8", {
                    "text-stroke-dark": blok.background === "dark",
                    "text-stroke-light": blok.background === "light",
                  })}
                />
                <span
                  className={cn("mb-6 block text-eyebrow", {
                    "text-gray-tertiary-alternate": blok.background === "dark",
                    "text-gray-secondary": blok.background === "light",
                  })}
                >
                  0{idx + 1}
                </span>
                <Heading
                  color={blok.background === "dark" ? "white" : "black"}
                  className="mb-2"
                  size="xl"
                >
                  {card.title}
                </Heading>
                <Subtitle alternate={blok.background === "dark"} color="grey">
                  {card.subtitle}
                </Subtitle>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          {blok.buttons.map((button, index) => {
            return (
              <Button
                key={index}
                color={blok.background === "dark" ? "white" : "black"}
                outline
                href={linkResolver(button.link)}
              >
                {button.text}
              </Button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ScrollerSection;
