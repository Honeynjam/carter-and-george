import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

import BlogCard from "components/blog/BlogCard";
import Badge from "components/common/Badge";
import Breadcrumbs from "components/common/Breadcrumbs";
import Container from "components/common/Container";
import StoryblokImage from "components/storyblok/StoryblokImage";

const PatientStory = ({ articles, blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <div className="my-20">
      <Container>
        <div className="mb-6">
          <Breadcrumbs
            data={[
              { name: "Blog", href: "/patient-stories/" },
              { name: blok.category.content.name, href: `/${blok.category.full_slug}` },
              { name: blok.title, current: true },
            ]}
          />
        </div>
        <div className="border-stroke-light border-t py-12">
          <div className="grid grid-cols-12 items-start">
            <div className="sticky top-8 col-span-3 mr-12">
              <h2 className="text-large mb-12 font-semibold">Related Posts</h2>
              <div className="grid grid-cols-1 gap-12">
                {articles.map((item) => {
                  return (
                    <BlogCard
                      className="border-stroke-light border-b pb-8"
                      hideImage
                      key={item.id}
                      data={item}
                    />
                  );
                })}
              </div>
            </div>
            <div className="border-stroke-light col-span-9 border-l pl-12">
              <div className="mb-7 flex items-center gap-4">
                <Badge className="">{blok.category.content.name}</Badge>
                <span className="text-smaller font-semibold">{blok.read_time} min read</span>
              </div>

              <h1 className="mb-12 text-3xl font-medium">{blok.title}</h1>
              <StoryblokImage className="rounded" image={blok.image} />
              <div className="mt-14">
                {blok.body?.map((nestedBlok) => (
                  <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      {blok.bottom_sections?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  </div>
);

export default PatientStory;
