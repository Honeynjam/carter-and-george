import React from "react";

import cn from "classnames";

const Badge = ({ className, children }) => {
  return (
    <span
      className={cn(
        "text-gray-primary bg-stone text-eyebrow inline-block rounded-full px-2 py-1 text-xs font-semibold tracking-wide",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
