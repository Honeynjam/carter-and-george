import React from "react";

import { useCookieTracking } from "hooks/useCookieTracking";

import PreviewBanner from "../base/PreviewBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ footer, navbar, navbarType, children, preview = false }) => {
  useCookieTracking();
  return (
    <div className="font-sans text-normal text-gray-primary">
      <Navbar type={navbarType} data={navbar} />

      <main>{children}</main>
      <Footer data={footer} />
      {preview && <PreviewBanner />}
    </div>
  );
};

export default Layout;
