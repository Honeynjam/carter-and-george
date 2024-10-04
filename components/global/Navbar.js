import React from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "classnames";

import AnnouncementBanner from "./AnnouncementBanner";
import DesktopNavbarDropdown from "./Navbar/DesktopNavbarDropdown";
import MobileMenu from "./Navbar/MobileMenu";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";

const Navbar = ({ type = "blur", data }) => {
  const secondaryButton = data.content.buttons[0];
  const primaryButton = data.content.buttons[1];

  return (
    <>
      <AnnouncementBanner />

      <nav
        className={cn("relative z-50 py-4 lg:py-6", {
          "border-b border-stroke-light bg-white": type === "white",
          "bg-white/20 text-white backdrop-blur-xl": type === "blur",
        })}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  width={179}
                  height={75}
                  className="object-contain"
                  src={type === "white" ? "/images/full-logo-colour.png" : "/images/full-logo.png"}
                  alt="logo"
                />
              </Link>
            </div>
            {/* Mobile */}
            <MobileMenu data={data} />
            {/* Desktop */}
            <div className="flex items-center gap-6 max-lg:hidden">
              <div className="flex items-center gap-6">
                {data.content.menu.map((item) => {
                  if (item.component === "navbar_dropdown") {
                    return <DesktopNavbarDropdown key={item._uid} blok={item} />;
                  }
                  return (
                    <div key={item.text} className="font-petite-caps text-button font-medium">
                      {item.text}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  outline
                  color={type === "white" ? "black" : "white"}
                  href={linkResolver(primaryButton.link)}
                >
                  {secondaryButton.text}
                </Button>
                <Button
                  color={type === "white" ? "black" : "white"}
                  href={linkResolver(primaryButton.link)}
                >
                  {primaryButton.text}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
