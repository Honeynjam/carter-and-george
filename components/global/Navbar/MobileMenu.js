import Image from "next/image";

import { Popover } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { List } from "@phosphor-icons/react/dist/ssr/List";
import { Minus } from "@phosphor-icons/react/dist/ssr/Minus";
import { Plus } from "@phosphor-icons/react/dist/ssr/Plus";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import cn from "classnames";
import { AnimatePresence, m } from "framer-motion";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Hr from "components/common/Hr";
import StoryblokLink from "components/storyblok/StoryblokLink";

const SubMenu = ({ blok }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={cn("w-full text-black", {})}>
            <div
              className={cn("flex w-full items-center justify-between", {
                "mb-3": open,
                "text-blue": open,
              })}
            >
              <span>{blok.name}</span>{" "}
              <span>
                {open ? (
                  <Minus className="h-4 w-4" weight="bold" />
                ) : (
                  <Plus className="h-4 w-4" weight="bold" />
                )}
              </span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className="grid grid-cols-1 gap-4 pl-4">
              {blok.links.map((item) => {
                return (
                  <div key={item.id}>
                    <StoryblokLink className="mb-2.5" link={item.link}>
                      {item.text}
                    </StoryblokLink>
                  </div>
                );
              })}
              <StoryblokLink className="mb-2.5 font-semibold" link={blok.link}>
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
          <Disclosure.Button className={cn("hover:text-primary w-full text-black", {})}>
            <div
              className={cn("flex w-full items-center justify-between text-lg", {
                "mb-8": open,
              })}
            >
              <span>{blok.text}</span>{" "}
              <span>
                {" "}
                {open ? (
                  <Minus className="h-4 w-4" weight="bold" />
                ) : (
                  <Plus className="h-4 w-4" weight="bold" />
                )}
              </span>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className={cn("space-y-5 text-black", {})}>
              {blok.columns.map((column) => {
                if (column.component === "navbar_dropdown_single_column") {
                  return (
                    <div className="block pl-4" key={column.id}>
                      {column.links.map((item) => {
                        return (
                          <StoryblokLink link={item.link} key={item.id} className="mb-6 block">
                            <p className="mb-2.5 flex items-center gap-2 text-md">
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
    <div className="[@media(min-width:1235px)]:hidden">
      <Popover className="">
        {({ open }) => {
          if (typeof document !== "undefined") {
            document.body.classList.toggle("overflow-y-hidden", open);
          }
          return (
            <>
              <div>
                <Popover.Button
                  className="rounded-lg relative z-10 inline-flex items-center p-2 [&:not(:focus-visible)]:focus:outline-none"
                  aria-label="Toggle site navigation"
                >
                  {({ open }) => (open ? null : <List />)}
                </Popover.Button>
              </div>
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
                        "pb-safe absolute inset-x-0 top-0 z-20 flex h-full min-h-screen origin-top flex-col justify-between bg-white p-6"
                      )}
                    >
                      {({ close }) => (
                        <>
                          <div className="no-scrollbar relative z-10 overflow-y-scroll pb-40 text-black">
                            <div className="flex items-center justify-between gap-4">
                              <Image
                                className="object-contain"
                                width={48}
                                height={48}
                                src={"/images/logo-colour.png"}
                                alt="logo"
                              />
                              <X onClick={() => close()} className="h-6 w-6 text-black" />
                            </div>
                            <Hr className="mt-8" />
                            {data.content.menu.map((item) => {
                              return (
                                <div key={item.id} className="border-b border-stroke-light py-5">
                                  {item.component === "navbar_dropdown" ? (
                                    <MobileNavbarDropdown blok={item} />
                                  ) : (
                                    <StoryblokLink
                                      key={item.text}
                                      link={item.link}
                                      className="block text-lg"
                                    >
                                      {item.text}
                                    </StoryblokLink>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          <div className="bottom-safe-offset-4 absolute left-0 right-0 z-20 mt-8 flex flex-col gap-4 border-t border-stroke-light bg-white px-8 pt-6">
                            <div className="flex flex-col gap-4">
                              <Button outline href={linkResolver(primaryButton.link)}>
                                {secondaryButton.text}
                              </Button>
                              <Button color={"black"} href={linkResolver(primaryButton.link)}>
                                {primaryButton.text}
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
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
