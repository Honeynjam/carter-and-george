import React from "react";
import { useEffect, useRef } from "react";

import { storyblokEditable } from "@storyblok/react";
import { m, useAnimation, useScroll, useTransform } from "framer-motion";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const ScrollerSection = ({ blok }) => {
  const controls = useAnimation();

  // useScroll hook to monitor the scroll position on the outer section
  const { scrollYProgress } = useScroll({
    container: useRef(null),
  });

  // Map scroll position to a transform value for the x-axis movement
  const x = useTransform(scrollYProgress, [0, 1], [4000, -4000]);

  // Apply animation effect based on scroll position
  useEffect(() => {
    controls.start({
      x, // Link x-axis transform to scroll position
      transition: { type: "spring", stiffness: 1 },
    });
  }, [controls, x]);

  return (
    <section
      className="overflow-hidden bg-black py-3xl"
      {...storyblokEditable(blok)}
      ref={useScroll().container}
    >
      <Container>
        <div className="flex items-end gap-20">
          <div className="max-w-3xl">
            <Heading className="mb-2" size="4xl" color="white">
              {blok.title}
            </Heading>
            <Subtitle alternate color="grey">
              {blok.subtitle}
            </Subtitle>
          </div>
          <div className="flex flex-1 items-center gap-4">
            {blok.stat_items.map((item, index) => {
              return (
                <div key={index} className="w-full border-l-2 border-stroke-dark pl-4">
                  <span className="mb-2 text-3xl font-medium text-blue">{item.stat}</span>
                  <p className="text-white">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <m.div
        style={{ x }} // Bind the x-axis scroll movement to motion div
        animate={controls}
        className="mt-20 flex gap-12 overflow-x-auto"
      >
        {blok.cards.map((card, idx) => {
          return (
            <div key={idx} className="w-[400px]">
              <StoryblokImage
                className="aspect-[16/9] h-[240px] rounded object-cover"
                image={card.image}
              />
              <hr className="mb-4 mt-8 text-stroke-dark" />
              <span className="mb-6 block text-eyebrow text-gray-tertiary-alternate">
                0{idx + 1}
              </span>
              <Heading className="mb-2" color="white" size="xl">
                {blok.title}
              </Heading>
              <Subtitle alternate color="grey">
                {blok.subtitle}
              </Subtitle>
            </div>
          );
        })}
      </m.div>
      {console.log(blok.buttons)}
      <Container>
        <div className="mt-12">
          {blok.buttons.map((button, index) => {
            return (
              <Button key={index} color="white" outline href={linkResolver(button.link)}>
                {button.text}
              </Button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ScrollerSection;
