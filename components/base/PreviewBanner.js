import Link from "next/link";
import { useRouter } from "next/router";

const PreviewBanner = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 right-0 z-50 w-2/5 pb-2 sm:pb-5">
      <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
        <div className="rounded bg-blue p-2 text-white shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="hidden w-0 flex-1 items-center md:flex">
              <p className="ml-3 truncate font-semibold text-white">
                <span className="hidden md:inline">This is a preview.</span>
              </p>
            </div>
            <div className="order-3 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <div className="rounded-md shadow-sm">
                <Link
                  tabIndex={-1}
                  href={`/api/exit-preview?path=${router.asPath}`}
                  className="focus:shadow-outline rounded-md text-sm flex items-center justify-center border border-transparent bg-white px-4 py-2 font-semibold leading-5 text-black transition duration-150 ease-in-out focus:outline-none"
                >
                  Exit Preview Mode
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBanner;
