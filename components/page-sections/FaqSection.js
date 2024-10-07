import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import { FaqItem } from "components/page-content-types/FaqPage";

const FaqSection = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="section-spacing-m">
      <Container>
        <div className="grid gap-8 lg:grid-cols-10 lg:gap-20">
          <div className="lg:col-span-4">
            <Heading className="mb-2" size="3xl">
              {blok.title}
            </Heading>
            <Subtitle color="grey">{blok.subtitle}</Subtitle>
            <div className="mt-6 lg:mt-12">
              {blok.buttons.map((button) => {
                return (
                  <Button key={button._uid} href={linkResolver(button.link)}>
                    {button.text}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-6">
            {blok.items.map((item) => {
              return (
                <div key={item._uid} className="border-t border-stroke-light pb-5">
                  <FaqItem data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
