export const determineNavbarType = (story) => {
  if (story.content.component === "patient_story") {
    return "white";
  }

  // Check hero blok
  if (story.content.hero.length > 0) {
    const hero = story.content.hero[0];

    if (["hero"].includes(hero.component)) {
      return "blur";
    }
  }
};
