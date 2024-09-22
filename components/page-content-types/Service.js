import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Service = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    {blok.hero?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Service;
