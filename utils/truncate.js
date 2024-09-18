export const truncate = (str, num = 50) => {
  if (!str) return "";

  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
