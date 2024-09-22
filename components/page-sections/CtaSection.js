import React from "react";

import { storyblokEditable } from "@storyblok/react";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const CtaSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="relative overflow-hidden py-xl md:py-2xl lg:py-3xl">
        <Container>
          <div className="relative z-30 max-w-2xl p-12 backdrop-blur-[75px]">
            <Heading color="white" size="3xl" level={2}>
              {blok.title}
            </Heading>

            <div className="mt-10">
              <form className="flex flex-col gap-4 md:flex-row md:items-center" href="#">
                <input className="" placeholder="Postcode" />
                <Button>Find your local clinic</Button>
              </form>
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
