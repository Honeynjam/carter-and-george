import React from "react";

import { storyblokEditable } from "@storyblok/react";

import BlogGrid from "components/blog/BlogGrid";
import Container from "components/common/Container";

const BlogCards = ({ blok }) => {
  return (
    <section className="section-spacing-m relative overflow-hidden" {...storyblokEditable(blok)}>
      <Container>
        <BlogGrid
          headerData={{ title: blok.title, subtitle: blok.subtitle, href: "/blog/" }}
          data={blok.blog_posts}
        />
      </Container>
    </section>
  );
};

export default BlogCards;
