import cn from "classnames";

import { useGlobalContext } from "contexts/globalContext";

import Button from "components/common/Button";

const Newsletter = ({ className }) => {
  const global = useGlobalContext();

  return (
    <div
      className={cn(
        className,
        "flex flex-col gap-12 bg-stone px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-12"
      )}
    >
      <div className="max-w-md">
        <h2 className="text-2xl font-medium">{global.newsletter_title}</h2>
        <p className="mt-2 text-gray-secondary">{global.newsletter_subtitle}</p>
      </div>
      <div className="">
        <h3 className="text-medium font-medium">Subscribe to our newsletter</h3>
        {/* TODO - hook to mailchimp */}
        <form className="my-4 flex w-full flex-col gap-4 xl:flex-row xl:items-center">
          <input className="py-3 xl:w-1/3" type="email" placeholder="Enter your email" />
          <input className="py-3 xl:w-1/3" type="text" placeholder="Your local Practice" />
          <Button>Subscribe</Button>
        </form>
        <p className="text-smaller text-gray-secondary">
          By clicking Sign Up you're confirming that you agree with our{" "}
          <a className="underline" href="/terms">
            Terms and Conditions
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
