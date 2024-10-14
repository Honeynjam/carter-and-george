import { useState } from "react";

import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import PostcodeForm from "components/common/PostcodeForm";
import { Heading, Subtitle } from "components/common/Typography";
import VideoModal from "components/common/VideoModal";
import StoryblokImage from "components/storyblok/StoryblokImage";

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
