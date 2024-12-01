import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { NavigationArrow } from "@phosphor-icons/react/dist/ssr/NavigationArrow";
import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import { AdvancedMarker, Map, useApiIsLoaded, useMapsLibrary } from "@vis.gl/react-google-maps";

import { determineNavbarType } from "utils/determineNavbarType";
import getGlobalDocs from "utils/getGlobalDocs";
import { linkResolver } from "utils/linkResolver";

import Seo from "components/base/Seo";
import Button from "components/common/Button";
import Container from "components/common/Container";
import Hr from "components/common/Hr";
import PostcodeForm from "components/common/PostcodeForm";
import TextButton from "components/common/TextButton";
import { Heading } from "components/common/Typography";
import Layout from "components/global/Layout";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const LocationCard = ({ location }) => {
  return (
    <div key={location.content._uid} className="overflow-hidden rounded">
      <StoryblokImage className="aspect-[16/9] object-cover" image={location.content.image} />
      <div className="bg-stone p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:gap-20">
          <div className="flex-1">
            <StoryblokLink className="duration-150 hover:opacity-75" link={location}>
              <Heading className="mb-2" level={4} size="large">
                {location.content.clinic_name}
              </Heading>
            </StoryblokLink>
            <p>{location.content.address}</p>
          </div>
          <div className="flex items-center gap-2 text-blue">
            <NavigationArrow className="rotate-90" weight="bold" />
            {(location.distance * 0.000621371).toFixed(1)} miles
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-gray-secondary">
          {location.content.services.map((item, idx) => {
            return (
              <React.Fragment key={item._uid}>
                <span>{item.content.name}</span>
                {idx < location.content.services.length - 1 ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                ) : null}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          <Button outline href={`${location.full_slug}`}>
            Find out more
          </Button>
          {location.content.google_directions.cached_url ? (
            <TextButton
              className="self-center"
              target="_blank"
              href={linkResolver(location.content.google_directions)}
            >
              Get Directions
            </TextButton>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default function FindYourLocationPage({ preview, story, locations, globalDocs }) {
  story = useStoryblokState(story);

  const apiIsLoaded = useApiIsLoaded();
  useMapsLibrary("geometry");
  const router = useRouter();
  const { postcode } = router.query;

  const containerStyle = {
    width: "100%",
    height: "460px",
    borderRadius: "3",
  };

  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [closestLocations, setClosestLocations] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (postcode && apiIsLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: postcode }, (results, status) => {
        if (status === "OK") {
          setCoordinates({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });

          // Calculate distances and sort locations
          const distances = locations.map((location) => {
            const lat2 = Number(location.content.location_lat);
            const lng2 = Number(location.content.location_longitude);

            const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
              new window.google.maps.LatLng(
                results[0].geometry.location.lat(),
                results[0].geometry.location.lng()
              ),
              new window.google.maps.LatLng(lat2, lng2)
            );
            return { ...location, distance };
          });
          distances.sort((a, b) => a.distance - b.distance);
          const filteredLocations = distances.filter(
            (location) => location.distance <= Number(location.content.location_distance) * 1609.34
          ); // Filter locations within X miles
          setClosestLocations(filteredLocations.slice(0, 3)); // Get the closest 3 locations within 50 miles
          setLoaded(true);
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }, [postcode, apiIsLoaded, locations]);

  return (
    <>
      <Seo
        title={story.content.seo_title}
        description={story.content.seo_description}
        socialTitle={story.content.seo_og_title}
        socialDescription={story.content.seo_og_description}
        socialImage={story.content.seo_og_image?.filename}
      />
      <Layout navbarType={determineNavbarType(story)} {...globalDocs} preview={preview}>
        <div className="section-spacing-m">
          <Container>
            <Heading level={1} size="3xl">
              {story.content.title}
            </Heading>
            <PostcodeForm
              defaultPostcode={postcode}
              className="mt-6"
              onWhite
              hideLabel
              buttonText="Search"
            />
            {postcode && loaded && closestLocations.length === 0 ? (
              <div className="mt-20">
                <Heading level={2} size="2xl">
                  Sorry, there are no practices near you.
                </Heading>
              </div>
            ) : null}
            {postcode && loaded && closestLocations.length > 0 && (
              <div>
                {closestLocations.length > 0 ? (
                  <div className="mt-2xl">
                    <div className="grid items-start gap-10 md:grid-cols-2 md:gap-20">
                      <div>
                        <Heading level={3} size="large">
                          {closestLocations.length} Practices
                        </Heading>
                        <p className="text-smaller">found in your area</p>
                        <Hr className="mb-6 mt-4" />

                        <div className="grid grid-cols-1 gap-6 md:gap-12">
                          {closestLocations.map((location) => {
                            if (location?.content) {
                              return <LocationCard key={location.uuid} location={location} />;
                            }
                            return null;
                          })}
                        </div>
                      </div>
                      <div className="sticky top-32">
                        {apiIsLoaded && coordinates.lat !== 0 && coordinates.lng !== 0 ? (
                          <Map
                            style={containerStyle}
                            center={coordinates}
                            defaultZoom={9}
                            mapId="DEMO_MAP_ID"
                          >
                            {closestLocations.map((item) => {
                              if (item?.content) {
                                const position = {
                                  lat: Number(item.content.location_lat),
                                  lng: Number(item.content.location_longitude),
                                };

                                return (
                                  <AdvancedMarker
                                    clickable
                                    onClick={() => router.push({ pathname: linkResolver(item) })}
                                    key={item.content._uid}
                                    position={position}
                                  />
                                );
                              }

                              return null;
                            })}
                          </Map>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const storyblokApi = getStoryblokApi();

  let data = null;
  try {
    const doc = await storyblokApi.get(`cdn/stories/find-your-practice`, {
      version: preview ? "draft" : "published",
    });
    data = doc.data;
  } catch (error) {
    if (JSON.parse(error).status === 404) {
      return { notFound: true };
    }
  }

  const { data: locations } = await storyblokApi.get("cdn/stories/", {
    version: preview ? "draft" : "published",
    starts_with: "locations",
    is_startpage: 0,
    excluding_fields: "hero,body",
    resolve_relations: ["location.services"],
  });

  const globalDocs = await getGlobalDocs(preview);

  return {
    props: {
      story: data ? data.story : false,
      globalDocs,
      locations: locations.stories,
      preview,
    },
  };
}
