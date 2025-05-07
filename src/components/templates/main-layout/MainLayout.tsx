"use client";

import type React from "react";
import { type ReactNode, useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import { Link, useLocation } from "react-router";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { copyRightText, PAGES } from "../../../constants/constants";
import { ContactInfoList } from "../../organisms/header/ContactInfoList";
import { SideBar } from "../../organisms/header/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDesktop } = useMediaQuery();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isDesktop && open) setOpen(false);
  }, [isDesktop, open]);

  const toggleSidebar = () => setOpen((prev) => !prev);

  const location = useLocation();

  useEffect(() => {
    setOpen((prev) => !prev);
  }, [location.pathname]);

  const Header = () => (
    <header className={headerStyle()}>
      <div className={headerLeftStyle({ isDesktop })}>
        <ContactInfoList />
      </div>
      {!isDesktop && (
        <div className={menuContainerStyle()}>
          <button onClick={toggleSidebar} className={menuButtonStyle()}>
            <span className=" ">Menu</span>
          </button>
        </div>
      )}
    </header>
  );

  const Footer = () => {
    const location = useLocation();
    return (
      <>
        <div className={footerBgStyle()} />
        <div className={footerNavStyle({ isDesktop })}>
          {isDesktop && (
            <div className={footerLinksContainerStyle({ isDesktop })}>
              {PAGES.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`${footerItemStyle({ isDesktop })} ${
                      isActive
                        ? " bg-primary-color text-secondary-color font-bold "
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          )}
          <div className={footerCopyrightStyle({ isDesktop })}>
            <span>{copyRightText}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={layoutContainerStyle()}>
      <SideBar open={open} />
      <Header />
      <main className={mainStyle()}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

const layoutContainerStyle = tv({
  base: "flex flex-col",
});

const headerStyle = tv({
  base: "flex justify-between items-stretch",
});

const headerLeftStyle = tv({
  variants: {
    isDesktop: {
      true: "w-full",
      false: "w-[70%]",
    },
  },
});

const menuContainerStyle = tv({
  base: "flex w-[30%]",
});

const menuButtonStyle = tv({
  base: "flex items-center justify-center w-full h-full bg-important-color text-primary-color font-bold text-xl cursor-pointer hover:bg-read-color  ",
});

const mainStyle = tv({
  // base: "flex-1 pt-5 pb-3",
  base: "flex-1 pt-5 pb-3 min-h-[calc(100vh-17vh-55px)]",
});

// bg-left-bottom    bottom-0
const footerBgStyle = tv({
  base: `
    w-full h-[17vh]
    bg-[url('/background/arica-morro.svg')] bg-no-repeat  
    bg-[length:auto_17vh]
  `,
});

const footerNavStyle = tv({
  base: "flex bg-secondary-color fixed bottom-0 w-full justify-between ",
  variants: {
    isDesktop: {
      true: "flex-row",
      false: "flex-col",
    },
  },
});
const footerLinksContainerStyle = tv({
  base: "flex",
  variants: {
    isDesktop: {
      true: "flex-row",
      false: "flex-row ",
    },
  },
});

const footerItemStyle = tv({
  base: `
  flex 
  items-center 
  justify-center  
  h-[55px]  
  no-underline cursor-pointer
  text-[1.1rem] md:text-[1rem]
  hover:bg-primary-color
  text-important-color   hover:text-secondary-color

  `,
  variants: {
    isDesktop: {
      true: "px-5",
      false: "w-100",
    },
  },
});

const footerCopyrightStyle = tv({
  base: "flex items-center text-read-white-color text-[0.7rem] text-read-text-color",
  variants: {
    isDesktop: {
      true: "w-auto justify-end pr-7",
      false: "w-full justify-center",
    },
  },
});
