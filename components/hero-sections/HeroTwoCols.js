import { storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import PostcodeForm from "components/common/PostcodeForm";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const HeroTwoCols = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="my-12 md:my-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
            <div>
              <Eyebrow text={blok.eyebrow} />
              <Heading className="mb-2" size="3xl" level={1}>
                {blok.title}
              </Heading>
              <Subtitle size="medium" color="grey">
                {blok.subtitle}
              </Subtitle>
              <div className="mt-6 md:mt-8 lg:mt-12">
                {blok.postcode_cta ? (
                  <PostcodeForm onWhite />
                ) : (
                  <>
                    {blok.buttons.map((button) => {
                      return (
                        <Button key={button._uid} href={linkResolver(button.link)}>
                          {button.text}
                        </Button>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
            <div className="">
              <StoryblokImage
                sizes={{ xs: "100vw", l: "50vw" }}
                priority
                className="h-full w-full rounded object-cover md:aspect-square"
                image={blok.image}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroTwoCols;
