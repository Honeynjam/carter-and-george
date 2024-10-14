import React, { useState } from "react";

import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import VideoModal from "components/common/VideoModal";
import StoryblokImage from "components/storyblok/StoryblokImage";

const GridWithVideo = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-spacing-p relative overflow-hidden" {...storyblokEditable(blok)}>
      <div>
        <StoryblokImage fill className="z-10 object-cover" image={blok.bg_image} />
        <div className="absolute inset-0 z-20 bg-black/20" />
      </div>

      <Container>
        <div className="relative z-20 grid gap-side-padding bg-white/30 p-8 backdrop-blur-[75px] md:grid-cols-12 lg:p-20">
          <div className="md:col-span-5">
            <Eyebrow color="white" text={blok.eyebrow} />

            <Heading color="white" level={2} size="3xl" className="mb-4">
              {blok.title}
            </Heading>
            <Subtitle color="white">{blok.subtitle}</Subtitle>
          </div>
          <div className="grid gap-large sm:grid-cols-2 md:col-span-7">
            {blok.cards.map((card) => {
              return (
                <div {...storyblokEditable(card)} key={card._uid}>
                  <StoryblokImage className="h-8 w-8" image={card.icon} />

                  <hr className="my-4 text-white" />
                  <Heading level={3} color="white" className="mb-2">
                    {card.title}
                  </Heading>

                  <p className="text-white">{card.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
        {blok.video_url ? (
          <div className="relative z-30 mt-12 flex items-center justify-center lg:mt-32">
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="font-petite-caps h-[150px] w-[150px] rounded-full border-[3px] border-white p-4 text-eyebrow text-white duration-150 ease-in-out hover:bg-white hover:text-black hover:shadow-lg"
              >
                Play video
              </button>
            </div>
          </div>
        ) : null}
      </Container>

      <VideoModal video={blok.video_url} isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default GridWithVideo;
