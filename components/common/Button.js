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
    "rounded-[1px] group justify-center text-button inline-flex items-center gap-2.5 py-3 px-6 font-medium font-petite-caps duration-150",
    className,
    {
      "text-white bg-black border border-transparent hover:bg-black/90":
        color === "black" && !outline,
      "text-black bg-white border border-transparent hover:bg-white/90":
        color === "white" && !outline,
      "text-black bg-transparent border border-black": outline && color === "black",
      "text-white bg-transparent border border-white": outline && color === "white",
    }
  );
  if (href) {
    return (
      <Link className={classNames} href={href} {...props}>
        <span class="relative inline-flex overflow-hidden">
          <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-6">
            {children}
          </div>
          <div
            aria-hidden={true}
            class="absolute translate-y-[125%] skew-y-6 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
          >
            {children}
          </div>
        </span>
      </Link>
    );
  } else {
    return (
      <button className={classNames} {...props}>
        <span class="relative inline-flex overflow-hidden">
          <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-6">
            {children}
          </div>
          <div
            aria-hidden={true}
            class="absolute translate-y-[125%] skew-y-6 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
          >
            {children}
          </div>
        </span>
      </button>
    );
  }
};

export default Button;
