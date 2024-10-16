import React from "react";

import { Clock } from "@phosphor-icons/react/dist/ssr/Clock";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import Hr from "components/common/Hr";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";

const JobListing = ({ blok }) => {
  return (
    <section className="section-spacing-m" {...storyblokEditable(blok)}>
      <Container>
        <Eyebrow text={blok.eyebrow} />

        <Heading level={2} size="3xl" className="mb-4">
          {blok.title}
        </Heading>
        <Hr />
        <div className="mt-12 grid items-start gap-side-padding md:grid-cols-12">
          <div className="md:sticky md:top-24 md:col-span-5 lg:relative lg:top-0">
            <Subtitle color="grey">{blok.subtitle}</Subtitle>
          </div>

          <div className="md:col-span-7">
            {blok.open_positions.map((item) => {
              return (
                <div
                  className="border-b border-stroke-light py-4 lg:py-8"
                  {...storyblokEditable(item)}
                  key={item.content._uid}
                >
                  <Heading level={3} className="mb-2">
                    {item.content.title}
                  </Heading>

                  <p className="text-gray-secondary">{item.content.subtitle}</p>

                  <div className="mt-6 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-blue" weight="bold" />
                      {item.content.Location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-blue" weight="bold" />
                      {item.content.contract_type}
                    </div>
                  </div>
                  <Button className="mt-8" outline href={linkResolver(item)}>
                    Learn more
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JobListing;
