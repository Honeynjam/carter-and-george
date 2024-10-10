import React, { Fragment, useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

import { Dialog, Transition } from "@headlessui/react";
import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoModal = ({ isOpen, setIsOpen, video }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative my-8 inline-block w-full max-w-6xl transform rounded-[9px] bg-white p-3 text-left align-middle shadow-xl transition-all">
              <div className="iframe-wrapper">
                <ReactPlayer url={video} controls />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

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
        <div className="relative z-30 mt-12 flex items-center justify-center lg:mt-32">
          <div className="flex items-center justify-center">
            {blok.video_url ? (
              <button
                onClick={() => setIsOpen(true)}
                className="font-petite-caps h-[150px] w-[150px] rounded-full border-[3px] border-white p-4 text-eyebrow text-white duration-150 ease-in-out hover:bg-white hover:text-black hover:shadow-lg"
              >
                Play video
              </button>
            ) : null}
          </div>
        </div>
      </Container>
      <VideoModal video={blok.video_url} isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default GridWithVideo;
