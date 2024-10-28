import { Fragment } from "react";

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";
import cn from "classnames";

import Container from "components/common/Container";
import StoryblokLink from "components/storyblok/StoryblokLink";

export const DesktopNavbarDropdown = ({ blok }) => {
  return (
    <Popover className="relative">
      {() => {
        return (
          <>
            <PopoverButton className={cn("hover:text-primary relative font-medium outline-none")}>
              <span className="font-petite-caps flex items-center gap-1.5 text-button font-medium">
                <span>{blok.text}</span>{" "}
                <CaretDown className="transition-transform duration-150 ui-open:rotate-180 ui-open:transform" />
              </span>
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out object-center duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100  translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <PopoverPanel
                className={cn(
                  "left-1/2 z-10 mt-[35px] flex -translate-x-1/2 px-6 text-black transition",
                  {
                    "fixed w-screen max-w-[1440px] md:px-8 lg:px-16": blok.columns.length >= 4,
                    "absolute w-screen": blok.columns.length < 4,
                    "max-w-md": blok.columns.length === 1,
                    "max-w-5xl": blok.columns.length >= 2 && blok.columns.length < 4,
                  }
                )}
              >
                <Container noPadding>
                  <div className="flex-auto overflow-hidden border border-stroke-light bg-white px-8 py-6">
                    <h2 className="text-md font-medium">{blok.text}</h2>
                    <hr className="mb-6 mt-2 text-stroke-light" />
                    <div className="relative">
                      <div
                        className={cn("grid gap-12", {
                          "grid-cols-1": blok.columns.length === 1,
                          "grid-cols-2": blok.columns.length === 2,
                          "grid-cols-3": blok.columns.length === 3,
                          "grid-cols-4": blok.columns.length === 4,
                          "grid-cols-5": blok.columns.length === 5,
                          "grid-cols-6": blok.columns.length === 6,
                          "grid-cols-7": blok.columns.length === 7,
                        })}
                      >
                        {blok.columns.map((column, idx) => {
                          if (column.component === "navbar_dropdown_single_column") {
                            return (
                              <div className="block" key={column._uid}>
                                {column.links.map((item, linkIdx) => {
                                  const isLastItem = linkIdx === column.links.length - 1;
                                  return (
                                    <StoryblokLink
                                      link={item.link}
                                      key={item._uid}
                                      className={`group ${isLastItem ? "" : "mb-8"} block`}
                                    >
                                      <h3 className="mb-2.5 flex items-center gap-2 text-md font-medium">
                                        <span>{item.title}</span>
                                        <ArrowRight className="duration-150 ease-in-out group-hover:translate-x-1" />
                                      </h3>
                                      <p className="text-small">{item.subtitle}</p>
                                    </StoryblokLink>
                                  );
                                })}
                              </div>
                            );
                          }

                          if (column.component === "navbar_dropdown_column") {
                            return (
                              <div key={column.id}>
                                <StoryblokLink
                                  className="font-petite-caps group mb-6 flex items-center gap-2 text-button font-medium text-[#6E6E6E]"
                                  link={column.link}
                                >
                                  <span>{column.name}</span>
                                  <ArrowRight className="duration-150 ease-in-out group-hover:translate-x-0.5" />
                                </StoryblokLink>
                                <div className="grid grid-cols-1 gap-4">
                                  {column.links.map((item) => {
                                    return (
                                      <div key={item._uid}>
                                        <StoryblokLink
                                          className="mb-2.5 text-small font-medium hover:underline"
                                          link={item.link}
                                        >
                                          {item.text}
                                        </StoryblokLink>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </Container>
              </PopoverPanel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
};

export default DesktopNavbarDropdown;
