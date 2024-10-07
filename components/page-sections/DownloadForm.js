import React from "react";

import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { storyblokEditable } from "@storyblok/react";

import Button from "components/common/Button";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const DownloadForm = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="section-spacing-p bg-black">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="h-full">
            <StoryblokImage className="h-full rounded object-cover" image={blok.image} />
          </div>
          <div className="">
            <div className="lg:py-2xl">
              <Heading className="mb-2" color="white" size="3xl" level={2}>
                {blok.title}
              </Heading>
              <Subtitle alternate color="grey">
                {blok.subtitle}
              </Subtitle>
              <div className="mt-8 grid grid-cols-1 gap-2.5">
                {blok.bullet_points.map((item) => {
                  return (
                    <div className="flex items-center gap-4 text-white">
                      <Check className="text-blue" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
              {/* TODO mailchimp */}
              <form className="mt-6 flex max-w-xl items-center gap-4 py-4">
                <input className="w-full py-3" type="email" placeholder="Enter your email" />
                <Button outline color="white">
                  Download
                </Button>
              </form>
              <p className="text-smaller text-white">
                By clicking Sign Up you're confirming that you agree with our{" "}
                <a className="underline" href="/terms">
                  Terms and Conditions
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadForm;
