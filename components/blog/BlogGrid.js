import React from "react";

import cn from "classnames";

import BlogCard from "./BlogCard";

import Button from "components/common/Button";

export default function BlogGrid({ className, data, headerData = {} }) {
  return (
    <div className={cn(className)}>
      {/* Header */}
      {headerData.title ? (
        <div className="mb-20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-semibold">{headerData.title}</h2>
              <p className="text-gray-secondary text-normal">{headerData.subtitle}</p>
            </div>
            <Button outline href={headerData.href}>
              View all
            </Button>
          </div>
          <hr className="text-stroke-light mt-6" />
        </div>
      ) : null}

      <div className="grid grid-cols-3 gap-x-8 gap-y-20">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <BlogCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
