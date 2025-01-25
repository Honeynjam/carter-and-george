import { Clock } from "@phosphor-icons/react/dist/ssr/Clock";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { linkResolver } from "utils/linkResolver";

import GoogleRating from "components/base/GoogleRating";
import Button from "components/common/Button";
import Container from "components/common/Container";
import TextButton from "components/common/TextButton";
import { Heading, Subtitle } from "components/common/Typography";

const OpeningHour = ({ day, time }) => {
  return (
    <div className="flex items-center justify-between">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

const LocationHero = ({ blok, location }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="my-20">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <GoogleRating color="blue" rating={location.google_score} />
              <Heading className="mb-2 mt-6" size="3xl" level={1}>
                {blok.title || location.clinic_name}
              </Heading>

              <Subtitle as="div" className="prose max-w-none" color="grey" size="medium">
                {render(blok.subtitle)}
              </Subtitle>

              <div className="mt-4">
                <div className="flex items-center gap-4">
                  <Phone size={20} weight="bold" />
                  <p>{location.phone_number}</p>
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
