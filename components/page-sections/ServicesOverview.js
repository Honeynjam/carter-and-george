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
    <section className="my-2xl" {...storyblokEditable(blok)}>
      <Container>
        <div className="max-w-4xl">
          <Eyebrow text={blok.eyebrow} />
          <Heading className="mb-4 mt-6" level={2} size="3xl">
            {blok.title}
          </Heading>
          <Subtitle color="grey">{blok.subtitle}</Subtitle>
        </div>
        <div className="mt-20 grid grid-cols-5 items-start gap-20">
          <div className="col-span-3 grid grid-cols-1 gap-5">
            {blok.services.map((service) => {
              return (
                <div
                  className="group flex items-center gap-4"
                  onMouseEnter={() => setActive(service)}
                >
                  <p className="cursor-pointer text-5xl font-medium opacity-50 duration-150 hover:opacity-100">
                    {service.name}
                  </p>
                  <div className="overflow-hidden rounded-full bg-stone p-4 opacity-0 duration-75 group-hover:opacity-100">
                    <ArrowRight className="h-8 w-8 text-black" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-2 h-full">
            {blok.services.map((service) => {
              return (
                <div
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
