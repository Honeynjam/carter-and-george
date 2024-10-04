import Link from "next/link";

import { linkResolver } from "utils/linkResolver";

const StoryblokLink = ({ link, children, className = "", analytics = {} }) => {
  const handleAnalytics = () => {
    // todo
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const id = linkResolver(link).substring(1);
    const element = document.getElementById(id);
    const yOffset = -100;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      return null;
    }
  };

  const isExternal = linkResolver(link).indexOf(`http`) >= 0 || link?.target === "_blank";
  const isAnchor = linkResolver(link).startsWith(`#`);

  return (
    <Link
      onClick={(e) => {
        handleAnalytics();
        if (isAnchor) {
          handleSmoothScroll(e);
        }
      }}
      href={linkResolver(link)}
      target={isExternal ? "_blank" : null}
      className={className}
    >
      {children}
    </Link>
  );
};

export default StoryblokLink;
