import React, { useState } from "react";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ServicesOverview = ({ blok }) => {
  const [active, setActive] = useState(blok.services[0]);
  return (
    <section className="section-spacing-m" {...storyblokEditable(blok)}>
      <Container>
        <div className="max-w-4xl">
          <Eyebrow text={blok.eyebrow} />
          <Heading className="mb-4 mt-6" level={2} size="3xl">
            {blok.title}
          </Heading>
          <Subtitle color="grey">{blok.subtitle}</Subtitle>
        </div>
        <div className="mt-20 grid items-start gap-12 lg:grid-cols-5 lg:gap-20">
          <div className="grid grid-cols-1 gap-5 lg:col-span-3">
            {blok.services.map((service) => {
              return (
                <div
                  className="group flex items-center gap-4"
                  onMouseEnter={() => setActive(service)}
                >
                  <p className="cursor-pointer text-3xl font-medium opacity-50 duration-150 hover:opacity-100 md:text-4xl lg:text-5xl">
                    {service.name}
                  </p>
                  <div className="overflow-hidden rounded-full bg-stone p-4 opacity-0 duration-75 group-hover:opacity-100">
                    <ArrowRight className="h-8 w-8 text-black" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-full lg:col-span-2">
            {blok.services.map((service) => {
              return (
                <div
                  key={service._uid}
                  {...storyblokEditable(service)}
                  className={cn("duration-150", {
                    "hidden opacity-0": service._uid !== active._uid,
                    "block opacity-100": service._uid === active._uid,
                  })}
                >
                  <p className="mb-4 text-md">{service.subtitle}</p>
                  <StoryblokImage image={service.image} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
