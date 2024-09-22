import React from "react";

import { storyblokEditable } from "@storyblok/react";

const TestimonialCarousel = ({ blok }) => {
  return <section {...storyblokEditable(blok)}>TestimonialCarousel</section>;
};

export default TestimonialCarousel;
