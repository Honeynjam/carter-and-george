import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

import Container from "components/common/Container";
import { Eyebrow, Heading } from "components/common/Typography";

const LocationPricing = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="my-side-padding md:my-xl lg:my-2xl"
    >
      <Container size="lg">
        <div className="mb-8 text-center">
          <Eyebrow text={blok.eyebrow} />
          <Heading className="mt-4" size="3xl" level={2}>
            {blok.title}
          </Heading>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {blok.sections.map((section) => {
            return (
              <div {...storyblokEditable(section)} key={section._uid}>
                <Heading className="my-5" level={3} size="large">
                  {section.title}
                </Heading>
                {section.list.map((item, idx) => {
                  return (
                    <div
                      {...storyblokEditable(item)}
                      key={item._uid}
                      className={cn(
                        "flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:gap-20",
                        {
                          "bg-white": idx % 2 !== 0,
                          "bg-stone": idx % 2 === 0,
                        }
                      )}
                    >
                      <p className="flex-1">{item.name}</p>
                      <p className="font-bold">{item.price}</p>
                      {/* TODO - add subitems */}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default LocationPricing;
