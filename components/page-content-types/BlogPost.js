import Link from "next/link";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

import BlogCard from "components/blog/BlogCard";
import Badge from "components/common/Badge";
import Breadcrumbs from "components/common/Breadcrumbs";
import Container from "components/common/Container";
import { Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const PatientStory = ({ articles = [], blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <div className="my-20">
      <Container>
        <div className="mb-6">
          <Breadcrumbs
            data={[
              { name: "Blog", href: "/patient-stories/" },
              { name: blok.category?.content?.name, href: `/${blok.category?.full_slug}` },
              { name: blok.title, current: true },
            ]}
          />
        </div>
        <div className="md:border-t md:border-stroke-light md:py-12">
          <div className="grid items-start md:grid-cols-12">
            <div className="order-2 md:sticky md:top-8 md:order-1 md:col-span-3 md:mr-12">
              <h2 className="text-large mb-12 font-semibold">Related Posts</h2>

              <div className="grid grid-cols-1 gap-12">
                {articles &&
                  articles?.map((item) => {
                    return (
                      <BlogCard
                        className="border-b border-stroke-light pb-8"
                        hideImage
                        key={item.id}
                        data={item}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-9 md:border-l md:border-stroke-light md:pl-12">
              <div className="mb-2 flex items-center gap-4 lg:mb-7">
                <StoryblokLink link={blok.category} className="duration-75 hover:brightness-95">
                  <Badge>{blok.category?.content?.name}</Badge>
                </StoryblokLink>

                <span className="text-smaller font-semibold">{blok.read_time} min read</span>
              </div>
              <Heading className="mb-5 lg:mb-12" size="3xl" level={1}>
                {blok.title}
              </Heading>

              <StoryblokImage
                className="aspect-[16/9] w-full rounded object-cover"
                image={blok.image}
              />
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
