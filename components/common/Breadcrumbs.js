import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import cn from "classnames";

import { truncate } from "utils/truncate";

const Breadcrumbs = ({ data, highlightCurrent = false }) => {
  return (
    <>
      <nav className="hidden md:flex" aria-label="Breadcrumb">
        <ol role="list" className="font-petite-caps flex items-center space-x-2 text-eyebrow">
          {data.map((page, idx) => (
            <li key={page.name}>
              <div
                className={cn("flex items-center font-medium", {
                  "text-gray-primary": page.current && !highlightCurrent,
                  "text-blue": page.current && highlightCurrent,
                  "text-gray-primary/50": !page.current,
                })}
              >
                <Link
                  href={page.href || "#"}
                  className="text-sm mr-2"
                  aria-current={page.current ? "page" : undefined}
                >
                  {truncate(page.name)}
                </Link>
                {data.length - 1 !== idx ? (
                  <CaretRight
                    className="h-4 w-4 flex-shrink-0 text-stroke-light"
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
