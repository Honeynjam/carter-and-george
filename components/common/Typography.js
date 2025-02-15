import cn from "classnames";

export const Eyebrow = ({ className = "", color = "blue", text }) => {
  if (text) {
    return (
      <span
        className={cn(className, "font-petite-caps mb-4 block text-eyebrow font-medium md:mb-6", {
          "text-blue": color === "blue",
          "text-white": color === "white",
        })}
      >
        {text}
      </span>
    );
  }

  return null;
};

export const Heading = ({
  className = "",
  level = 2,
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
        "text-md font-medium": size === "medium",
        "text-lg font-medium": size === "large",
        "text-lg font-semibold lg:text-xl": size === "xl",
        "text-lg font-medium md:text-xl lg:text-2xl": size === "2xl",
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
  as = "p",
  children,
}) => {
  let Element = as;

  return (
    <Element
      className={cn(className, "text-pretty", {
        "text-gray-secondary prose-a:text-gray-secondary hover:prose-a:text-black":
          color === "grey",
        "text-white": color === "white",
        "text-gray-secondary-alternate": color === "grey" && alternate,
        "text-small": size === "small",
        "lg:text-md": size === "medium",
      })}
    >
      {children}
    </Element>
  );
};
