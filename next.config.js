const { createSecureHeaders } = require("next-secure-headers");
const redirects = require("./config/redirects");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const config = {
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["a.storyblok.com", "s3.amazonaws.com"],
  },
  // async headers() {
  //   const secureHeaders = createSecureHeaders({
  //     forceHTTPSRedirect: [true, { includeSubDomains: true, preload: true }],
  //     frameGuard: false,
  //     xssProtection: "block-rendering",
  //     referrerPolicy: "strict-origin-when-cross-origin",
  //     nosniff: "nosniff",
  //   }).concat([
  //     {
  //       key: "Permissions-Policy",
  //       value: "camera=(), microphone=(), geolocation=()",
  //     },
  //   ]);

  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: secureHeaders,
  //     },
  //     // In order to match the root path (`/`), we need to specify `/:path*` as
  //     // well. See also:
  //     // - https://github.com/jagaapple/next-secure-headers/tree/v2.2.0#use-createsecureheaders-in-nextconfigjs-recommended
  //     // - https://github.com/vercel/next.js/issues/25243.
  //     {
  //       source: "/:path*",
  //       headers: secureHeaders,
  //     },
  //   ];
  // },
  async redirects() {
    return redirects;
  },
};

module.exports = withBundleAnalyzer(config);
