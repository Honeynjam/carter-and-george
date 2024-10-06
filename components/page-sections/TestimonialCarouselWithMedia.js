import React, { useState } from "react";

import { ArrowLeft, ArrowRight, Star } from "@phosphor-icons/react";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { useKeenSlider } from "keen-slider/react";
import ReactPlayer from "react-player";

import Container from "components/common/Container";
import { Eyebrow, Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const Testimonial = ({ videoUrl, image, quote, person }) => {
  return (
    <div className="keen-slider__slide grid overflow-hidden rounded lg:grid-cols-2">
      <div>
        {videoUrl ? (
          <ReactPlayer
            className="aspect-video"
            width="100%"
            height="100%"
            controls={true}
            url={videoUrl}
          />
        ) : (
          <StoryblokImage className="aspect-video h-full w-full object-cover" image={image} />
        )}
      </div>
      <div className="flex h-full flex-col justify-between pt-12 lg:bg-stone lg:p-16">
        <div>
          <div className="mb-8 flex items-center gap-1">
            <Star className="text-blue" size={20} weight="fill" />
            <Star className="text-blue" size={20} weight="fill" />
            <Star className="text-blue" size={20} weight="fill" />
            <Star className="text-blue" size={20} weight="fill" />
            <Star className="text-blue" size={20} weight="fill" />
          </div>
          <div className="mb-8">{quote}</div>
        </div>
        <div className="text-small text-gray-secondary">{person}</div>
      </div>
    </div>
  );
};

const TestimonialCarouselWithMedia = ({ blok }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
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
    <section {...storyblokEditable(blok)} className="section-spacing-m relative">
      <Container>
        <div className="text-center">
          <Eyebrow text={blok.eyebrow} />
          <Heading level={2} size="3xl">
            {blok.title}
          </Heading>
        </div>

        <div ref={sliderRef} className="keen-slider mt-12 lg:mt-20">
          {blok.testimonials.map((testimonial) => {
            if (testimonial.content.component === "patient_story") {
              return (
                <Testimonial
                  key={testimonial.content._uid}
                  videoUrl={testimonial.content.video_url}
                  image={testimonial.content.image}
                  person={testimonial.content.person}
                  quote={testimonial.content.quote}
                />
              );
            }

            if (testimonial.content.component === "quote_media") {
              return (
                <Testimonial
                  key={testimonial.content._uid}
                  videoUrl={testimonial.content.video_url}
                  image={testimonial.content.image}
                  person={testimonial.content.person}
                  quote={testimonial.content.quote}
                />
              );
            }
            return null;
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

export default TestimonialCarouselWithMedia;
