import React from "react";

import { storyblokEditable } from "@storyblok/react";

const QuoteBlock = ({ blok }) => {
  return (
    <div
      className="not-prose my-4 rounded bg-stone p-6 lg:p-8"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <p className="font-medium lg:text-md">{blok.quote}</p>
      {blok.person ? <p className="mt-4 font-medium">{blok.person}</p> : null}
      {blok.position ? <p className="text-gray-secondary">{blok.position}</p> : null}
    </div>
  );
};

export default QuoteBlock;
