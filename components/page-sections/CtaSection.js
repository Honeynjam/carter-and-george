import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import PostcodeForm from "components/common/PostcodeForm";
import { Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const CtaSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="relative overflow-hidden py-xl md:py-2xl lg:py-3xl">
        <Container>
          <div className="relative z-30 max-w-2xl p-8 backdrop-blur-[75px] lg:p-12">
            <Heading color="white" size="3xl" level={2}>
              {blok.title}
            </Heading>

            <div className="mt-10">
              {blok.postcode_cta ? (
                <PostcodeForm hideLabel />
              ) : (
                <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center">
                  {blok.buttons.map((button) => {
                    return (
                      <Button key={button._uid} color="white" href={linkResolver(button.link)}>
                        {button.text}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
        <StoryblokImage fill className="absolute inset-0 z-10 object-cover" image={blok.image} />
        <div className="absolute inset-0 z-20 bg-black/20" />
      </div>
    </section>
  );
};

export default CtaSection;
