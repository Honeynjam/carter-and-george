import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Location = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    {blok.hero?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} location={blok} key={nestedBlok._uid} />
    ))}

    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} location={blok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Location;
