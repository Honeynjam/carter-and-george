import React from "react";

import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";

const TestimonialWithStats = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="relative py-20 md:py-xl lg:py-2xl">
      <Container className="text-center">TestimonialWithStats - TODO</Container>
    </section>
  );
};

export default TestimonialWithStats;
