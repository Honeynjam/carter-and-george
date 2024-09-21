import { Fragment, useState } from "react";

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import cn from "classnames";

import Container from "components/common/Container";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

export const DesktopNavbarDropdown = ({ blok }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className="relative">
      {() => {
        return (
          <>
            <PopoverButton className={cn("hover:text-primary relative font-semibold outline-none")}>
              <span className="flex items-center gap-1.5 text-button font-medium uppercase">
                <span>{blok.text}</span>{" "}
                <CaretDown className="ui-open:transform ui-open:rotate-180 duration-150" />
              </span>
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                className={cn(
                  "fixed left-8 z-10 mt-10 flex w-screen max-w-max px-4 transition",
                  {}
                )}
              >
                <Container noPadding>
                  <div className="flex-auto overflow-hidden border border-stroke-light bg-white px-16 py-8">
                    <h2>{blok.text}</h2>
                    <hr className="mb-6 mt-2 text-stroke-light" />
                    <div
                      className={cn("grid gap-12", {
                        "grid-cols-2": blok.columns.length === 1,
                        "grid-cols-4": blok.columns.length >= 2,
                      })}
                    >
                      <div
                        className={cn({
                          "col-span-1": blok.columns.length >= 2,
                        })}
                      >
                        <p>{blok.subtitle}</p>
                        <div className="mt-8 overflow-hidden">
                          <StoryblokImage
                            className="h-full rounded object-cover"
                            image={blok.image}
                          />
                        </div>
                      </div>

                      <div
                        className={cn("grid grid-cols-1 gap-12", {
                          "grid-cols-1": blok.columns.length === 1,
                          "grid-cols-2": blok.columns.length === 2,
                          "grid-cols-3": blok.columns.length >= 3,
                          "col-span-3": blok.columns.length >= 2,
                        })}
                      >
                        {blok.columns.map((column, idx) => {
                          if (column.component === "navbar_dropdown_single_column") {
                            return (
                              <div className="block" key={column.id}>
                                {column.links.map((item) => {
                                  return (
                                    <div key={item.id} className="mb-12">
                                      <h3 className="mb-2.5 flex items-center gap-2 text-md font-semibold">
                                        <span>{item.title}</span>
                                        <ArrowRight />
                                      </h3>
                                      <p className="text-small">{item.subtitle}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }

                          if (column.component === "navbar_dropdown_column") {
                            return (
                              <div key={column.id}>
                                <StoryblokLink
                                  className="mb-6 flex items-center gap-2 text-button font-medium uppercase text-[#6E6E6E]"
                                  link={column.link}
                                >
                                  <span>{column.name}</span>
                                  <ArrowRight />
                                </StoryblokLink>
                                <div className="grid grid-cols-1 gap-4">
                                  {column.links.map((item) => {
                                    return (
                                      <div key={item.id}>
                                        <StoryblokLink
                                          className="mb-2.5 text-small font-semibold"
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
