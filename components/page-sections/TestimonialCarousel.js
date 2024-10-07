import React, { useState } from "react";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { useKeenSlider } from "keen-slider/react";

import Container from "components/common/Container";
import { Heading } from "components/common/Typography";

const TestimonialCarousel = ({ blok }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1080px)": {
          slides: {
            perView: 3,
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

  return (
    <section {...storyblokEditable(blok)} className="section-spacing-m">
      <Container>
        <Heading size="3xl" level={2}>
          {blok.title}
        </Heading>
        <div ref={sliderRef} className="keen-slider mt-12 lg:mt-20">
          {blok.testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.content._uid}
                className="keen-slider__slide border-l border-stroke-light p-8"
              >
                <div className="mb-8 flex items-center gap-1">
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                  <Star size={20} weight="fill" />
                </div>
                <div className="mb-8">{testimonial.content.quote}</div>
                <div className="text-small text-gray-secondary">
                  {testimonial.content.person_name}, {testimonial.content.person_position}
                </div>
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <div
            role="group"
            aria-label="Carousel controls"
            className="mt-12 flex items-center justify-center gap-10 md:justify-between"
          >
            <div className="hidden space-x-3 md:flex">
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                return (
                  <button
                    aria-label={`Slide ${idx + 1}`}
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "h-2.5 w-2.5 rounded-full " +
                      (currentSlide === idx ? "bg-black" : "bg-stroke-light")
                    }
                  ></button>
                );
              })}
            </div>

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
          </div>
        )}
      </Container>
    </section>
  );
};

export default TestimonialCarousel;
