import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { getStoryblokApi, useStoryblokState } from "@storyblok/react";

import { determineNavbarType } from "utils/determineNavbarType";
import getGlobalDocs from "utils/getGlobalDocs";

import Seo from "components/base/Seo";
import Container from "components/common/Container";
import { Heading, Subtitle } from "components/common/Typography";
import Layout from "components/global/Layout";

export default function Home({ preview, story, locations, globalDocs }) {
  story = useStoryblokState(story);
  console.log(locations);

  const containerStyle = {
    width: "100%",
    height: "460px",
    borderRadius: "3",
  };

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
            <div className="mt-2xl">
              <LoadScript googleMapsApiKey="AIzaSyCQm4y_CgaoI1XKXJxTpVY3B1EEEC7G4UY">
                <GoogleMap
                  center={{
                    lat: 53.483601620042315,
                    lng: -2.2366950875805354,
                  }}
                  mapContainerStyle={containerStyle}
                  zoom={5}
                >
                  {locations.map((item) => {
                    const center = {
                      lat: Number(item.content.location_lat),
                      lng: Number(item.content.location_longitude),
                    };

                    return <Marker key={item.content._uid} position={center} />;
                  })}
                </GoogleMap>
              </LoadScript>
            </div>
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
