import React from "react";

import cn from "classnames";

import BlogCard from "./BlogCard";

import Button from "components/common/Button";
import { Heading, Subtitle } from "components/common/Typography";

export default function BlogGrid({ className = "", data = [], headerData = {} }) {
  return (
    <div className={className}>
      {/* Header */}
      {headerData.title ? (
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-20">
            <div className="max-w-xl flex-1">
              <Heading size="3xl" level={2}>
                {headerData.title}
              </Heading>
              {headerData.subtitle ? (
                <Subtitle className="mt-2">{headerData.subtitle}</Subtitle>
              ) : null}
            </div>
            <div className="">
              <Button outline href={headerData.href}>
                View all
              </Button>
            </div>
          </div>
          <hr className="mt-6 text-stroke-light" />
        </div>
      ) : null}

      <div className="grid gap-x-8 gap-y-12 md:grid-cols-3 md:gap-y-20">
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
