import cn from "classnames";

const Container = ({ children, size = "default", className = "", noPadding = false, ...props }) => {
  const containerSize = cn({
    "max-w-[1440px]": size === "default",
    "": size === "full",
    "max-w-5xl": size == "xl",
    "max-w-4xl": size == "lg",
    "max-w-3xl": size == "md",
    "max-w-2xl": size == "sm",
    "max-w-[540px]": size == "xs",
  });

  const paddingClass = cn({
    "px-6 md:px-8 lg:px-16": !noPadding,
  });

  return (
    <div {...props} className={cn("mx-auto w-full", className, paddingClass, containerSize)}>
      {children}
    </div>
  );
};

export default Container;
