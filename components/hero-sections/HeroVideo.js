import { Fragment, useState } from "react";

import dynamic from "next/dynamic";

import { Dialog, Transition } from "@headlessui/react";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import PostcodeForm from "components/common/PostcodeForm";
import { Heading, Subtitle } from "components/common/Typography";
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

const HeroVideo = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section {...storyblokEditable(blok)}>
      <div className="relative z-10 mt-[-103px] lg:min-h-screen">
        <div className="pt-[103px]">
          <div className="relative z-20 py-xl md:py-2xl lg:py-3xl">
            <Container className="text-white">
              <div className="grid gap-20 md:grid-cols-2">
                <div>
                  <div
                    className={cn("max-w-3xl", {
                      "mx-auto text-center": blok.align === "center",
                    })}
                  >
                    <Heading className="mb-4" level={1} size="4xl">
                      {blok.title}
                    </Heading>
                    <Subtitle color="white" size="medium">
                      {blok.subtitle}
                    </Subtitle>
                  </div>
                  {blok.postcode_cta ? (
                    <PostcodeForm
                      className={cn("mt-12", {
                        "mx-auto flex justify-center": blok.align === "center",
                      })}
                      buttonText="Search"
                    />
                  ) : null}
                </div>
                <div className="flex items-center justify-center">
                  {blok.video_url ? (
                    <button
                      onClick={() => setIsOpen(true)}
                      className="font-petite-caps h-[150px] w-[150px] rounded-full border-[3px] border-white p-4 text-eyebrow duration-150 ease-in-out hover:bg-white hover:text-black hover:shadow-lg"
                    >
                      Play video
                    </button>
                  ) : null}
                </div>
              </div>
            </Container>
          </div>
          <div>
            <StoryblokImage
              priority
              image={blok.bg_image}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-black bg-opacity-30"></div>
          </div>
        </div>
      </div>
      <VideoModal video={blok.video_url} isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default HeroVideo;
