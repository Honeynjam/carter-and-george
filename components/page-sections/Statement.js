import React from "react";

import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";
import { Eyebrow, Heading } from "components/common/Typography";

const Statement = ({ blok }) => {
  return (
    <section className="bg-stone py-20 md:py-xl lg:py-2xl" {...storyblokEditable(blok)}>
      <Container>
        <div className="max-w-5xl">
          <Eyebrow className="mb-6" text={blok.eyebrow} />
          <Heading className="text-balance" size="2xl" level={2}>
            {blok.text}
          </Heading>
        </div>
      </Container>
    </section>
  );
};

export default Statement;
