export const determineNavbarType = (story) => {
  if (story.content.component === "patient_story") {
    return "white";
  }

  if (story.content.component === "leader_profile") {
    return "white";
  }

  if (story.content.component === "location") {
    return "white";
  }

  if (story.content.component === "faq_page") {
    return "white";
  }

  // Check hero blok
  if (story.content?.hero?.length > 0) {
    const hero = story.content.hero[0];

    if (["hero"].includes(hero.component)) {
      return "blur";
    }

    if (["hero_two_cols"].includes(hero.component)) {
      return "white";
    }
  }
};
