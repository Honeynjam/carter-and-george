import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";

const BulletsSection = ({ blok }) => {
  return (
    <div className="section-spacing-p bg-stone" {...storyblokEditable(blok)}>
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow text={blok.eyebrow} />
            <Heading size="3xl" level={2} className="mb-4">
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
          <div className="lg:col-span-7">
            <div
              className={cn({
                "grid grid-cols-2 gap-x-12 gap-y-8": blok.bullet_columns === "two",
              })}
            >
              {blok.bullet_list.map((item) => {
                if (item.text) {
                  return (
                    <div
                      {...storyblokEditable(item)}
                      key={item._uid}
                      className={cn("flex items-center gap-4 text-md text-black", {
                        "border-t border-stroke-light py-6 lg:py-8": blok.bullet_columns === "one",
                        "": blok.bullet_columns === "two",
                      })}
                    >
                      <div className="rounded-full bg-[#E9F0F2] p-1.5">
                        <Check className="h-6 w-6 text-blue" weight="bold" />
                      </div>
                      <span className="flex-1">{item.text}</span>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BulletsSection;
