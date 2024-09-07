export const formatDate = (date) => {
  if (!date) {
    return null;
  }
  return new Date(date)?.toLocaleString(`en-US`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  });
};

export const getDayOfMonth = (date) => {
  if (!date) {
    return null;
  }

  return new Date(date).getDate();
};

export const getMonthName = (date, short = true) => {
  if (!date) {
    return null;
  }

  return new Date(date).toLocaleString("en-US", { month: short ? "short" : "long" });
};
