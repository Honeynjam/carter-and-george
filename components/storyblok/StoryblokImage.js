// import { useMemo } from "react";
import Image from "next/image";

import cn from "classnames";

import { getImageDimentions, isSvg } from "utils/storyblokImageHelpers";

// const breakpoints = {
//   xs: 390,
//   s: 768,
//   m: 1024,
//   l: 1280,
//   xl: 1440,
//   xxl: 1680,
// };

const StoryblokImage = ({
  image,
  className = "",
  fill = false,
  svgClassName,
  priority = false,
  // sizes,
  ...props
}) => {
  // const sizesObj = useMemo(() => {
  //   if (!sizes) return "100vw";
  //   if (typeof sizes === "string") return sizes;
  //   const sizeOptions = Object.entries(sizes) || [];
  //   if (sizeOptions.length === 0) return "100vw";

  //   const lastIndex = sizeOptions.length - 1;
  //   const sizesArr = sizeOptions.map(([key, width], i) => {
  //     const lastItem = i === lastIndex;
  //     const label = lastItem ? "" : `(max-width: ${breakpoints[key]}px) `;
  //     return `${label}${width}`;
  //   });
  //   return sizesArr.join(", ");
  // }, [sizes]);

  if (image?.filename) {
    if (isSvg(image.filename)) {
      return (
        <div className={cn("relative", className, svgClassName)}>
          <Image
            priority={priority}
            {...props}
            fill
            className="object-contain object-left"
            src={image.filename}
            alt={image.alt || ""}
          />
        </div>
      );
    }

    if (fill) {
      return (
        <Image
          // sizes={sizesObj}
          priority={priority}
          {...props}
          fill
          className={className}
          src={image.filename}
          alt={image.alt || ""}
        />
      );
    }

    const dimensions = getImageDimentions(image?.filename);
    if (dimensions.width && dimensions.height) {
      return (
        <Image
          {...props}
          // sizes={sizesObj}
          width={dimensions.width}
          height={dimensions.height}
          priority={priority}
          className={className}
          src={image.filename}
          alt={image.alt || ""}
        />
      );
    }
  }

  return null;
};

export default StoryblokImage;
