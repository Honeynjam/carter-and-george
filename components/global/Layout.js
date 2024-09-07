import React from "react";

import PreviewBanner from "../base/PreviewBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ footer, navbar, globalSettings, children, preview = false }) => {
  return (
    <div className="layout">
      <Navbar data={navbar} />
      <main>{children}</main>
      <Footer data={footer} />
      {preview && <PreviewBanner />}
    </div>
  );
};

export default Layout;
