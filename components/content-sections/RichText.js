import React from "react";

import Image from "next/image";

import { storyblokEditable } from "@storyblok/react";
import { NODE_IMAGE, render } from "storyblok-rich-text-react-renderer";

import { getImageDimentions, isSvg } from "utils/storyblokImageHelpers";

const RichText = ({ blok }) => {
  return (
    <div className="prose lg:prose-lg max-w-none" {...storyblokEditable(blok)} key={blok._uid}>
      {render(blok.content, {
        nodeResolvers: {
          [NODE_IMAGE]: (children, props) => {
            // Check if SVG - if it is, just render via the default img tag
            if (isSvg(props.src)) {
              // eslint-disable-next-line @next/next/no-img-element
              return <img key={props.src} src={props.src} alt={props.alt || ""} />;
            } else {
              const dimensions = getImageDimentions(props.src);

              return (
                <Image
                  className="object-contain"
                  width={dimensions.width}
                  height={dimensions.height}
                  key={props.src}
                  src={props.src}
                  alt={props.alt || ""}
                />
              );
            }
          },
        },
      })}
    </div>
  );
};

export default RichText;
