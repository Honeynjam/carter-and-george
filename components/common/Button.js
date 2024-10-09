import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import cn from "classnames";
import Cookies from "js-cookie";

const UTM_KEYS = ["utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term", "utm_id"];

const Button = ({
  color = "black",
  outline = false,
  children,
  href = null,
  className = "",
  ...props
}) => {
  const [finalHref, setFinalHref] = useState(href);
  const router = useRouter();

  useEffect(() => {
    if (href?.includes("nookal.com")) {
      const url = new URL(href);
      const utmParams = url.searchParams;

      const query = router.query;
      Object.keys(query).forEach((key) => {
        if (key.startsWith("utm_")) {
          utmParams.append(key, query[key]);
        }
      });

      // Check cookies for all UTM keys
      UTM_KEYS.forEach((key) => {
        const value = Cookies.get(key);
        if (value) {
          utmParams.append(key, value);
        }
      });

      // Check if utm_source and utm_medium are empty and populate if referrer is from a search engine
      if (!utmParams.get("utm_source") && !utmParams.get("utm_medium")) {
        const referrer = document.referrer;

        const searchEngineDomains = ["google.com", "bing.com", "yahoo.com", "duckduckgo.com"];
        const isSearchEngineReferrer = searchEngineDomains.some((domain) =>
          referrer.includes(domain)
        );
        if (isSearchEngineReferrer) {
          const searchEngine = searchEngineDomains.find((domain) => referrer.includes(domain));
          utmParams.append("utm_source", searchEngine); // Using the actual search engine domain
          utmParams.append("utm_medium", "organic");
        } else {
          utmParams.append("utm_source", "direct");
          utmParams.append("utm_medium", "none");
        }
      }
      console.log(utmParams);
      setFinalHref(href + (utmParams.toString() ? "?" + utmParams.toString() : ""));
    }
  }, [href, router.query]);

  const classNames = cn(
    "rounded-[1px] group justify-center text-button inline-flex items-center gap-2.5 py-3 px-6 font-medium font-petite-caps duration-300",
    className,
    {
      "text-white bg-black border border-transparent hover:bg-black/90":
        color === "black" && !outline,
      "text-black bg-white border border-transparent hover:bg-white/90":
        color === "white" && !outline,
      "text-black bg-transparent border border-black": outline && color === "black",
      "text-white bg-transparent border border-white": outline && color === "white",
    }
  );
  if (finalHref) {
    return (
      <Link className={classNames} href={finalHref} {...props}>
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition-transform duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-6">
            {children}
          </div>
          <div
            aria-hidden={true}
            className="absolute translate-y-[125%] skew-y-6 transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
          >
            {children}
          </div>
        </span>
      </Link>
    );
  } else {
    return (
      <button className={classNames} {...props}>
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-6">
            {children}
          </div>
          <div
            aria-hidden={true}
            className="absolute translate-y-[125%] skew-y-6 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
          >
            {children}
          </div>
        </span>
      </button>
    );
  }
};

export default Button;
