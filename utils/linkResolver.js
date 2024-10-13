export const linkResolver = (link) => {
  if (link?.linktype === "email") {
    return `mailto:${link.email}`;
  }

  if (link?.full_slug) {
    return `/${link?.full_slug}`;
  }

  if (!link?.cached_url) {
    return "#";
  }

  if (link.anchor) {
    return `${link?.cached_url}#${link.anchor}`;
  }

  // support hash links within the same page
  if (link?.cached_url?.startsWith("#")) {
    return link?.cached_url;
  }

  if (link.cached_url.includes("tel:")) {
    return link.cached_url;
  }

  if (link?.cached_url?.includes("http")) {
    return `${link?.cached_url}`;
  } else {
    return `/${link?.cached_url}`;
  }
};
