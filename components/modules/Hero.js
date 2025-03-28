import cn from "classnames";
import { render } from "storyblok-rich-text-react-renderer";

import { linkResolver } from "utils/linkResolver";

import GoogleRating from "components/base/GoogleRating";
import Button from "components/common/Button";
import Container from "components/common/Container";
import PostcodeForm from "components/common/PostcodeForm";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const Hero = ({
  socialProof = false,
  eyebrow,
  title,
  subtitle,
  image,
  align = "left",
  eyebrowColor = "blue",
  postcodeCta = false,
  buttons = [],
}) => {
  return (
    <div className="relative z-10 mt-[-103px] lg:min-h-screen">
      <div className="pt-[103px]">
        <div className="relative z-20 py-xl md:py-2xl lg:py-3xl">
          <Container className="text-white">
            <div
              className={cn("max-w-3xl", {
                "mx-auto text-center": align === "center",
              })}
            >
              {socialProof ? (
                <div
                  className={cn("mb-8", {
                    "flex justify-center": align === "center",
                  })}
                >
                  <GoogleRating color="white" />
                </div>
              ) : null}

              <Eyebrow color={eyebrowColor} className="mb-4" text={eyebrow} />
              <Heading className="mb-4" level={1} size="4xl">
                {title}
              </Heading>
              <Subtitle
                as={typeof subtitle === "string" ? "p" : "div"}
                className="prose prose-invert max-w-none"
                color="white"
                size="medium"
              >
                {typeof subtitle === "string" ? subtitle : render(subtitle)}
              </Subtitle>
            </div>

            {postcodeCta ? (
              <PostcodeForm
                className={cn("mt-12", {
                  "mx-auto flex justify-center": align === "center",
                })}
                buttonText="Search"
              />
            ) : (
              <>
                {buttons?.length > 0 ? (
                  <div
                    className={cn(
                      "mt-12 flex flex-col flex-wrap gap-2.5 sm:flex-row lg:items-center",
                      {
                        "justify-center": align === "center",
                      }
                    )}
                  >
                    {buttons?.map((button, idx) => {
                      return (
                        <Button
                          color="white"
                          outline={buttons.length === 2 && idx !== 0}
                          key={button._uid}
                          href={linkResolver(button.link)}
                        >
                          {button.text}
                        </Button>
                      );
                    })}
                  </div>
                ) : null}
              </>
            )}
          </Container>
        </div>
        <div>
          <StoryblokImage
            fill
            priority={true}
            image={image}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black bg-opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
