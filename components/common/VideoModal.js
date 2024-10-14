import { Fragment } from "react";

import dynamic from "next/dynamic";

import { Dialog, Transition } from "@headlessui/react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoModal = ({ isOpen, setIsOpen, video }) => {
  if (video) {
    return (
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative my-8 inline-block w-full max-w-6xl transform rounded-[9px] bg-white p-3 text-left align-middle shadow-xl transition-all">
                <div className="iframe-wrapper">
                  <ReactPlayer url={video} controls playing={true} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  }

  return null;
};
export default VideoModal;
