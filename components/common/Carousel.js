import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import cn from "classnames";

export const CarouselButtons = ({ currentSlide, instanceRef }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        className="rounded-full border border-stroke-light bg-white p-5 duration-150 hover:bg-stone"
        tabIndex={currentSlide === 0 ? -1 : 0}
        onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
        aria-label="Previous item"
      >
        <ArrowLeft
          aria-hidden="true"
          className={cn("text-primary h-5 w-5 cursor-pointer duration-200", {})}
        />
      </button>

      <button
        className="rounded-full border border-stroke-light bg-white p-5 duration-150 hover:bg-stone"
        tabIndex={currentSlide === instanceRef.current.track.details.slides.length - 3 ? -1 : 0}
        onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
        aria-label="Next item"
      >
        <ArrowRight
          aria-hidden="true"
          className={cn("text-primary h-5 w-5 cursor-pointer duration-200", {})}
        />
      </button>
    </div>
  );
};
