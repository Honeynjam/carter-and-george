import GoogleRating from "components/base/GoogleRating";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const Hero = ({ socialProof = false, eyebrow, title, subtitle, image }) => {
  return (
    <div className="relative z-10 mt-[-103px]">
      <div className="pt-[103px]">
        <div className="relative z-20 py-xl md:py-2xl lg:py-3xl">
          <Container className="text-white">
            <div className="max-w-3xl">
              {socialProof ? (
                <div className="mb-8">
                  <GoogleRating color="white" />
                </div>
              ) : null}

              <Eyebrow className="mb-4" text={eyebrow} />
              <Heading className="mb-4" level={1} size="4xl">
                {title}
              </Heading>
              <Subtitle color="white" size="medium">
                {subtitle}
              </Subtitle>
            </div>
          </Container>
        </div>
        <div>
          <StoryblokImage
            priority
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
