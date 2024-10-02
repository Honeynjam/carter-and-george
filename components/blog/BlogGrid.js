import React from "react";

import cn from "classnames";

import BlogCard from "./BlogCard";

import Button from "components/common/Button";
import { Heading, Subtitle } from "components/common/Typography";

export default function BlogGrid({ className, data = [], headerData = {} }) {
  return (
    <div className={cn(className)}>
      {/* Header */}
      {headerData.title ? (
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Heading className="mb-2" size="3xl" level={2}>
                {headerData.title}
              </Heading>
              <Subtitle>{headerData.subtitle}</Subtitle>
            </div>
            <Button outline href={headerData.href}>
              View all
            </Button>
          </div>
          <hr className="mt-6 text-stroke-light" />
        </div>
      ) : null}

      <div className="grid gap-x-8 gap-y-20 md:grid-cols-3">
        {data?.map((item) => {
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
