import React, { useState } from "react";

import Link from "next/link";

import cn from "classnames";

import { useGlobalContext } from "contexts/globalContext";

import { mailchimpSubscribe } from "utils/mailchimp";

import Button from "components/common/Button";

const Newsletter = ({ className }) => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const { global, locations } = useGlobalContext();

  return (
    <div
      className={cn(
        className,
        "flex flex-col gap-6 bg-stone px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-12"
      )}
    >
      <div className="max-w-md">
        <h2 className="text-2xl font-medium">{global.newsletter_title}</h2>
        <p className="mt-2 text-gray-secondary">{global.newsletter_subtitle}</p>
      </div>
      <div className="">
        <h3 className="text-medium font-medium">Subscribe to our newsletter</h3>

        <form
          onSubmit={(e) => mailchimpSubscribe(e, setStatus, setMessage)}
          className="my-4 flex w-full flex-col gap-4 xl:flex-row xl:items-center"
        >
          <input
            required
            className="rounded-[1px] py-3 xl:w-1/3"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <select
            className="rounded-[1px] py-3 text-black xl:w-1/3"
            placeholder="Your local practice"
            name="location"
          >
            <option value="">Your local practice</option>
            {locations.map((location) => (
              <option key={location.content.clinic_name} value={location.content.clinic_name}>
                {location.content.clinic_name}
              </option>
            ))}
          </select>
          <Button>Subscribe</Button>
        </form>
        {status ? (
          <div className="my-2 text-small text-black">
            {status === "error" ? <div>{message}</div> : null}
            {status === "success" ? <div>{message}</div> : null}
          </div>
        ) : null}
        <p className="text-smaller text-gray-secondary">
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

export default Newsletter;
