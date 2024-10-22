export const nonPageFolders = [
  "global/",
  "patient-stories/quotes/",
  "patient-stories/quotes-media/",
];

export const pageWithCodeFolders = ["blog/", "patient-stories/", "legal/"];

export const rootPageWithUniqueLayout = ["contact-us", "find-your-practice"];

export const skipPageCreationWithinCatchAllPage = [
  ...nonPageFolders,
  ...pageWithCodeFolders,
  ...rootPageWithUniqueLayout,
];
