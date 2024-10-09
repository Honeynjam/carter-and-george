import React from "react";

import Link from "next/link";

import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { storyblokEditable } from "@storyblok/react";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const LeadershipCards = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="section-spacing-m">
      <Container>
        <Eyebrow text={blok.eyebrow} />
        <Heading className="mb-2" size="3xl" level={2}>
          {blok.title}
        </Heading>
        <Subtitle alternate>{blok.subtitle}</Subtitle>
        <div className="mt-20"></div>
      </Container>
    </section>
  );
};

export default LeadershipCards;
