import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const HeroTwoCols = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="my-12 lg:my-20">
        <Container>
          <div className="grid items-center lg:grid-cols-2 lg:gap-20">
            <div className="lg:py-2xl">
              <Eyebrow text={blok.eyebrow} />
              <Heading className="mb-2" size="3xl" level={1}>
                {blok.title}
              </Heading>
              <Subtitle size="medium" color="grey">
                {blok.subtitle}
              </Subtitle>
              <div className="mt-12">
                {blok.buttons.map((button) => {
                  return <Button href={linkResolver(button.link)}>{button.text}</Button>;
                })}
              </div>
            </div>
            <div className="h-full">
              <StoryblokImage className="h-full w-full rounded object-cover" image={blok.image} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroTwoCols;
