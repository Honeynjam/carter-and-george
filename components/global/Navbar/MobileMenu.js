import { Popover } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { List } from "@phosphor-icons/react/dist/ssr/List";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import cn from "classnames";
import { AnimatePresence, m } from "framer-motion";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import StoryblokLink from "components/storyblok/StoryblokLink";

const SubMenu = ({ blok }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={cn("w-full font-semibold text-black", {})}>
            <div
              className={cn("flex w-full items-center justify-between", {
                "mb-2": open,
              })}
            >
              <span>{blok.name}</span> <span>{open ? "-" : "+"}</span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className="grid grid-cols-1 gap-4 pl-4">
              {blok.links.map((item) => {
                return (
                  <div key={item.id}>
                    <StoryblokLink className="mb-2.5 text-small font-semibold" link={item.link}>
                      {item.text}
                    </StoryblokLink>
                  </div>
                );
              })}
              <StoryblokLink className="mb-2.5 text-small font-semibold" link={blok.link}>
                Overview
              </StoryblokLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
const MobileNavbarDropdown = ({ blok }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={cn("hover:text-primary w-full font-semibold text-black", {})}
          >
            <div
              className={cn(
                "font-petite-caps flex w-full items-center justify-between text-button font-medium",
                {
                  "mb-2": open,
                }
              )}
            >
              <span>{blok.text}</span> <span>{open ? "-" : "+"}</span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className={cn("space-y-5 text-black", {})}>
              {blok.columns.map((column, idx) => {
                if (column.component === "navbar_dropdown_single_column") {
                  return (
                    <div className="block" key={column.id}>
                      {column.links.map((item) => {
                        return (
                          <StoryblokLink link={item.link} key={item.id} className="mb-6 block">
                            <p className="mb-2.5 flex items-center gap-2 text-md font-semibold">
                              <span>{item.title}</span>
                              <ArrowRight />
                            </p>
                            <p className="text-small">{item.subtitle}</p>
                          </StoryblokLink>
                        );
                      })}
                    </div>
                  );
                }

                if (column.component === "navbar_dropdown_column") {
                  return (
                    <div className="pl-4" key={column.id}>
                      <SubMenu blok={column} />
                    </div>
                  );
                }
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const MobileMenu = ({ data }) => {
  const secondaryButton = data.content.buttons[0];
  const primaryButton = data.content.buttons[1];

  return (
    <div className="flex items-center gap-6 [@media(min-width:1235px)]:hidden">
      <Popover className="flex items-center">
        {({ open }) => {
          if (typeof document !== "undefined") {
            document.body.classList.toggle("overflow-y-hidden", open);
          }
          return (
            <>
              <Popover.Button
                className="rounded-lg relative z-10 -m-2 inline-flex items-center p-2 [&:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle site navigation"
              >
                {({ open }) => (open ? <X className="text-black" weight="bold" /> : <List />)}
              </Popover.Button>
              <AnimatePresence initial={false}>
                {open && (
                  <>
                    <Popover.Panel
                      static
                      as={m.div}
                      initial={{ opacity: 0, y: -32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: -32,
                        transition: { duration: 0.2 },
                      }}
                      className={cn(
                        "absolute inset-x-0 top-0 z-0 flex h-full min-h-screen origin-top flex-col justify-between bg-white px-6 pb-6 pt-24"
                      )}
                    >
                      <div className="relative z-10 -mt-6 space-y-4 overflow-y-scroll pb-40 text-black">
                        {data.content.menu.map((item) => {
                          if (item.component === "navbar_dropdown") {
                            return <MobileNavbarDropdown key={item.id} blok={item} />;
                          }
                          return (
                            <StoryblokLink
                              key={item.text}
                              link={item.link}
                              className="font-petite-caps block text-button font-medium"
                            >
                              {item.text}
                            </StoryblokLink>
                          );
                        })}
                      </div>
                      <div className="absolute bottom-4 left-0 right-0 z-20 mt-8 flex flex-col gap-4 border-t border-stroke-light bg-white px-8 pt-6">
                        <div className="flex flex-col gap-4">
                          <Button outline href={linkResolver(primaryButton.link)}>
                            {secondaryButton.text}
                          </Button>
                          <Button color={"black"} href={linkResolver(primaryButton.link)}>
                            {primaryButton.text}
                          </Button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </AnimatePresence>
            </>
          );
        }}
      </Popover>
    </div>
  );
};

export default MobileMenu;
