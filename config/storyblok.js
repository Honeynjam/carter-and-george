export const nonPageFolders = ["global/"];

export const pageWithCodeFolders = [];

export const rootPageWithUniqueLayout = [];

export const skipPageCreationWithinCatchAllPage = [
  ...nonPageFolders,
  ...pageWithCodeFolders,
  ...rootPageWithUniqueLayout,
];
