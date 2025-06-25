"use client";

import type React from "react";
import { type ReactNode, useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import { useLocation } from "react-router";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { BLOG_PAGE } from "../../../constants/constants";
import { ContactInfoList } from "../../organisms/header/ContactInfoList";
import { SideBar } from "../../organisms/header/Sidebar";
import { Footer } from "../../organisms/footer/footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDesktop } = useMediaQuery();
  const [open, setOpen] = useState(false);
  const pathName = useLocation().pathname;
  const showTcontactInfo = pathName !== BLOG_PAGE;
  useEffect(() => {
    if (isDesktop && open) setOpen(false);
  }, [isDesktop, open]);

  const toggleSidebar = () => setOpen((prev) => !prev);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const Header = () => (
    <header className={headerStyle()}>
      {showTcontactInfo && (
        <div className={headerLeftStyle({ isDesktop })}>
          <ContactInfoList />
        </div>
      )}
      {!isDesktop && (
        <div className={menuContainerStyle()}>
          <button onClick={toggleSidebar} className={menuButtonStyle()}>
            <span className=" ">Menu</span>
          </button>
        </div>
      )}
    </header>
  );

  return (
    <div className={layoutContainerStyle({ showTcontactInfo })}>
      <SideBar open={open} />
      <Header />
      <main className={mainStyle()}>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;

const layoutContainerStyle = tv({
  base: "flex flex-col    transition-all duration-400 ease-in-out",
  variants: {
    showTcontactInfo: {
      true: "bg-primary-color",
      false: "bg-secondary-color",
    },
  },
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
  base: "flex w-full sm-w-[30%] min-h-20 ",
});

const menuButtonStyle = tv({
  base: "flex  items-center justify-center w-full h-full bg-important-color text-primary-color font-bold text-xl cursor-pointer hover:bg-read-color  ",
});

const mainStyle = tv({
  // base: "flex-1 pt-5 pb-3",
  base: "flex-1 pt-5 pb-3 min-h-[calc(100vh-17vh-55px)]",
});
