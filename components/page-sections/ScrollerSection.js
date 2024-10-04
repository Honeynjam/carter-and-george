import React from "react";

import { storyblokEditable } from "@storyblok/react";
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
        spacing: 32,
      },
      breakpoints: {
        "(min-width: 1080px)": {
          slides: {
            perView: 2.6,
            spacing: 48,
          },
        },
      },

      slideChanged(slider) {
        // setCurrentSlide(slider.track.details.rel);
      },
      created() {
        // setLoaded(true);
      },
    },

    [
      // (slider) => {
      //   let timeout;
      //   let mouseOver = false;
      //   function clearNextTimeout() {
      //     clearTimeout(timeout);
      //   }
      //   function nextTimeout() {
      //     clearTimeout(timeout);
      //     if (mouseOver) return;
      //     timeout = setTimeout(() => {
      //       slider.next();
      //     }, 4000);
      //   }
      //   slider.on("created", () => {
      //     slider.container.addEventListener("mouseover", () => {
      //       mouseOver = true;
      //       clearNextTimeout();
      //     });
      //     slider.container.addEventListener("mouseout", () => {
      //       mouseOver = false;
      //       nextTimeout();
      //     });
      //     nextTimeout();
      //   });
      //   slider.on("dragStarted", clearNextTimeout);
      //   slider.on("animationEnded", nextTimeout);
      //   slider.on("updated", nextTimeout);
      // },
    ]
  );
  return (
    <section
      className="overflow-hidden bg-black py-xl md:py-2xl lg:py-3xl"
      {...storyblokEditable(blok)}
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-20">
          <div className="max-w-3xl">
            <Heading className="mb-2 lg:mb-4" size="3xl" color="white">
              {blok.title}
            </Heading>
            <Subtitle alternate color="grey">
              {blok.subtitle}
            </Subtitle>
          </div>
          <div className="flex flex-1 items-center gap-4">
            {blok.stat_items.map((item, index) => {
              return (
                <div key={index} className="w-full border-l-2 border-stroke-dark pl-4">
                  <span className="mb-2 text-3xl font-medium text-blue">{item.stat}</span>
                  <p className="text-white">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider mt-20 !w-auto !overflow-visible">
          {blok.cards.map((card, idx) => {
            return (
              <div key={idx} className="keen-slider__slide w-[340px]">
                <StoryblokImage className="aspect-[16/9] rounded object-cover" image={card.image} />
                <hr className="mb-4 mt-8 text-stroke-dark" />
                <span className="mb-6 block text-eyebrow text-gray-tertiary-alternate">
                  0{idx + 1}
                </span>
                <Heading className="mb-2" color="white" size="xl">
                  {blok.title}
                </Heading>
                <Subtitle alternate color="grey">
                  {blok.subtitle}
                </Subtitle>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          {blok.buttons.map((button, index) => {
            return (
              <Button key={index} color="white" outline href={linkResolver(button.link)}>
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
