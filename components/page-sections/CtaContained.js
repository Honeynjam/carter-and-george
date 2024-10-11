import React from "react";

import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import PostcodeForm from "components/common/PostcodeForm";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const CtaContained = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="section-spacing-m relative overflow-hidden">
        <Container>
          <div
            className={cn(
              "grid items-center gap-8 overflow-hidden rounded md:grid-cols-2 md:gap-16",
              {
                "bg-black": blok.background === "dark",
                "bg-stone": blok.background === "light",
                "border border-stroke-light bg-white": blok.background === "outline",
              }
            )}
          >
            <StoryblokImage className="h-full w-full object-cover" image={blok.image} />
            <div className="relative z-30 max-md:mb-8 max-md:px-8 md:py-8 md:pr-8">
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

              <div className="mt-6 lg:mt-10">
                {blok.postcode_cta ? (
                  <PostcodeForm hideLabel onWhite={blok.background !== "dark"} />
                ) : (
                  <>
                    {blok.buttons.map((button) => {
                      return (
                        <Button
                          key={button._uid}
                          color={blok.background === "dark" ? "white" : "black"}
                          href={linkResolver(button.link)}
                        >
                          {button.text}
                        </Button>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CtaContained;
