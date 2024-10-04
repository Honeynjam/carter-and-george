import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import cn from "classnames";

const TextButton = ({ href, children, className = "", ...props }) => {
  const classNames = cn(
    className,
    "font-medium group font-petite-caps text-button flex items-center gap-2"
  );

  if (href) {
    return (
      <Link className={classNames} href={href} {...props}>
        <span className="flex-1">{children}</span>
        <CaretRight
          size={12}
          weight="bold"
          className="duration-150 ease-out will-change-transform group-hover:translate-x-0.5"
        />
      </Link>
    );
  } else {
    return (
      <button className={classNames} {...props}>
        <span className="flex-1">{children}</span>
        <CaretRight
          size={12}
          weight="bold"
          className="duration-150 ease-out will-change-transform group-hover:translate-x-0.5"
        />
      </button>
    );
  }
};

export default TextButton;
