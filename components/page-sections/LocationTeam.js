import React, { useState } from "react";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import Hr from "components/common/Hr";
import TextButton from "components/common/TextButton";
import { Eyebrow, Heading, Subtitle } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const TeamMember = ({ blok, location }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        {...storyblokEditable(blok)}
        key={blok._uid}
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded"
      >
        <div className="absolute -right-10 -top-10 rounded bg-black p-2.5 opacity-0 duration-200 ease-out group-hover:right-4 group-hover:top-4 group-hover:opacity-100">
          <ArrowUpRight className="text-white" weight="bold" />
        </div>
        <StoryblokImage className="aspect-square object-cover object-top" image={blok.image} />
        <div className="bg-stone p-4">
          <Heading level={3} size="medium">
            {blok.name}
          </Heading>
          <p className="text-gray-secondary">{blok.position}</p>
          <TextButton className="mt-6">Read more</TextButton>
        </div>
      </div>
      {/* Modal */}
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative mx-8 transform overflow-hidden rounded bg-white p-6 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:p-8 lg:p-12"
            >
              <div className="grid gap-6 lg:max-h-[550px] lg:grid-cols-2">
                <div className="no-scrollbar overflow-y-scroll lg:max-h-[550px] lg:pr-12">
                  <DialogTitle className="mb-2" size="xl" as={Heading}>
                    {blok.name}
                  </DialogTitle>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex-1">{blok.position}</span>
                    <span className="flex items-center gap-1">
                      <MapPin weight="bold" className="text-blue" />
                      <span className="flex-1">{location?.clinic_name}</span>
                    </span>
                  </div>
                  {location?.nookal_link?.cached_url ? (
                    <Button
                      className="mt-4 max-md:w-full lg:w-full"
                      target="_blank"
                      href={linkResolver(location?.nookal_link)}
                    >
                      Book now
                    </Button>
                  ) : null}

                  {blok.services?.length > 0 ? (
                    <>
                      <Hr className="mb-4 mt-4" />
                      <Eyebrow className="!mb-2" text="services" />
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        {blok.services?.map((item, idx) => {
                          return (
                            <React.Fragment key={item}>
                              <span>{item}</span>
                              {idx < blok.services.length - 1 ? (
                                <span className="h-1.5 w-1.5 rounded-full bg-stroke-light" />
                              ) : null}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </>
                  ) : null}

                  <Hr className="mb-8 mt-4" />
                  <div className="prose max-w-none">{render(blok.description)}</div>
                </div>
                <div className="max-lg:hidden lg:max-h-[550px]">
                  <StoryblokImage className="h-full rounded object-cover" image={blok.image} />
                </div>
              </div>

              <div className="absolute right-4 top-4">
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
const LocationTeam = ({ blok, location }) => {
  return (
    <section className="section-spacing-m" {...storyblokEditable(blok)} key={blok._uid}>
      <Container>
        <div>
          <Eyebrow text={blok.eyebrow} />
          <Heading size="3xl" level={2}>
            {blok.title}
          </Heading>
          <Subtitle className="mt-2" color="grey">
            {blok.subtitle}
          </Subtitle>
          <Hr className="my-6" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blok.team.map((item) => {
              return <TeamMember location={location} key={item._uid} blok={item} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocationTeam;
