import { storyblokEditable } from "@storyblok/react";
import { AdvancedMarker, Map, useApiIsLoaded } from "@vis.gl/react-google-maps";

import Container from "components/common/Container";

export const MapComponent = ({ lat = 53.483601620042315, lng = -2.2366950875805354 }) => {
  const apiIsLoaded = useApiIsLoaded();

  const containerStyle = {
    width: "100%",
    height: "460px",
    borderRadius: "3",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  if (apiIsLoaded) {
    return (
      <Map style={containerStyle} defaultCenter={center} defaultZoom={15} mapId="DEMO_MAP_ID">
        <AdvancedMarker position={center} />
      </Map>
    );
  }
};

const LocationMap = ({ blok, location }) => {
  return (
    <div className="section-spacing-m relative" {...storyblokEditable(blok)}>
      <div className="absolute top-[-150px] opacity-0" id="google-map" />
      <Container>
        <MapComponent
          lat={Number(location.location_lat)}
          lng={Number(location.location_longitude)}
        />
      </Container>
    </div>
  );
};

export default LocationMap;
