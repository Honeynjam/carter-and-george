import React from "react";

import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const CtaContained = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="relative my-side-padding overflow-hidden md:my-xl lg:my-2xl">
        <Container>
          <div
            className={cn(
              "grid items-center gap-8 overflow-hidden rounded md:grid-cols-2 lg:gap-16",
              {
                "bg-black": blok.background === "dark",
                "bg-stone": blok.background === "light",
                "border border-stroke-light bg-white": blok.background === "outline",
              }
            )}
          >
            <StoryblokImage className="h-full w-full object-cover" image={blok.image} />
            <div className="relative z-30 max-lg:mb-8 max-lg:px-8 lg:py-8 lg:pr-8">
              <Heading
                className="mb-2"
                color={blok.background === "dark" ? "white" : "black"}
                size="3xl"
                level={2}
              >
                {blok.title}
              </Heading>
              <Subtitle alternate={blok.background === "dark"} color="grey">
                {blok.subtitle}
              </Subtitle>

              <div className="mt-10">
                <form className="flex flex-col gap-4 md:flex-row md:items-center" href="#">
                  <input className="" placeholder="Postcode" />
                  <Button outline color="white">
                    Find your local clinic
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CtaContained;
