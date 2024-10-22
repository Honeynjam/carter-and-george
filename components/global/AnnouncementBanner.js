import { useGlobalContext } from "contexts/globalContext";

import Container from "components/common/Container";
import StoryblokLink from "components/storyblok/StoryblokLink";

const AnnouncementBanner = () => {
  const { global } = useGlobalContext();

  if (global.banner_active) {
    return (
      <StoryblokLink
        link={global.banner_link}
        className="relative z-50 block border-b border-stroke-light bg-stone py-5 duration-150 hover:brightness-95"
      >
        <Container>
          <p className="text-center text-small font-semibold">{global.banner_text}</p>
        </Container>
      </StoryblokLink>
    );
  }

  return null;
};

export default AnnouncementBanner;
