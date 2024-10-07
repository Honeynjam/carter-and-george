import Link from "next/link";
import { useRouter } from "next/router";

import Button from "components/common/Button";

const PreviewBanner = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="rounded bg-blue p-2 text-white shadow-lg sm:p-3">
          <p className="mb-2 font-semibold text-white max-md:hidden">This is a preview.</p>

          <Button
            className="w-ful"
            color="white"
            tabIndex={-1}
            href={`/api/exit-preview?path=${router.asPath}`}
          >
            Exit Preview Mode
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewBanner;
