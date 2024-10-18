import Head from "next/head";
import { useRouter } from "next/router";

const settings = {
  titleEnding: "| Carter & George",
  company: "Carter & George",
  author: "Carter & George",
  language: "en-gb",
  themeColor: "#00A9E0",
  baseUrl: "https://www.carterandgeorge.co.uk/",
};

const defaultMeta = {
  title:
    "Physiotherapy practice, offering elite physiotherapy treatment in a state of the art environment.",
  description:
    "The Carter & George Practice is an elite healthcare facility, with the aim to treat everyone as if they were a professional athlete.",
  image: "https://www.carterandgeorge.co.uk/og_image.webp",
};

const getUrl = (path) => `${settings.baseUrl}${path}`;

const Seo = ({
  title,
  description,
  socialTitle,
  socialDescription,
  socialImage,
  noindex = false,
}) => {
  const router = useRouter();

  const finalTitle = `${title || defaultMeta.title} ${settings.titleEnding}`;
  const socialTitleTag = socialTitle ? `${socialTitle} ${settings.titleEnding}` : finalTitle;

  return (
    <>
      <Head>
        <title>{finalTitle}</title>

        {/* Search engines */}
        <meta name="title" content={finalTitle} />
        <meta name="description" content={description || defaultMeta.description} />

        {/* Open Graph */}
        <meta property="og:url" content={getUrl(router.asPath)} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={socialTitleTag} />
        <meta
          property="og:description"
          content={socialDescription || description || defaultMeta.description}
        />
        <meta property="og:image" content={socialImage || defaultMeta.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialTitleTag} />
        <meta
          name="twitter:description"
          content={socialDescription || description || defaultMeta.description}
        />

        <meta name="twitter:image" content={socialImage || defaultMeta.image} />

        {/* Technical tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={getUrl(router.asPath)} />
        <meta name="theme-color" content={settings.themeColor} />
        <meta name="publisher" content={settings.company} />
        <meta name="copyright" content={settings.company} />
        <meta name="author" content={settings.author || settings.company} />

        {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      </Head>
    </>
  );
};

export default Seo;
