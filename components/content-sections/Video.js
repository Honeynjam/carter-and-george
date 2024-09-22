import dynamic from "next/dynamic";

import { storyblokEditable } from "@storyblok/react";

import Container from "components/common/Container";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoBody = ({ blok }) => {
  return (
    <section key={blok._uid} {...storyblokEditable(blok)} className="relative z-20 my-12">
      <Container>
        {blok.video_url ? (
          <div className="iframe-wrapper">
            <ReactPlayer controls={true} url={blok.video_url} />
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default VideoBody;
