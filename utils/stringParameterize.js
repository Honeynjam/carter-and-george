import slugify from "slugify";

export const stringParameterize = (str = "") => {
  return slugify(str, { lower: true, strict: true });
};
