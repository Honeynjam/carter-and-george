import React from "react";

import cn from "classnames";

const Badge = ({ className, children }) => {
  return (
    <span
      className={cn(
        "text-xs font-petite-caps inline-block rounded-[1px] bg-stone px-2 py-1 text-eyebrow font-semibold tracking-wide text-gray-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
