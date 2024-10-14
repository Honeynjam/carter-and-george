import React from "react";

import { storyblokEditable } from "@storyblok/react";

import { useGlobalContext } from "contexts/globalContext";

import BlogGrid from "components/blog/BlogGrid";
import Container from "components/common/Container";

const BlogCards = ({ blok }) => {
  const { latestArticles } = useGlobalContext();

  return (
    <section className="section-spacing-m relative overflow-hidden" {...storyblokEditable(blok)}>
      <Container>
        <BlogGrid
          headerData={{ title: blok.title, subtitle: blok.subtitle, href: "/blog/" }}
          data={blok.data_source === "latest" ? latestArticles : blok.blog_posts}
        />
      </Container>
    </section>
  );
};

export default BlogCards;
