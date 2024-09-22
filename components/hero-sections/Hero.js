import { storyblokEditable } from "@storyblok/react";

import Hero from "components/modules/Hero";

const HeroBlok = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <Hero
        socialProof={blok.social_proof}
        title={blok.title}
        subtitle={blok.subtitle}
        image={blok.bg_image}
      />
    </section>
  );
};

export default HeroBlok;
