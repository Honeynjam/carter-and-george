import { Clock } from "@phosphor-icons/react/dist/ssr/Clock";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { render } from "storyblok-rich-text-react-renderer";

import { linkResolver } from "utils/linkResolver";

import GoogleRating from "components/base/GoogleRating";
import Button from "components/common/Button";
import Container from "components/common/Container";
import TextButton from "components/common/TextButton";
import { Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const OpeningHour = ({ day, time }) => {
  return (
    <div className="flex items-center justify-between">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

const LocationHero = ({ blok, location }) => {
  const isImageLayout = blok.layout_type === "image";

  return (
    <section {...storyblokEditable(blok)}>
      <div
        className={cn("", {
          "my-20": !isImageLayout,
          "relative z-10 mt-[-103px]": isImageLayout,
        })}
      >
        {isImageLayout ? (
          <div className="relative z-10 mb-12 h-[400px] overflow-hidden lg:mb-20 lg:h-[500px]">
            <StoryblokImage
              fill
              priority={true}
              image={blok.image}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-20 h-full w-full bg-black bg-opacity-60"></div>
            <div className="relative z-30 flex h-full items-end py-12 text-white">
              <Container>
                <GoogleRating color="white" rating={location.google_score} />
                <Heading className="mb-2 mt-6 max-w-2xl" size="3xl" level={1}>
                  {blok.title || location.clinic_name}
                </Heading>
                <Subtitle as="div" className="prose max-w-none" color="white" size="medium">
                  {render(blok.subtitle)}
                </Subtitle>
              </Container>
            </div>
          </div>
        ) : null}

        <Container>
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              {!isImageLayout ? (
                <>
                  <GoogleRating color="blue" rating={location.google_score} />
                  <Heading className="mb-2 mt-6" size="3xl" level={1}>
                    {blok.title || location.clinic_name}
                  </Heading>
                  <Subtitle as="div" className="prose max-w-none" color="grey" size="medium">
                    {render(blok.subtitle)}
                  </Subtitle>
                </>
              ) : null}

              <div className="mt-4">
                <div className="flex items-center gap-4">
                  <Phone size={20} weight="bold" />
                  <a
                    href={`tel:${location.phone_number.replace(/\D/g, "")}`}
                    className="hover:underline"
                  >
                    {location.phone_number}
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <MapPin size={20} weight="bold" />
                  <p>{location.address}</p>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <Button target="_blank" href={linkResolver(location.nookal_link)}>
                  Book now
                </Button>
                {location.google_directions.cached_url ? (
                  <TextButton href={linkResolver(location.google_directions)}>
                    Get Directions
                  </TextButton>
                ) : null}
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-5">
                <Clock size={20} weight="bold" />
                <Heading level={2} size="medium">
                  Opening Hours
                </Heading>
              </div>
              <div {...storyblokEditable(location)} className="ml-10 grid grid-cols-1 gap-2.5">
                <OpeningHour day="Monday" time={location.monday} />
                <OpeningHour day="Tuesday" time={location.tuesday} />
                <OpeningHour day="Wednesday" time={location.wednesday} />
                <OpeningHour day="Thursday" time={location.thursday} />
                <OpeningHour day="Friday" time={location.friday} />
                <OpeningHour day="Saturday" time={location.saturday} />
                <OpeningHour day="Sunday" time={location.sunday} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default LocationHero;
