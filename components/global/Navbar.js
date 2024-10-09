import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import cn from "classnames";

import AnnouncementBanner from "./AnnouncementBanner";
import DesktopNavbarDropdown from "./Navbar/DesktopNavbarDropdown";
import MobileMenu from "./Navbar/MobileMenu";

import { linkResolver } from "utils/linkResolver";

import Button from "components/common/Button";
import Container from "components/common/Container";
import StoryblokLink from "components/storyblok/StoryblokLink";

const Navbar = ({ type = "blur", data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  const secondaryButton = data.content.buttons[0];
  const primaryButton = data.content.buttons[1];

  // Change header background color when scrolling
  // sets isScrolled to true and class is added conditionally in header element
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (headerRef.current) {
        if (scrollPosition > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isWhiteTheme = type === "white" || isScrolled;

  return (
    <>
      <AnnouncementBanner />
      {console.log(isScrolled)}
      <nav
        ref={headerRef}
        className={cn("sticky top-0 z-50 py-4 duration-150 lg:py-6", {
          "border-b border-stroke-light bg-white": isWhiteTheme,
          "bg-white/20 text-white backdrop-blur-xl": type === "blur" && !isScrolled,
        })}
      >
        <Container>
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  className="object-contain duration-500 ease-custom hover:scale-95 hover:opacity-90"
                  width={179}
                  height={75}
                  src={
                    isWhiteTheme ? "/images/full-logo-colour.png" : "/images/full-logo-white.png"
                  }
                  alt="logo"
                />
              </Link>
            </div>
            {/* Mobile */}
            <MobileMenu data={data} />
            {/* Desktop */}
            <div className="flex items-center gap-6 max-[1235px]:hidden">
              <div className="flex items-center gap-6">
                {data.content.menu.map((item) => {
                  if (item.component === "navbar_dropdown") {
                    return <DesktopNavbarDropdown key={item._uid} blok={item} />;
                  }
                  return (
                    <StoryblokLink
                      link={item.link}
                      key={item.text}
                      className="font-petite-caps text-button font-medium hover:underline"
                    >
                      {item.text}
                    </StoryblokLink>
                  );
                })}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  outline
                  color={isWhiteTheme ? "black" : "white"}
                  href={linkResolver(secondaryButton.link)}
                >
                  {secondaryButton.text}
                </Button>
                <Button
                  color={isWhiteTheme ? "black" : "white"}
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
