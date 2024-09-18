export const nonPageFolders = ["global/"];

export const pageWithCodeFolders = ["blog/", "patient-stories/"];

export const rootPageWithUniqueLayout = [];

export const skipPageCreationWithinCatchAllPage = [
  ...nonPageFolders,
  ...pageWithCodeFolders,
  ...rootPageWithUniqueLayout,
];
