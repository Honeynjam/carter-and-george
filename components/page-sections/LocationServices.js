import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";
import { Heading } from "components/common/Typography";
import StoryblokLink from "components/storyblok/StoryblokLink";

const LocationServices = ({ blok, location }) => {
  return (
    <div className="section-spacing-m" {...storyblokEditable(blok)}>
      <Container>
        <Heading size="xl" level={2}>
          {blok.title}
        </Heading>
        <hr className="my-6 text-stroke-light" />
        <div
          {...storyblokEditable(location)}
          className="grid gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {console.log(location.services)}
          {location.services.map((service) => {
            if (service.content) {
              return (
                <StoryblokLink
                  {...storyblokEditable(service)}
                  link={service}
                  className="group flex items-center"
                  key={service._uid}
                >
                  <div className="mr-4 rounded-full bg-[#E9F0F2] p-1.5">
                    <Check className="text-blue" weight="bold" />
                  </div>
                  <p className="text-md">{service.content.name}</p>
                  <CaretRight
                    className="ml-2 h-4 w-4 duration-150 ease-out will-change-transform group-hover:translate-x-0.5"
                    size={16}
                  />
                </StoryblokLink>
              );
            } else return null;
          })}
        </div>
      </Container>
    </div>
  );
};

export default LocationServices;
