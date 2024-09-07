import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Page = ({ blok }) => (
  <div className="my-40" {...storyblokEditable(blok)} key={blok._uid}>
    <h1>{blok.title}</h1>
    {blok.hero?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Page;
