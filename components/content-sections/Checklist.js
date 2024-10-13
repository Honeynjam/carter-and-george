import React from "react";

import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { storyblokEditable } from "@storyblok/react";

const Checklist = ({ blok }) => {
  return (
    <div className="prose my-4 rounded" {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {blok.items.map((item) => {
          return (
            <div className="flex items-center gap-4" key={item._uid} {...storyblokEditable(item)}>
              <div className="rounded-full bg-[#E9F0F2] p-1.5">
                <Check className="h-6 w-6 text-blue" weight="bold" />
              </div>
              <span className="flex-1">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checklist;
