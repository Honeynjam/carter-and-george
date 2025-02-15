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
    destination: "/locations/amersham/",
    permanent: true,
  },
  {
    source: "/staff/alex-braybrooke/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/chris-gillespie/",
    destination: "/about/chris-gillespie/",
    permanent: true,
  },
  {
    source: "/staff/will-harding/",
    destination: "/locations/congleton/",
    permanent: true,
  },
  {
    source: "/staff/pin-khor/",
    destination: "/locations/radlett/",
    permanent: true,
  },
  {
    source: "/staff/jasmin-kazittis/",
    destination: "/locations/radlett/",
    permanent: true,
  },
  {
    source: "/staff/mathew-boyden/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/grainne-kellett/",
    destination: "/locations/harpenden/",
    permanent: true,
  },
  {
    source: "/staff/sophie-pyle/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/staff/craig-rosenbloom/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/staff/tim-scully/",
    destination: "/locations/harpenden/",
    permanent: true,
  },
  {
    source: "/staff/ryan-smith/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/staff/sophie-gregory/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/staff/lauren-ayers/",
    destination: "/locations/hertford/",
    permanent: true,
  },
  {
    source: "/staff/matt-plater/",
    destination: "/about/",
    permanent: true,
  },
  {
    source: "/staff/maddie-hayes/",
    destination: "/locations/hitchin/",
    permanent: true,
  },
  {
    source: "/staff/sophie-slope/",
    destination: "/locations/hitchin/",
    permanent: true,
  },
  {
    source: "/staff/aby-tobin/",
    destination: "/locations/hertford/",
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
    source: "/policies//",
    destination: "/legal/policies//",
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
    destination: "/locations/congleton/",
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
    source: "/wellbeing/",
    destination: "/",
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
    destination: "/services/specialist-services/arthrosamid-injections/",
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
    destination: "/services/testing/prevention-performance-screening",
    permanent: true,
  },
  {
    source: "/physiotherapy/injury-screening/",
    destination: "/services/testing/prevention-performance-screening",
    permanent: true,
  },
  {
    source: "/metabolic-testing-vo2-max/",
    destination: "/services/testing/metabolic-testing/",
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
    destination: "/services/womens-health/pregnancy-massage/",
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
  {
    source: "/physiotherapy/taping-strapping/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/price-list/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/2019/01/03/ankle-sprains-phoenixs-story/",
    destination: "/blog/ankle-sprain-phoenixs-story/",
    permanent: true,
  },
  {
    source: "/wellbeing/reflexology/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/contact-us/book-online/",
    destination: "/find-your-practice/",
    permanent: true,
  },
  {
    source: "/staff/adele-cole/",
    destination: "/locations/harpenden/",
    permanent: true,
  },
  {
    source: "/personal-training/falls-prevention-and-elderly-rehabilitation/",
    destination: "/services/personal-training/",
    permanent: true,
  },
  {
    source: "/personal-training/golfers-club/",
    destination: "/services/personal-training/",
    permanent: true,
  },
  {
    source: "/2023/04/19/lower-back-pain-treatment-in-hitchin/",
    destination: "/common-conditions/lower-back-pain/",
    permanent: true,
  },
  {
    source: "/evolve-by-carter-george/",
    destination: "/services/personal-training/evolve/",
    permanent: true,
  },
  {
    source: "/2023/05/09/athlete-confidentiality-sports-injuries/",
    destination: "/blog/professional-athlete-injury-confidentiality/",
    permanent: true,
  },
  {
    source: "/physiotherapy/arthrosamid-injection/",
    destination: "/services/specialist-services/arthrosamid-injections/",
    permanent: true,
  },
  {
    source: "/online-booking/",
    destination: "/find-your-practice/",
    permanent: true,
  },
  {
    source: "/2023/03/22/personal-training-in-hitchin/",
    destination: "/services/personal-training/",
    permanent: true,
  },

  {
    source:
      "/2024/01/25/discover-top-tier-physiotherapy-in-harpenden-your-go-to-for-sports-injury-rehab/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2020/02/04/food-allergy-and-intolerance/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2024/01/02/evolve-what-is-it/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/01/26/the-benefits-of-shockwave-therapy-for-tendon-injuries/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2017/12/20/all-you-need-to-know-about-cryotherapy/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/11/01/sports-therapy-in-hitchin/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/02/06/pop-up-physiotherapy-clinics-in-hertford-this-month/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/07/20/personal-training-in-hitchin-2/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/09/20/the-most-effective-treatment-of-lower-back-pain/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/09/14/psychology-of-injury-and-rehabilitation/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/05/06/injury-screening/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/01/16/the-only-shock-about-shockwave-therapy-is-its-healing-capacity/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/04/03/official-opening-date-introductory-offers/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/03/01/musculoskeletal-physiotherapy-and-sports-injuries/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2020/03/08/top-3-ways-to-prevent-and-treat-back-pain/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/08/15/5-ways-to-burn-calories-at-work-jamie-donmall/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source:
      "/2019/04/09/its-never-too-late-to-start-why-getting-fit-in-your-50s-is-as-beneficial-as-starting-early/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/03/24/bracing-for-knees-and-ankles/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2022/06/15/pillows-the-most-common-question-we-get-about-neck-pain/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/07/11/an-evening-with-jamie-george/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/06/14/optimizing-performance/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/04/18/were-open-for-business/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/03/23/how-keeping-active-will-help-you-get-the-most-out-of-spring/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/03/17/sports-physiotherapy-in-hitchin/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2017/11/24/welcome-to-the-carter-george-practice/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/1970/01/01/5-ways-to-burn-calories-at-work-jamie-donmall-physiotherapist/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/06/03/whats-new-in-healthcare/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2020/05/27/sports-injuries-at-home/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/06/05/covid-19-and-football-injuries/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/10/24/how-can-i-make-my-heart-stronger/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/04/12/running-and-recovery-tips-from-our-personal-trainer/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2023/04/27/running-injuries/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/04/25/7dailymistakes/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2020/01/05/diet-supplements-and-inflammation/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/12/16/exercising-for-mental-health/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/11/11/hip-pain-surgery-or-physio/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/10/10/does-foam-rolling-work/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/09/02/why-are-we-spending-so-much-on-orthotics/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/05/16/rocktape/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2019/05/05/cheshunt-fc-champions/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/02/28/warm-ups-that-will-make-you-less-susceptible-to-sporting-injury/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/2018/01/04/how-physiotherapy-could-benefit-you-in-2018/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/staff-category/hurstpierpoint/",
    destination: "/locations/hurstpierpoint/",
    permanent: true,
  },
  {
    source: "/staff/angie-hulst/",
    destination: "/locations/haywards-heath/",
    permanent: true,
  },
  {
    source: "/staff-category/amersham/",
    destination: "/locations/amersham/",
    permanent: true,
  },
  {
    source: "/wellbeing/nutrition/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/physiotherapy/chronic-pain-conditions/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/about/blog/",
    destination: "/blog/",
    permanent: true,
  },
  {
    source: "/wellbeing/counselling/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/about/book-online/",
    destination: "/find-your-practice/",
    permanent: true,
  },
  {
    source: "/staff/kamie-lowe/",
    destination: "/locations/amersham/",
    permanent: true,
  },
  {
    source: "/dry-needlingims/",
    destination: "//",
    permanent: true,
  },
  {
    source: "/massage/",
    destination: "/services/physiotherapy/massage/",
    permanent: true,
  },
  {
    source: "/shockwave/",
    destination: "/services/physiotherapy/shockwave/",
    permanent: true,
  },
  {
    source: "/cryotherapy/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/arthritis-acupuncture-group/",
    destination: "/",
    permanent: true,
  },
];

module.exports = redirects;
