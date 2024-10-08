import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import cn from "classnames";
import { fix, parse } from "postcode";

import Button from "./Button";

const PostcodeForm = ({
  className = "",
  hideLabel = false,
  buttonText = "Find your local practice",
  onWhite = false,
  defaultPostcode = "",
}) => {
  const [postcode, setPostcode] = useState(defaultPostcode);
  const [loading, setLoading] = useState(false);
  const [isValidPostcode, setIsValidPostcode] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPostcode) {
      alert("Please enter a valid postcode.");
      return;
    }
    setLoading(true);
    router.push({ pathname: "/find-your-practice", query: { postcode: postcode }, shallow: true });
  };

  useEffect(() => {
    setLoading(false);
  }, [router.asPath]);

  const handlePostcodeChange = (e) => {
    const value = e.target.value;
    const parsed = parse(value);

    setPostcode(fix(value));
    setIsValidPostcode(parsed.valid);
  };

  return (
    <div className={cn(className, "max-w-lg")}>
      <form className="w-full" onSubmit={handleSubmit}>
        {!hideLabel ? (
          <label
            className={cn("mb-2 block text-left text-smaller", {
              "text-gray-tertiary": !onWhite,
              "text-white": !onWhite,
            })}
          >
            Find your local practice
          </label>
        ) : null}

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            value={postcode}
            onChange={handlePostcodeChange}
            required
            className="w-full flex-1 rounded-[1px] border border-stroke-light py-3 uppercase text-black placeholder:normal-case"
            placeholder="Postcode"
          />
          <Button color={onWhite ? "black" : "white"}>{loading ? "Loading..." : buttonText}</Button>
        </div>
      </form>
    </div>
  );
};

export default PostcodeForm;
