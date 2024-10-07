import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { NavigationArrow } from "@phosphor-icons/react";
import { GoogleMap, LoadScript, Marker, useLoadScript } from "@react-google-maps/api";
import { getStoryblokApi, useStoryblokState } from "@storyblok/react";

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

const libraries = ["places", "geometry"];

export default function Home({ preview, story, locations, globalDocs }) {
  story = useStoryblokState(story);
  // console.log(locations);

  const router = useRouter();
  const { postcode } = router.query;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCQm4y_CgaoI1XKXJxTpVY3B1EEEC7G4UY",
    libraries,
  });

  const containerStyle = {
    width: "100%",
    height: "460px",
    borderRadius: "3",
  };

  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [closestLocations, setClosestLocations] = useState([]);

  useEffect(() => {
    if (!isLoaded || loadError) return;
    console.log(postcode);

    if (postcode) {
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
          setClosestLocations(distances.slice(0, 3)); // Get the closest 3 locations
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }, [postcode, isLoaded, loadError]);
  console.log(closestLocations);
  return (
    <>
      <Seo
        title={story.content.seo_title}
        description={story.content.seo_description}
        socialTitle={story.content.seo_og_title}
        socialDescription={story.content.seo_og_description}
        socialImage={story.content.seo_og_image}
      />
      <Layout navbarType={determineNavbarType(story)} {...globalDocs} preview={preview}>
        <div className="section-spacing-m">
          <Container>
            <Heading level={1} size="3xl">
              {story.content.title}
            </Heading>
            <PostcodeForm className="mt-6" onWhite hideLabel buttonText="Search" />
            {postcode && (
              <div className="mt-2xl">
                <div className="grid items-start gap-20 md:grid-cols-2">
                  <div>
                    <Heading level={3} size="large">
                      {closestLocations.length} Practices
                    </Heading>
                    <p className="text-smaller">found in your area</p>
                    <Hr className="mb-6 mt-4" />
                    <div className="grid grid-cols-1 gap-12">
                      {closestLocations.map((location) => {
                        if (location?.content) {
                          return (
                            <div key={location.content.uuid} className="">
                              <StoryblokImage image={location.content.image} />
                              <div className="bg-stone p-6">
                                <div className="flex items-start justify-between gap-20">
                                  <div className="flex-1">
                                    <Heading className="mb-2" level={4} size="large">
                                      {location.content.clinic_name}
                                    </Heading>
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
                                        <span>{item.name}</span>
                                        {idx < location.content.services.length - 1 ? (
                                          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                                        ) : null}
                                      </React.Fragment>
                                    );
                                  })}
                                </div>

                                <div className="mt-10 flex items-center gap-4">
                                  <Button outline href={linkResolver(location)}>
                                    Find out more
                                  </Button>

                                  <TextButton
                                    target="_blank"
                                    href={linkResolver(location.content.google_directions)}
                                  >
                                    Get Directions
                                  </TextButton>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  <div className="sticky top-8">
                    {isLoaded ? (
                      <GoogleMap center={coordinates} mapContainerStyle={containerStyle} zoom={9}>
                        {closestLocations.map((item) => {
                          if (item?.content) {
                            const center = {
                              lat: Number(item.content.location_lat),
                              lng: Number(item.content.location_longitude),
                            };

                            return <Marker key={item.content._uid} position={center} />;
                          }

                          return null;
                        })}
                      </GoogleMap>
                    ) : null}
                  </div>
                </div>
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
      // version: preview ? "draft" : "published",
      version: "draft",
    });
    data = doc.data;
  } catch (error) {
    if (JSON.parse(error).status === 404) {
      return { notFound: true };
    }
  }

  const { data: locations } = await storyblokApi.get("cdn/stories/", {
    // version: preview ? "draft" : "published",
    version: "draft",
    starts_with: "locations",
    is_startpage: 0,
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
