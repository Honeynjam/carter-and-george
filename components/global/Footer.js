import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "classnames";

import { useGlobalContext } from "contexts/globalContext";

import { mailchimpSubscribe } from "utils/mailchimp";

import Button from "components/common/Button";
import SocialIcon from "components/social-icons";
import StoryblokLink from "components/storyblok/StoryblokLink";

const NewsletterForm = () => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const { global, locations } = useGlobalContext();

  return (
    <div className="flex flex-col justify-between gap-8 py-8 text-white md:flex-row md:gap-24">
      <div className="max-w-md">
        <h2 className="mb-2 text-xl font-semibold">{global.newsletter_title}</h2>
        <p className="text-small text-gray-secondary-alternate">{global.newsletter_subtitle}</p>
      </div>
      <div className="">
        <h3 className="mb-4 font-semibold text-white">Subscribe to our newsletter</h3>
        <form
          onSubmit={(e) => mailchimpSubscribe(e, setStatus, setMessage)}
          className="my-4 flex w-full flex-col gap-4 lg:flex-row lg:items-center"
        >
          <input
            required
            className="rounded-[1px] py-3 text-black lg:w-1/3"
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <select
            className="rounded-[1px] py-3 text-black lg:w-1/3"
            placeholder="Your local practice"
            name="location"
          >
            <option value="">Your local practice</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <Button outline color="white">
            Subscribe
          </Button>
        </form>
        {status ? (
          <div className="my-2 text-small text-white">
            {status === "error" ? <div>{message}</div> : null}
            {status === "success" ? <div>{message}</div> : null}
          </div>
        ) : null}
        <p className="text-smaller text-gray-secondary-alternate">
          By clicking Sign Up you're confirming that you agree with our{" "}
          <Link className="underline" href="/legal/privacy-policy/">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
const Footer = ({ data }) => {
  return (
    <footer className="bg-black px-6 py-8 md:p-16">
      <NewsletterForm />

      <hr className="mb-8 text-stroke-dark lg:mb-16" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-40">
        <div className="max-w-sm">
          <Link href="/">
            <Image
              width={271}
              height={53}
              className="object-contain duration-500 ease-custom hover:opacity-90"
              src="/images/full-logo.png"
              alt="logo"
            />
          </Link>
          <div className="mt-4 text-balance text-small text-gray-secondary-alternate">
            {data.content.statement}
          </div>
          <div className="mt-8 flex gap-2.5 lg:mt-28">
            {data.content.social_media.map((item) => {
              return (
                <a
                  aria-label={`Follow Carter & George on ${item.name}`}
                  key={item.type}
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white duration-150 hover:text-stroke-light"
                >
                  <SocialIcon className="h-5 w-5" type={item.type} />
                </a>
              );
            })}
          </div>
        </div>
        <div
          className={cn("mt-12 grid flex-1 grid-cols-2 gap-8 md:gap-10 lg:mt-0", {
            "lg:grid-cols-3": data.content.columns.length === 3,
            "lg:grid-cols-4": data.content.columns.length === 4,
            "lg:grid-cols-5": data.content.columns.length === 5,
          })}
        >
          {data.content.columns.map((item, idx) => {
            return (
              <div key={idx}>
                <h3 className="font-petite-caps mb-6 text-button font-medium text-gray-tertiary-alternate">
                  {item.title}
                </h3>
                <ul role="list" className="space-y-4">
                  {item.links.map((item) => (
                    <li key={item.text}>
                      <StoryblokLink
                        link={item.link}
                        className="text-normal text-white duration-200 hover:underline"
                      >
                        {item.text}
                      </StoryblokLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="mb-8 mt-16 text-stroke-dark" />
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center gap-4 max-md:justify-center">
          {data.content.bottom_links.map((item) => {
            return (
              <StoryblokLink
                className="text-small text-gray-tertiary-alternate hover:text-white"
                key={item.text}
                link={item.link}
              >
                {item.text}
              </StoryblokLink>
            );
          })}
        </div>

        <p className="text-small text-gray-tertiary-alternate max-md:mt-4">
          © {new Date().getFullYear()} Carter & George. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
