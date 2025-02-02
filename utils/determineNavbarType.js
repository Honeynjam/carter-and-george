export const determineNavbarType = (story) => {
  // Edge case for Location hero + image background layout
  if (story.content.component === "location") {
    if (story.content?.hero?.length > 0) {
      const hero = story.content.hero[0];

      if (["location_hero"].includes(hero.component)) {
        if (hero.layout_type == "image") {
          return "blur";
        }
      }
    }
  }

  // some page custom types will have white header by default
  if (
    [
      "patient_story",
      "leader_profile",
      "location",
      "faq_page",
      "contact_page",
      "location_search_page",
      "job_position",
    ].includes(story.content.component)
  ) {
    return "white";
  }

  // Check hero blok
  if (story.content?.hero?.length > 0) {
    const hero = story.content.hero[0];

    if (["hero", "hero_video"].includes(hero.component)) {
      return "blur";
    }

    if (["hero_two_cols"].includes(hero.component)) {
      return "white";
    }
  }
};
