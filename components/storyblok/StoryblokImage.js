import Image from "next/image";

import cn from "classnames";

import { getImageDimentions, isSvg } from "utils/storyblokImageHelpers";

const StoryblokImage = ({ image, className, svgClassName, ...props }) => {
  if (image.filename) {
    if (isSvg(image.filename)) {
      return (
        <div className={cn("relative", className, svgClassName)}>
          <Image
            {...props}
            fill
            className="object-contain object-left"
            src={image.filename}
            alt={image.alt || ""}
          />
        </div>
      );
    }

    const dimensions = getImageDimentions(image?.filename);
    if (dimensions.width && dimensions.height) {
      return (
        <Image
          {...props}
          width={dimensions.width}
          height={dimensions.height}
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
