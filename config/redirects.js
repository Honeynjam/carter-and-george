//
// Redirects for your website - add a new object to the array for each new redirect.
// View Next.js docs:
// https://nextjs.org/docs/api-reference/next.config.js/redirects
//
// {
//   source: '/about',
//   destination: '/',
//   permanent: true,
// },
const redirects = [
  {
    source: "/about/meet-the-team/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/natalie-pigott/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/alex-braybrooke/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/chris-gillespie/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/will-harding/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/pin-khor/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/jasmin-kazittis/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/mathew-boyden/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/grainne-kellett/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/sophie-pyle/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/craig-rosenbloom/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/tim-scully/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/ryan-smith/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/sophie-gregory/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/lauren-ayers/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/matt-plater/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/maddie-hayes/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/sophie-slope/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/aby-tobin/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/name-here/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff-category/clinic-team/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/jamie-george/",
    destination: "/about/jamie-george/",
    permanent: true,
  },
  {
    source: "/staff/rhyscarter/",
    destination: "/about/rhys-carter/",
    permanent: true,
  },
  {
    source: "/staff/rhys-carter/",
    destination: "/about/rhys-carter/",
    permanent: true,
  },
  {
    source: "/2023/05/18/carter-george-sports-injury-specialists/",
    destination: "/blog/introducing-sports-medicine-at-carter-george/",
    permanent: true,
  },
  {
    source: "/why-are-premier-league-injuries-at-a-new-high/",
    destination: "/blog/premier-league-injuries-at-a-new-high/",
    permanent: true,
  },
  {
    source: "/2017/12/05/why-self-referral-is-the-future-of-physio/",
    destination: "/blog/self-referral-physio/",
    permanent: true,
  },
  {
    source: "/metabolic-testing/",
    destination: "/blog/what-is-metabolic-testing/",
    permanent: true,
  },
  {
    source: "/contact-us/careers/",
    destination: "/careers/",
    permanent: true,
  },
  {
    source: "/common-conditions/runners-knee/",
    destination: "/common-conditions/sports-injuries/",
    permanent: true,
  },
  {
    source: "/2018/10/29/rotator-cuff-injuries/",
    destination: "/common-conditions/rotator-cuff-pain/",
    permanent: true,
  },
  {
    source: "/cookie-policy/",
    destination: "/legal/cookie-policy/",
    permanent: true,
  },
  {
    source: "/about/faqs/",
    destination: "/faqs/",
    permanent: true,
  },
  {
    source: "/locations/",
    destination: "/find-your-practice/",
    permanent: true,
  },
  {
    source: "/amersham/",
    destination: "/locations/amersham/",
    permanent: true,
  },
  {
    source: "/congleton-cheshire/",
    destination: "/locations/congleton/",
    permanent: true,
  },
  {
    source: "/staff-category/congleton/",
    destination: "/locations/congleton-cheshire/",
    permanent: true,
  },
  {
    source: "/harpenden/",
    destination: "/locations/harpenden/",
    permanent: true,
  },
  {
    source: "/staff-category/harpenden/",
    destination: "/locations/harpenden/",
    permanent: true,
  },
  {
    source: "/hertford/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/hertford-2/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/2024/02/18/physiotherapy-in-hertfordshire-harnessing-health/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/staff-category/hertford/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/hitchin/",
    destination: "/locations/hitchin/",
    permanent: true,
  },
  {
    source: "/2023/11/16/sports-massage-in-hitchin/",
    destination: "/locations/hitchin/",
    permanent: true,
  },
  {
    source: "/staff-category/hitchin/",
    destination: "/locations/hitchin/",
    permanent: true,
  },
  {
    source: "/hurstpierpoint-west-sussex/",
    destination: "/locations/hurstpierpoint/",
    permanent: true,
  },
  {
    source: "/radlett-2/",
    destination: "/locations/radlett/",
    permanent: true,
  },
  {
    source: "/radlett/",
    destination: "/locations/radlett/",
    permanent: true,
  },
  {
    source: "/staff-category/radlett/",
    destination: "/locations/radlett/",
    permanent: true,
  },
  {
    source: "/windsor/",
    destination: "/locations/windsor/",
    permanent: true,
  },
  {
    source: "/privacy-policy/",
    destination: "/legal/privacy-policy/",
    permanent: true,
  },
  {
    source: "/personal-training/",
    destination: "/services/personal-training/",
    permanent: true,
  },
  {
    source: "/staff-category/personal-training/",
    destination: "/services/personal-training/",
    permanent: true,
  },
  {
    source: "/blood-flow-restriction-training-bfr/",
    destination: "/services/personal-training/blood-flow-restriction-training-bfr/",
    permanent: true,
  },
  {
    source: "/wellbeing/pilates/",
    destination: "/services/personal-training/pilates/",
    permanent: true,
  },
  {
    source: "/2018/05/04/all-you-need-to-know-about-pilates-at-the-carter-george-practice/",
    destination: "/services/personal-training/pilates/",
    permanent: true,
  },
  {
    source: "/personal-training/sports-performance-training/",
    destination: "/services/personal-training/sports-performance-training/",
    permanent: true,
  },
  {
    source: "/personal-training/weight-loss/",
    destination: "/services/personal-training/weight-loss/",
    permanent: true,
  },
  {
    source: "/physiotherapy/",
    destination: "/services/physiotherapy/",
    permanent: true,
  },
  {
    source: "/staff-category/physiotherapy/",
    destination: "/services/physiotherapy/",
    permanent: true,
  },
  {
    source: "/physiotherapy/acupuncture-for-arthritis/",
    destination: "/services/physiotherapy/acupuncture-for-osteoarthritis/",
    permanent: true,
  },
  {
    source: "/physiotherapy/dry-needling-ims/",
    destination: "/services/physiotherapy/dry-needling/",
    permanent: true,
  },
  {
    source: "/wellbeing/massage/",
    destination: "/services/physiotherapy/massage/",
    permanent: true,
  },
  {
    source: "/physiotherapy/shockwave/",
    destination: "/services/physiotherapy/shockwave/",
    permanent: true,
  },
  {
    source: "/physiotherapy/specialist-services/",
    destination: "/services/specialist-services/",
    permanent: true,
  },
  {
    source: "/physiotherapy/specialist-services/arthrosamid-injection/",
    destination: "/services/specialist-services/arthrosamid-injection/",
    permanent: true,
  },
  {
    source: "/bracing/",
    destination: "/services/specialist-services/bracing/",
    permanent: true,
  },
  {
    source: "/corticosteroid-injections/",
    destination: "/services/specialist-services/cortisone-injections/",
    permanent: true,
  },
  {
    source: "/hyaluronic-acid-injections/",
    destination: "/services/specialist-services/hyaluronic-acid-injections/",
    permanent: true,
  },
  {
    source: "/testing/",
    destination: "/services/testing/",
    permanent: true,
  },
  {
    source: "/diagnostic-ultrasound-scans/",
    destination: "/services/testing/ultrasound-scans/",
    permanent: true,
  },
  {
    source: "/gait-analysis-and-orthotics/",
    destination: "/services/testing/gait-analysis/",
    permanent: true,
  },
  {
    source: "/personal-training/running-analysis-and-training/",
    destination: "/services/testing/gait-analysis/",
    permanent: true,
  },
  {
    source: "/2023/06/14/footscan-and-gait-analysis/",
    destination: "/services/testing/gait-analysis/",
    permanent: true,
  },
  {
    source: "/injury-screening/",
    destination: "/services/testing/injury-screening/",
    permanent: true,
  },
  {
    source: "/physiotherapy/injury-screening/",
    destination: "/services/testing/injury-screening/",
    permanent: true,
  },
  {
    source: "/metabolic-testing-vo2-max/",
    destination: "/services/testing/metabolic-screening/",
    permanent: true,
  },
  {
    source: "/womens-health/",
    destination: "/services/womens-health/",
    permanent: true,
  },
  {
    source: "/mummy-mot/",
    destination: "/services/womens-health/mummy-mot/",
    permanent: true,
  },
  {
    source: "/wellbeing/pregnancy-and-post-natal-massage/",
    destination: "/services/womens-health/pregnancy-and-post-natal-massage/",
    permanent: true,
  },
  {
    source: "/pregnancy-package/",
    destination: "/services/womens-health/pregnancy-package/",
    permanent: true,
  },
  {
    source: "/terms/",
    destination: "/legal/terms/",
    permanent: true,
  },
  {
    source: "/2023/08/10/understanding-the-risk-of-boxing-injuries-to-the-shoulder/",
    destination: "/blog/risk-of-boxing-injuries-to-the-shoulder/",
    permanent: true,
  },
  {
    source: "/2023/05/18/hitchin-sports-physiotherapist/",
    destination: "/blog/what-is-a-sports-physiotherapist/",
    permanent: true,
  },
  {
    source:
      "/2023/02/21/we-are-thrilled-to-announce-the-opening-of-our-new-clinic-in-hitchin-hertfordshire/",
    destination: "/blog/new-clinic-in-hitchin-hertfordshire/",
    permanent: true,
  },
  {
    source: "/2023/05/18/physiotherapy-an-overview-self-referral-physio/",
    destination: "/blog/self-referral-physio/",
    permanent: true,
  },
  {
    source: "/2023/07/31/shoulder-pain-throwing-a-common-injury-in-cricketers/",
    destination: "/blog/shoulder-pain-in-cricketers/",
    permanent: true,
  },
  {
    source: "/2018/07/17/training-cycles-part-2-preparation-and-competition/",
    destination: "/blog/training-cycles-preparation-and-competition/",
    permanent: true,
  },
  {
    source: "/2018/01/23/all-you-need-to-know-about-ims-needling/",
    destination: "/blog/about-ims-needling/",
    permanent: true,
  },
  {
    source: "/2023/08/29/common-running-injuries/",
    destination: "/blog/common-running-injuries/",
    permanent: true,
  },
  {
    source: "/2023/07/28/the-female-athlete-how-the-menstrual-cycle-affects-injury-risk/",
    destination: "/blog/how-the-menstrual-cycle-affects-injury-risk/",
    permanent: true,
  },
  {
    source: "/2023/02/03/metabolic-testing-for-marathon-runners/",
    destination: "/blog/metabolic-testing-for-marathon-runners/",
    permanent: true,
  },
  {
    source: "/2023/12/05/understanding-knee-injuries-in-rugby/",
    destination: "/blog/knee-injuries-in-rugby/",
    permanent: true,
  },
  {
    source: "/2023/10/24/upgrading-athletic-development-in-young-athletes/",
    destination: "/blog/upgrading-athletic-development-in-young-athletes",
    permanent: true,
  },
  {
    source: "/2019/03/16/chronic-fatigue-and-muscle-strains-theyre-not-related-are-they/",
    destination: "/blog/chronic-fatigue-and-muscle-strains/",
    permanent: true,
  },
  {
    source: "/2023/11/07/a-beginners-guide-to-training-for-a-marathon/",
    destination: "/blog/a-beginners-guide-to-training-for-a-marathon/",
    permanent: true,
  },
  {
    source: "/2024/03/27/welcome-to-our-newest-carter-george-physiotherapy-practice-in-harpenden/",
    destination: "/blog/new-practice-in-harpenden/",
    permanent: true,
  },
  {
    source: "/2018/10/04/everything-you-need-to-know-about-heel-pain/",
    destination: "/blog/everything-you-need-to-know-about-heel-pain/",
    permanent: true,
  },
  {
    source: "/2023/09/11/the-benefits-of-a-strength-conditioning-coach-vs-personal-trainer/",
    destination: "/blog/strength-conditioning-coach-vs-personal-trainer/",
    permanent: true,
  },
  {
    source: "/2023/11/21/marathon-preparation-programme/",
    destination: "/blog/marathon-preparation-programme/",
    permanent: true,
  },
  {
    source: "/2024/01/02/physiotherapy-treatment-for-chronic-pain/",
    destination: "/blog/physiotherapy-treatment-for-chronic-pain/",
    permanent: true,
  },
  {
    source: "/2020/01/22/hamstring-injuries/",
    destination: "/blog/hamstring-injuries/",
    permanent: true,
  },
  {
    source: "/2023/09/12/injury-screening-identifying-risks-and-ensuring-safety-this-preseason/",
    destination: "/blog/injury-screening-identifying-risks/",
    permanent: true,
  },
  {
    source: "/2018/07/10/optimizing-performance-training-cycles-part-1/",
    destination: "/blog/optimizing-performance-training-cycles-part-1/",
    permanent: true,
  },
  {
    source: "/2023/07/11/heart-rate-training-zones-for-weight-loss/",
    destination: "/blog/heart-rate-training-zones-for-weight-loss/",
    permanent: true,
  },
  {
    source: "/2023/11/28/why-are-premier-league-injuries-at-a-new-high/",
    destination: "/blog/premier-league-injuries-at-a-new-high/",
    permanent: true,
  },
  {
    source: "/2023/06/07/everything-you-need-to-know-about-facet-joint-pain/",
    destination: "/blog/everything-you-need-to-know-about-facet-joint-pain/",
    permanent: true,
  },
  {
    source: "/2023/08/09/why-choose-evolve-the-ultimate-weight-loss-programme-near-you/",
    destination: "/blog/the-ultimate-weight-loss-programme-near-you/",
    permanent: true,
  },
  {
    source: "/2023/04/06/orthopaedic-surgery-in-lithuania/",
    destination: "/blog/orthopaedic-surgery-in-lithuania/",
    permanent: true,
  },
  {
    source: "/2023/10/10/hamstring-injury-management/",
    destination: "/blog/hamstring-injury-management/",
    permanent: true,
  },
  {
    source: "/2023/09/06/gait-analysis-for-runners/",
    destination: "/blog/how-gait-analysis-can-benefit-runners/",
    permanent: true,
  },
  {
    source: "/2023/10/10/sports-medicine-doctor/",
    destination: "/blog/introducing-sports-medicine-at-carter-george/",
    permanent: true,
  },
  {
    source: "/2018/07/31/training-cycles-part-3-transition-periods-and-competition/",
    destination: "/blog/training-cycles-transition-periods-and-competition/",
    permanent: true,
  },
  {
    source: "/2019/02/12/we-won-the-feefo-gold-trusted-service-award-for-2019/",
    destination: "/blog/feefo-gold-trusted-service-award-2019/",
    permanent: true,
  },
  {
    source: "/2018/11/26/youve-heard-if-it-but-what-is-an-acl-injury/",
    destination: "/blog/what-is-an-acl-injury/",
    permanent: true,
  },
  {
    source: "/2023/01/18/recovery-for-endurance-events-and-training/",
    destination: "/blog/recovery-for-endurance-events-and-training/",
    permanent: true,
  },
  {
    source: "/2020/06/02/how-to-recover-like-an-athlete/",
    destination: "/blog/how-to-recover-like-an-athlete/",
    permanent: true,
  },
  {
    source: "/2019/03/10/marathon-season-is-here-and-with-it-knee-pain-introducing-runners-knee/",
    destination: "/blog/marathon-season-and-runners-knee/",
    permanent: true,
  },
  {
    source: "/2018/03/09/its-time-to-take-care-of-your-joints/",
    destination: "/blog/time-to-take-care-of-your-joints/",
    permanent: true,
  },
  {
    source: "/metabolic-testing/",
    destination: "/blog/what-is-metabolic-testing",
    permanent: true,
  },
  {
    source: "/common-conditions/adolescent-injuries/",
    destination: "/services/youth-athletes/",
    permanent: true,
  },
  {
    source: "/common-conditions/plantar-fasciitis-heel-pain/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/common-conditions/achilles-tendonitis/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/common-conditions/post-operative-rehabilitation/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/common-conditions/tennis-and-golfers-elbow/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/common-conditions/sciatica-and-prolapsed-discs/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/common-conditions/whiplash/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/common-conditions/neck-pain/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/common-conditions/",
    destination: "/",
    permanent: true,
  },
];

module.exports = redirects;
