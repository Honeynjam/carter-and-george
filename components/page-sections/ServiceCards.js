import React, { useState } from "react";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { useKeenSlider } from "keen-slider/react";

import Container from "components/common/Container";
import TextButton from "components/common/TextButton";
import { Eyebrow, Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const ServiceCard = ({ service }) => {
  if (service.content) {
    return (
      <StoryblokLink
        link={service}
        className="keen-slider__slide group relative h-[450px] overflow-hidden rounded duration-100 hover:shadow-2xl lg:h-[530px]"
      >
        <StoryblokImage
          fill
          className="absolute inset-0 z-10 object-cover"
          image={service.content.card_image}
        />
        <div className="absolute inset-0 z-20 bg-black/30" />
        <div className="absolute bottom-4 left-4 right-4 z-30 p-4 text-white backdrop-blur-[75px] lg:bottom-8 lg:left-8 lg:right-8">
          <Heading level={3} className="mb-4" size="large">
            {service.content.card_title || service.content.name}
          </Heading>
          <TextButton>Learn more</TextButton>
        </div>
      </StoryblokLink>
    );
  } else return null;
};

const ServiceCards = ({ blok }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 1.2,
        spacing: 32,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2.1,
            spacing: 32,
          },
        },
        "(min-width: 1080px)": {
          slides: {
            perView: 3.6,
            spacing: 32,
          },
        },
      },

      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },

    []
  );

  const isCarousel = blok.cards.length > 3;

  return (
    <section
      {...storyblokEditable(blok)}
      className="overflow-hidden py-side-padding md:py-xl lg:py-2xl"
    >
      <Container>
        <div
          className={cn("mb-12 lg:mb-20", {
            "mx-auto max-w-3xl text-center": !isCarousel,
            "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-20": isCarousel,
          })}
        >
          <div>
            <Eyebrow className="mb-6" text={blok.eyebrow} />
            <Heading size="3xl" level={2}>
              {blok.title}
            </Heading>
          </div>
          <div>
            {isCarousel && loaded && instanceRef.current && (
              <div className="flex items-center gap-4">
                <button
                  className="rounded-full border border-stroke-light bg-white p-5 duration-150 hover:bg-stone"
                  tabIndex={currentSlide === 0 ? -1 : 0}
                  onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                  aria-label="Previous item"
                >
                  <ArrowLeft
                    aria-hidden="true"
                    className={cn("text-primary h-5 w-5 cursor-pointer duration-200", {})}
                  />
                </button>

                <button
                  className="rounded-full border border-stroke-light bg-white p-5 duration-150 hover:bg-stone"
                  tabIndex={
                    currentSlide === instanceRef.current.track.details.slides.length - 3 ? -1 : 0
                  }
                  onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                  aria-label="Next item"
                >
                  <ArrowRight
                    aria-hidden="true"
                    className={cn("text-primary h-5 w-5 cursor-pointer duration-200", {})}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
        {isCarousel ? (
          <div ref={sliderRef} className="keen-slider !w-auto !overflow-visible">
            {blok.cards.map((service) => {
              return <ServiceCard key={service._uid} service={service} />;
            })}
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {blok.cards.map((service) => {
              return <ServiceCard key={service._uid} service={service} />;
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ServiceCards;
