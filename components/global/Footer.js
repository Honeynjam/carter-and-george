import React from "react";

import Image from "next/image";

import cn from "classnames";

import StoryblokLink from "components/storyblok/StoryblokLink";

// TODO newsletter
// TODO social links
const Footer = ({ data }) => {
  return (
    <footer className="bg-black p-16">
      {/* <div className="py-8">
        <h2>Never miss a beat</h2>
        <p>Subscribe to our newsletter for the latest tips in achieving your peak performance.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
      </div>
      <hr className="mb-16" /> */}
      <div className="flex gap-40">
        <div className="max-w-xs">
          <Image
            width={271}
            height={53}
            className="object-contain"
            src="/images/full-logo.png"
            alt="logo"
          />
          <div className="text-small text-gray-secondary-alternate mt-4">
            {data.content.statement}
          </div>
        </div>
        <div
          className={cn("mt-12 grid flex-1 grid-cols-2 gap-8 md:gap-10 xl:mt-0", {
            "lg:grid-cols-3": data.content.columns.length === 3,
            "lg:grid-cols-4": data.content.columns.length === 4,
            "lg:grid-cols-5": data.content.columns.length === 5,
          })}
        >
          {data.content.columns.map((item, idx) => {
            return (
              <div key={idx}>
                <h3 className="text-gray-tertiary-alternate text-button mb-6 font-medium uppercase">
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
      <hr className="text-stroke-dark mb-8 mt-16" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {data.content.bottom_links.map((item) => {
            return (
              <StoryblokLink
                className="text-gray-tertiary-alternate text-small hover:text-white"
                key={item.text}
                link={item.link}
              >
                {item.text}
              </StoryblokLink>
            );
          })}
        </div>
        <div>
          <p className="text-gray-tertiary-alternate text-small">
            ©2024 Carter & George. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
