import React from "react";

import { storyblokEditable } from "@storyblok/react";

import BlogGrid from "components/blog/BlogGrid";
import Container from "components/common/Container";

const BlogCards = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="relative overflow-hidden py-side-padding md:py-xl lg:py-2xl">
        <Container>
          <BlogGrid
            headerData={{ title: blok.title, subtitle: blok.subtitle, href: "/blog/" }}
            data={blok.blog_posts}
          />
        </Container>
      </div>
    </section>
  );
};

export default BlogCards;
