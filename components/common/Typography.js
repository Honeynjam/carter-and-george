import cn from "classnames";

export const Eyebrow = ({ className = "", text }) => {
  if (text) {
    return (
      <span className={cn(className, "mb-4 block text-eyebrow font-medium uppercase text-blue")}>
        {text}
      </span>
    );
  }

  return null;
};

export const Heading = ({
  className = "",
  level = 1,
  size = "large",
  color = "black",
  ...props
}) => {
  let Element = `h${level}`;

  return (
    <Element
      {...props}
      className={cn(className, "", {
        "text-white": color === "white",
        "": size === "2xl",
        "text-md font-medium": size === "medium",
        "text-lg font-medium": size === "large",
        "text-xl font-semibold": size === "xl",
        "text-xl font-medium md:text-2xl lg:text-3xl": size === "3xl",
        "text-2xl font-medium md:text-3xl lg:text-4xl": size === "4xl",
      })}
    />
  );
};

export const Subtitle = ({
  className = "",
  color = "black",
  alternate = false,
  size = "regular",
  children,
}) => {
  return (
    <p
      className={cn(className, "text-balance", {
        "text-gray-secondary": color === "grey",
        "text-white": color === "white",
        "text-gray-secondary-alternate": color === "grey" && alternate,
        "text-small": size === "small",
        "text-md": size === "medium",
      })}
    >
      {children}
    </p>
  );
};
