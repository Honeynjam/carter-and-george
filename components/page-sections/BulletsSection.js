import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";

const BulletsSection = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <Container>Bullets Section - TODO</Container>
    </div>
  );
};

export default BulletsSection;
