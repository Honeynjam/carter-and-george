import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Page = ({ blok }) => (
  <div className="my-40" {...storyblokEditable(blok)} key={blok._uid}>
    <h2>page wrapper</h2>
    {blok.hero?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Page;
