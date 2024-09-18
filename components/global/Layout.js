import React from "react";

import PreviewBanner from "../base/PreviewBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ footer, navbar, globalSettings, navbarType, children, preview = false }) => {
  return (
    <div className="text-gray-primary text-normal font-sans">
      <Navbar type={navbarType} data={navbar} />

      <main>{children}</main>
      <Footer data={footer} />
      {preview && <PreviewBanner />}
    </div>
  );
};

export default Layout;
