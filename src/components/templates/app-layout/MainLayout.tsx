import type React from "react";
import { type ReactNode, useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import { useLocation } from "react-router";

import useMediaQuery from "../../../hooks/useMediaQuery";
import { BLOG_PAGE } from "../../../constants/constants";
import Footer from "../../organisms/footer/footer";

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

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className={layoutContainerStyle({ showTcontactInfo })}>
      {/* <SideBar open={open} />
      <Header />
      <main className=" flex flex-col flex-1">{children}</main> */}
      <Footer debug={true} footerHeight={17} />
    </div>
  );
};

export default MainLayout;

const layoutContainerStyle = tv({
  base: "flex flex-col min-h-screen transition-all duration-400 ease-in-out",
  variants: {
    showTcontactInfo: {
      true: "bg-primary-color",
      false: "bg-secondary-color",
    },
  },
});
