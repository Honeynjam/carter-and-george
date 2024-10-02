import { CaretRight, Check, Clock, MapPin, Phone } from "@phosphor-icons/react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

import { linkResolver } from "utils/linkResolver";

import GoogleRating from "components/base/GoogleRating";
import Button from "components/common/Button";
import Container from "components/common/Container";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokLink from "components/storyblok/StoryblokLink";

export const MapComponent = ({ lat = 53.483601620042315, lng = -2.2366950875805354 }) => {
  const containerStyle = {
    width: "100%",
    height: "460px",
    borderRadius: "3",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCQm4y_CgaoI1XKXJxTpVY3B1EEEC7G4UY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

const OpeningHour = ({ day, time }) => {
  return (
    <div className="flex items-center justify-between">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};
const Location = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <div className="my-20">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <GoogleRating color="blue" rating={blok.google_score} />
            <Heading className="mb-2 mt-6" size="3xl" level={1}>
              {blok.clinic_name}
            </Heading>
            <Subtitle color="grey" size="medium">
              {blok.subtitle}
            </Subtitle>

            <div className="mt-4">
              <div className="flex items-center gap-4">
                <Phone size={20} weight="bold" />
                <p>{blok.phone_number}</p>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <MapPin size={20} weight="bold" />
                <p>{blok.address}</p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <Button target="_blank" href={linkResolver(blok.nookal_link)}>
                Book now
              </Button>
              {/* TODO - turn into a component */}
              <StoryblokLink
                className="group flex items-center gap-2 text-button font-medium uppercase"
                link={blok.google_directions}
              >
                <span>Get Directions</span>
                <CaretRight className="duration-75 group-hover:translate-x-0.5" />
              </StoryblokLink>
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-5">
              <Clock size={20} weight="bold" />
              <Heading level={2} size="medium">
                Opening Hours
              </Heading>
            </div>
            <div className="ml-10 grid grid-cols-1 gap-2.5">
              <OpeningHour day="Monday" time={blok.monday} />
              <OpeningHour day="Tuesday" time={blok.tuesday} />
              <OpeningHour day="Wednesday" time={blok.wednesday} />
              <OpeningHour day="Thursday" time={blok.thursday} />
              <OpeningHour day="Friday" time={blok.friday} />
              <OpeningHour day="Saturday" time={blok.saturday} />
              <OpeningHour day="Sunday" time={blok.sunday} />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <MapComponent lat={Number(blok.location_lat)} lng={Number(blok.location_longitude)} />
        </div>
      </Container>
    </div>
    <div className="my-xl">
      <Container>
        <Eyebrow text={"Our Services"} />
        <Heading className="mt-6" size="3xl" level={2}>
          Services in {blok.clinic_name}
        </Heading>
        <hr className="my-6 text-stroke-light" />
        <div className="grid gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {blok.services.map((service) => {
            return (
              <StoryblokLink link={service} className="flex items-center" key={service._uid}>
                <div className="mr-4 rounded-full bg-[#E9F0F2] p-1.5">
                  <Check className="text-blue" weight="bold" />
                </div>
                <p className="text-md">{service.content.name}</p>
                <CaretRight className="ml-2" size={16} />
              </StoryblokLink>
            );
          })}
        </div>
      </Container>
    </div>
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Location;
