import React from "react";

import cn from "classnames";

import BlogCard from "./BlogCard";

import Button from "components/common/Button";

export default function BlogGrid({ className, data, headerData = {} }) {
  return (
    <div className={cn(className)}>
      {/* Header */}
      {headerData.title ? (
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-semibold">{headerData.title}</h2>
              <p className="text-normal text-gray-secondary">{headerData.subtitle}</p>
            </div>
            <Button outline href={headerData.href}>
              View all
            </Button>
          </div>
          <hr className="mt-6 text-stroke-light" />
        </div>
      ) : null}

      <div className="grid gap-x-8 gap-y-20 md:grid-cols-3">
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
