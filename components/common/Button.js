import Link from "next/link";

import cn from "classnames";

const Button = ({
  color = "black",
  outline = false,
  children,
  href = null,
  className = "",
  ...props
}) => {
  const classNames = cn(
    "rounded-[1px] group justify-center text-button inline-flex items-center gap-2.5 py-3 px-6 font-medium uppercase hover:brightness-95 duration-150",
    className,
    {
      "text-white bg-black": color === "black" && !outline,
      "text-black bg-white": color === "white" && !outline,
      "text-black bg-transparent border border-black hover:bg-black hover:text-white":
        outline && color === "black",
      "text-white bg-transparent border border-white hover:bg-white hover:text-black":
        outline && color === "white",
    }
  );
  if (href) {
    return (
      <Link className={classNames} href={href} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={classNames} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
