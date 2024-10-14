import React, { useState } from "react";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import { linkResolver } from "utils/linkResolver";

import Container from "components/common/Container";
import TextButton from "components/common/TextButton";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

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
        {/* Mobile */}
        <div className="mt-12 md:hidden">
          {blok.services.map((service, idx) => {
            return (
              <StoryblokLink {...storyblokEditable(service)} key={service._uid} link={service.link}>
                <div className="group relative ml-7 mt-4 gap-4 border-b border-stroke-light pb-6">
                  <span className="font-petite-caps absolute -left-7 top-0 text-small font-semibold text-blue">
                    0{idx + 1}
                  </span>
                  <h3 className="cursor-pointer text-xl font-medium">{service.name}</h3>
                  <TextButton className="mt-2 self-start">Read more</TextButton>
                  <StoryblokImage
                    className="mt-6 h-full w-full rounded object-cover"
                    image={service.image}
                  />
                </div>
              </StoryblokLink>
            );
          })}
        </div>
        {/* Desktop */}
        <div className="mt-8 hidden items-center gap-12 md:mt-20 md:grid md:grid-cols-5 md:gap-20">
          <div className="grid grid-cols-1 gap-5 md:col-span-3">
            {blok.services.map((service, idx) => {
              return (
                <div
                  {...storyblokEditable(service)}
                  key={service._uid}
                  onMouseEnter={() => setActive(service)}
                >
                  <StoryblokLink
                    link={service.link}
                    className="group relative ml-7 flex items-center gap-4"
                  >
                    <span className="font-petite-caps absolute -left-7 top-0 text-small font-semibold text-blue">
                      0{idx + 1}
                    </span>
                    <p className="cursor-pointer text-2xl font-medium opacity-50 duration-150 hover:opacity-100 md:text-3xl lg:text-5xl">
                      {service.name}
                    </p>
                    <div className="overflow-hidden rounded-full bg-stone p-4 opacity-0 duration-75 group-hover:opacity-100 max-md:hidden">
                      <ArrowRight className="h-8 w-8 text-black" />
                    </div>
                  </StoryblokLink>
                </div>
              );
            })}
          </div>
          <div className="h-full md:col-span-2">
            {blok.services.map((service) => {
              return (
                <div
                  key={service._uid}
                  {...storyblokEditable(service)}
                  className={cn("h-full max-h-[550px] transition-opacity duration-500", {
                    "pointer-events-none absolute z-[-10] h-0 w-0 select-none opacity-0":
                      service._uid !== active._uid,
                    "block opacity-100": service._uid === active._uid,
                  })}
                >
                  <StoryblokImage
                    className="h-full w-full rounded object-cover"
                    image={service.image}
                  />
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
