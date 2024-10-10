import dynamic from "next/dynamic";

import { apiPlugin, storyblokInit } from "@storyblok/react";

import BlogPost from "../page-content-types/BlogPost";
import FaqPage from "../page-content-types/FaqPage";
import LeaderProfile from "../page-content-types/LeaderProfile";
import Location from "../page-content-types/Location";
import Page from "../page-content-types/Page";
import PatientStory from "../page-content-types/PatientStory";
import Service from "../page-content-types/Service";

import RichText from "components/content-sections/RichText";
import Video from "components/content-sections/Video";
import HeroBlok from "components/hero-sections/Hero";
import HeroTwoCols from "components/hero-sections/HeroTwoCols";
import HeroVideo from "components/hero-sections/HeroVideo";
import ApproachSection from "components/page-sections/ApproachSection";
import BlogCards from "components/page-sections/BlogCards";
import BulletsSection from "components/page-sections/BulletsSection";
import ContentSection from "components/page-sections/ContentSection";
import CtaContained from "components/page-sections/CtaContained";
import CtaSection from "components/page-sections/CtaSection";
import DownloadForm from "components/page-sections/DownloadForm";
import FaqSection from "components/page-sections/FaqSection";
import FullWidthImage from "components/page-sections/FullWidthImage";
import Grid from "components/page-sections/Grid";
import GridWithVideo from "components/page-sections/GridWithVideo";
import ImageAccordion from "components/page-sections/ImageAccordion";
import ImageBulletList from "components/page-sections/ImageBulletList";
import LeadershipCards from "components/page-sections/LeadershipCards";
import LocationPricing from "components/page-sections/LocationPricing";
import LocationTeam from "components/page-sections/LocationTeam";
import ProcessSection from "components/page-sections/ProcessSection";
import ScrollerSection from "components/page-sections/ScrollerSection";
import ServiceCards from "components/page-sections/ServiceCards";
import ServicesOverview from "components/page-sections/ServicesOverview";
import SimpleTestimonial from "components/page-sections/SimpleTestimonial";
import Statement from "components/page-sections/Statement";
import TestimonialCarousel from "components/page-sections/TestimonialCarousel";
import TestimonialWithStats from "components/page-sections/TestimonialWithStats";

const TestimonialCarouselWithMedia = dynamic(
  () => import("components/page-sections/TestimonialCarouselWithMedia"),
  { ssr: false }
);

const components = {
  // custom types (don't lazy load)
  page: Page,
  careers: Page,
  service: Service,
  faq_page: FaqPage,
  patient_story: PatientStory,
  blog_post: BlogPost,
  leader_profile: LeaderProfile,
  location: Location,
  // content components
  rich_text: RichText,
  video: Video,
  // Hero Section Components
  hero: HeroBlok,
  hero_two_cols: HeroTwoCols,
  hero_video: HeroVideo,
  // Page section components
  cta_section: CtaSection,
  services_overview: ServicesOverview,
  scroller_section: ScrollerSection,
  testimonial_carousel_with_media: TestimonialCarouselWithMedia,
  grid: Grid,
  grid_with_video: GridWithVideo,
  faq_section: FaqSection,
  full_width_image: FullWidthImage,
  approach_section: ApproachSection,
  simple_testimonial: SimpleTestimonial,
  image_bullet_list: ImageBulletList,
  testimonial_carousel: TestimonialCarousel,
  process_section: ProcessSection,
  content_section: ContentSection,
  testimonial_with_stats: TestimonialWithStats,
  download_form: DownloadForm,
  service_cards: ServiceCards,
  cta_contained: CtaContained,
  blog_cards: BlogCards,
  statement: Statement,
  image_accordion: ImageAccordion,
  bullets_section: BulletsSection,
  // About
  leadership_cards: LeadershipCards,
  // Location components
  location_pricing: LocationPricing,
  location_team: LocationTeam,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

const StoryblokWrapper = ({ children }) => {
  return <>{children}</>;
};

export default StoryblokWrapper;
