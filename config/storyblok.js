export const nonPageFolders = ["global/"];

export const pageWithCodeFolders = ["blog/", "patient-stories/"];

export const rootPageWithUniqueLayout = ["contact-us", "find-your-practice"];

export const skipPageCreationWithinCatchAllPage = [
  ...nonPageFolders,
  ...pageWithCodeFolders,
  ...rootPageWithUniqueLayout,
];
