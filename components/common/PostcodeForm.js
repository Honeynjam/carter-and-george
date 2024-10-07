import { useState } from "react";

import { useRouter } from "next/router";

import cn from "classnames";

import Button from "./Button";

const PostcodeForm = ({
  className = "",
  hideLabel = false,
  buttonText = "Find your local clinic",
}) => {
  const [postcode, setPostcode] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({ pathname: "/find-your-practice", query: { postcode: postcode } });
  };

  return (
    <div className={cn(className, "max-w-lg")}>
      <form className="w-full" onSubmit={handleSubmit}>
        {!hideLabel ? (
          <label className="mb-2 block text-left text-smaller text-white">
            Find your local clinic
          </label>
        ) : null}

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            required
            className="w-full flex-1 rounded-[1px] border border-stroke-light py-3 text-black"
            placeholder="Postcode"
          />
          <Button color="white">{buttonText}</Button>
        </div>
      </form>
    </div>
  );
};

export default PostcodeForm;
