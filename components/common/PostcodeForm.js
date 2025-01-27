import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from "@headlessui/react";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import cn from "classnames";
import { fix, parse } from "postcode";

import Button from "./Button";

import { useGlobalContext } from "contexts/globalContext";

import { linkResolver } from "utils/linkResolver";

const PostcodeForm = ({
  className = "",
  hideLabel = false,
  buttonText = "Find your local practice",
  onWhite = false,
  defaultPostcode = "",
}) => {
  const { locations } = useGlobalContext();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [postcode, setPostcode] = useState(defaultPostcode);
  const [query, setQuery] = useState("");

  const [isValidPostcode, setIsValidPostcode] = useState(false);
  const router = useRouter();

  const filteredLocations =
    query === ""
      ? locations
      : locations.filter((location) => {
          return location.content.clinic_name.toLowerCase().includes(query.toLowerCase());
        });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedLocation) {
      router.push({ pathname: linkResolver(selectedLocation) });
      return;
    }

    if (!isValidPostcode) {
      alert("Please enter a valid postcode.");
      return;
    }

    router.push({ pathname: "/find-your-practice", query: { postcode: postcode }, shallow: true });
  };

  useEffect(() => {
    const parsed = parse(postcode);

    setPostcode(fix(postcode));
    setQuery(fix(postcode));
    setIsValidPostcode(parsed.valid);
  }, []);

  const handlePostcodeChange = (value) => {
    const parsed = parse(value);

    setPostcode(fix(value));
    setIsValidPostcode(parsed.valid);
  };

  return (
    <div className={cn(className, "max-w-lg")}>
      <form className="w-full" onSubmit={handleSubmit}>
        <Combobox
          modal={false}
          onClose={() => {
            // trick so it submits the form straight away if it's a postcode
            if (isValidPostcode) {
              router.push({
                pathname: "/find-your-practice",
                query: { postcode: postcode },
                shallow: true,
              });
            }
          }}
          immediate
          as="div"
          value={selectedLocation}
          onChange={(location) => {
            setQuery("");
            setSelectedLocation(location);
          }}
        >
          {!hideLabel ? (
            <Label
              className={cn("mb-2 block text-left text-smaller", {
                "text-gray-tertiary": !onWhite,
                "text-white": !onWhite,
              })}
            >
              Find your local practice
            </Label>
          ) : null}

          <div className="relative">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <ComboboxInput
                  name="location"
                  className="w-full rounded-[1px] border border-stroke-light py-3 text-black placeholder:normal-case"
                  onChange={(e) => {
                    setQuery(e.target.value);
                    handlePostcodeChange(e.target.value);
                  }}
                  placeholder="Postcode"
                  onBlur={() => setQuery("")}
                  displayValue={(location) => {
                    if (selectedLocation) {
                      return selectedLocation.content.clinic_name;
                    }

                    return postcode;
                  }}
                />
                {filteredLocations.length > 0 ? (
                  <ComboboxOptions className="rounded-md text-base sm:text-sm absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[1px] bg-white py-1 shadow-xl ring-1 ring-black/5 focus:outline-none">
                    {filteredLocations.map((location) => (
                      <ComboboxOption
                        key={location.content.clinic_name}
                        value={location}
                        className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-black data-[focus]:bg-stone data-[focus]:text-blue data-[focus]:outline-none"
                      >
                        <span className="mr-2 block truncate group-data-[selected]:font-semibold">
                          {location.content.clinic_name}
                        </span>

                        <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-black group-data-[selected]:flex group-data-[focus]:text-black">
                          <Check className="h-6 w-6 text-blue" weight="bold" />
                        </span>
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                ) : null}
              </div>
              <>
                <Button color={onWhite ? "black" : "white"}>{buttonText}</Button>
              </>
            </div>
          </div>
        </Combobox>
      </form>
    </div>
  );
};

export default PostcodeForm;
