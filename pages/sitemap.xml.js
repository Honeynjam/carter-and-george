import { renderToStaticMarkup } from "react-dom/server";

import { nonPageFolders } from "config/storyblok";

import { queryAllPages } from "utils/queryAllPages";

const SitemapIndex = () => null;

const includePage = (page) => {
  if (["quotes", "quote_media"].includes(page.content.component)) {
    return false;
  }

  return !(page.content.seo_index === "false");
};

const Sitemap = ({ pages }) => {
  const origin = "https://www.carterandgeorge.co.uk/";

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {pages.map((page, index) => {
        const lastModified = new Date(page.published_at).toISOString();

        if (page.full_slug) {
          const path = page.full_slug === "home" ? "" : page.full_slug?.replace(/\/?$/, "/");
          const url = origin + path;
          if (includePage(page)) {
            return (
              <url key={index}>
                <loc>{url}</loc>
                <lastmod>{lastModified}</lastmod>
              </url>
            );
          }
        }
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
  const data = await queryAllPages();
  const pages = data.filter((story) => !nonPageFolders.some((v) => story.full_slug.includes(v)));

  res.setHeader("Content-Type", "text/xml");
  res.write(renderToStaticMarkup(<Sitemap pages={pages} />));
  res.end();

  return {
    props: {},
  };
};

export default SitemapIndex;
