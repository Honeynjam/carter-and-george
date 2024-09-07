import React from "react";

import { storyblokEditable } from "@storyblok/react";

const CtaSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="cta-section">
      {/* CTA content will go here */}
    </section>
  );
};

export default CtaSection;
