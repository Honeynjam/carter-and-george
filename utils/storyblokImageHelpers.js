export const isPng = (url) => {
  return url.includes(".png");
};

export const isSvg = (url) => {
  return url.includes(".svg");
};

export const hasImage = (image) => {
  return !!image?.filename;
};

// https://www.storyblok.com/faq/image-dimensions-assets-js
export const getImageDimentions = (url) => {
  return {
    width: url.split("/")[5].split("x")[0],
    height: url.split("/")[5].split("x")[1],
  };
};
