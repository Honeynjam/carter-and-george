import React from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "classnames";

import AnnouncementBanner from "./AnnouncementBanner";

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
        className={cn("relative z-20 h-[103px] p-8", {
          "border-b border-stroke-light": type === "white",
          "bg-white/20 text-white backdrop-blur-xl": type === "blur",
        })}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  width={55}
                  height={55}
                  className="object-contain"
                  src={type === "white" ? "/images/logo-colour.png" : "/images/logo-white.png"}
                  alt="logo"
                />
              </Link>
              <div className="flex items-center gap-6">
                {data.content.menu.map((item) => {
                  return (
                    <div key={item.text} className="text-button font-medium uppercase">
                      {item.text}
                    </div>
                  );
                })}
              </div>
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
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
