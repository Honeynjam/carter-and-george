import { useEffect } from "react";

import { useRouter } from "next/router";

import Cookies from "js-cookie";

const UTM_KEYS = ["utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term", "utm_id"];

export const useCookieTracking = () => {
  const router = useRouter();
  useEffect(() => {
    Object.entries(router.query).map((item) => {
      const key = item[0];
      const value = item[1];

      // Set UTM cookies
      if (typeof value === "string" && typeof key === "string" && UTM_KEYS.includes(key)) {
        Cookies.set(key, value, {
          expires: 30,
          secure: true,
          domain: process.env.NODE_ENV === "production" ? "arcadia.com" : undefined,
        });
      }

      return null;
    });

    // delete any outdated cookies which are not present in the current URL with other utm params
    const urlHasUTMParam = Object.keys(router.query).some((key) => UTM_KEYS.includes(key));
    if (urlHasUTMParam) {
      // see which utm keys are not present in the URL and delete them
      const missingUTMKeys = UTM_KEYS.filter((key) => !Object.keys(router.query).includes(key));
      missingUTMKeys.map((key) => {
        Cookies.remove(key);

        return null;
      });
    }
  }, [router.query]);
};
