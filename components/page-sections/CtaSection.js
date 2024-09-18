import React from "react";

import { storyblokEditable } from "@storyblok/react";

import Button from "components/common/Button";
import Container from "components/common/Container";
import StoryblokImage from "components/storyblok/StoryblokImage";

const CtaSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="py-3xl relative overflow-hidden">
        <Container>
          <div className="relative z-30 max-w-2xl p-12 backdrop-blur-[75px]">
            <h2 className="text-3xl font-semibold text-white">{blok.title}</h2>
            <div className="mt-10">
              <form className="flex items-center gap-4" href="#">
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
