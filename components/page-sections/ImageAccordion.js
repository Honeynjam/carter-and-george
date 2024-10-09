import React from "react";

import { Disclosure } from "@headlessui/react";
import { Minus } from "@phosphor-icons/react/dist/ssr/Minus";
import { Plus } from "@phosphor-icons/react/dist/ssr/Plus";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { AnimatePresence, m } from "framer-motion";
import { render } from "storyblok-rich-text-react-renderer";

import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

export const AccordionItem = ({ data, isFirst = false, background = "light" }) => {
  return (
    <Disclosure {...storyblokEditable(data)} as="div" className={cn({ "pt-5": !isFirst })}>
      {({ open }) => (
        <>
          <dt className="border-t border-stroke-light pt-5">
            <Disclosure.Button className="flex w-full items-start justify-between text-left">
              <span
                className={cn("text-medium font-medium", {
                  "text-white": background === "dark",
                  "text-black": background === "light",
                })}
              >
                {data.title}
              </span>
              <span className={cn("ml-6 flex h-7 items-center text-stroke-dark", {})}>
                {open ? (
                  <Minus className="h-4 w-4" weight="bold" />
                ) : (
                  <Plus className="h-4 w-4" weight="bold" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <AnimatePresence initial={false}>
            {open ? (
              <m.dd
                className="mt-2 pr-12"
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", visibility: "visible", marginTop: "24px" },
                  collapsed: { opacity: 0, height: 0, visibility: "hidden", marginTop: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div
                  className={cn("prose max-w-none", {
                    "text-gray-secondary-alternate": background === "dark",
                    "text-gray-secondary": background === "light",
                  })}
                >
                  {render(data.subtitle)}
                </div>
              </m.dd>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

const ImageAccordion = ({ blok }) => {
  return (
    <section
      className={cn("py-side-padding md:py-xl lg:py-2xl", {
        "bg-black": blok.background === "dark",
        "bg-stone": blok.background === "light",
      })}
      {...storyblokEditable(blok)}
    >
      <Container>
        <div className="grid items-start gap-medium lg:grid-cols-12 lg:gap-xl">
          <div
            className={cn("lg:col-span-7 lg:py-xl", {
              "order-1 lg:order-2": blok.image_position === "left",
              "order-1 lg:order-1": blok.image_position === "right",
            })}
          >
            <div className="mb-12 max-w-xl">
              <Eyebrow text={blok.eyebrow} />
              <Heading
                color={blok.background === "dark" ? "white" : "black"}
                level={2}
                className="mb-4"
                size="3xl"
              >
                {blok.title}
              </Heading>
              <Subtitle alternate={blok.background === "dark"} color="grey" size="medium">
                {blok.subtitle}
              </Subtitle>
            </div>
            <div>
              {blok.items.map((item, idx) => {
                if (item.title) {
                  return (
                    <AccordionItem
                      isFirst={idx === 0}
                      key={item._uid}
                      data={item}
                      background={blok.background}
                    />
                  );
                } else return null;
              })}
            </div>
          </div>
          <div
            className={cn("h-full w-full lg:col-span-5 lg:max-h-[800px]", {
              "order-2 lg:order-1": blok.image_position === "left",
              "order-2 lg:order-2": blok.image_position === "right",
            })}
          >
            <StoryblokImage className="h-full w-full rounded object-cover" image={blok.image} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImageAccordion;
