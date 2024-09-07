import React from "react";

import { storyblokEditable } from "@storyblok/react";

const FaqSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="faq-section">
      {/* FAQ content will go here */}
    </section>
  );
};

export default FaqSection;
