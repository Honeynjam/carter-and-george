import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";

const JobPosition = ({ blok }) => (
  <div className="mt-12 lg:mt-20" {...storyblokEditable(blok)} key={blok._uid}>
    <Container>
      <div className="mb-xl lg:mb-2xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Heading level={1} size="4xl" className="mb-2">
              {blok.title}
            </Heading>
            <Subtitle>{blok.subtitle}</Subtitle>
          </div>
          <Button href={linkResolver(blok.apply_url)}>Apply now</Button>
        </div>
        <hr className="mb-12 mt-6 text-stroke-light" />
        <div className="mt-12 lg:mt-20">
          {blok.body?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        <div className="mt-12 lg:mt-20">
          <Button href={linkResolver(blok.apple_url)}>Apply now</Button>
        </div>
      </div>
    </Container>
  </div>
);

export default JobPosition;
