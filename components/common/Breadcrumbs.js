import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react";
import cn from "classnames";

import { truncate } from "utils/truncate";

const Breadcrumbs = ({ data }) => {
  return (
    <>
      <nav className="hidden md:flex" aria-label="Breadcrumb">
        <ol role="list" className="text-eyebrow flex items-center space-x-2 uppercase">
          {data.map((page, idx) => (
            <li key={page.name}>
              <div
                className={cn("flex items-center font-medium", {
                  "text-gray-primary": page.current,
                  "text-gray-primary/50": !page.current,
                })}
              >
                <Link
                  href={page.href || "#"}
                  className="mr-2 text-sm"
                  aria-current={page.current ? "page" : undefined}
                >
                  {truncate(page.name)}
                </Link>
                {data.length - 1 !== idx ? (
                  <CaretRight
                    className="text-stroke-light h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;