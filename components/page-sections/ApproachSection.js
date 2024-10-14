import React from "react";

import { storyblokEditable } from "@storyblok/react";
import { useKeenSlider } from "keen-slider/react";

import { arrayNotEmpty } from "utils/arrayNotEmpty";
import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const MobileCarousel = ({ blok }) => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 1.2,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 3.2,
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
    <div className="lg:hidden">
      <div ref={sliderRef} className="keen-slider mt-12 !w-auto !overflow-visible">
        {blok.items.map((item) => {
          return (
            <div key={item._uid} className="keen-slider__slide">
              <StoryblokImage
                className="mb-9 aspect-[16/9] rounded object-cover"
                image={item.image}
              />
              <hr className="mb-5 mt-4 text-stroke-light" />
              <Heading className="mb-2" level={3} size="medium">
                {item.title}
              </Heading>

              <Subtitle size="small">{item.subtitle}</Subtitle>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ApproachSection = ({ blok }) => {
  return (
    <section className="section-spacing-m overflow-hidden" {...storyblokEditable(blok)}>
      <Container>
        <div className="flex items-end justify-between gap-20">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6" text={blok.eyebrow} />
            <Heading className="mb-2" level={2} size="3xl">
              {blok.title}
            </Heading>

            <Subtitle>{blok.subtitle}</Subtitle>
          </div>
          {arrayNotEmpty(blok.buttons) ? (
            <div>
              {blok.buttons.map((button) => {
                return (
                  <Button key={button._uid} outline href={linkResolver(button.link)}>
                    {button.text}
                  </Button>
                );
              })}
            </div>
          ) : null}
        </div>
        <MobileCarousel blok={blok} />
        {/* Desktop */}
        <div className="group/test mt-xl flex flex-col gap-6 max-lg:hidden md:flex-row lg:mt-3xl">
          {blok.items.map((item) => {
            return (
              <div
                {...storyblokEditable(item)}
                className="group/item duration-500 ease-in-out md:hover:mt-[max(-92px,-6.05vw)] md:hover:w-1/2 md:hover:!opacity-100 md:group-hover/test:opacity-50 lg:w-1/6 lg:hover:w-1/4"
                key={item._uid}
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
                  className="duration-150 ease-in group-hover/item:opacity-100 group-hover/item:delay-[400ms] lg:opacity-0"
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
