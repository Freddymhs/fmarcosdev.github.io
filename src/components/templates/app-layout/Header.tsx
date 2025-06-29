import { useRef, useState } from "react";
import { tv } from "tailwind-variants";
import { BLOG_PAGE } from "../../../constants/constants";
import { useLocation } from "react-router";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { ContactInfoList } from "../../organisms/header/ContactInfoList";
import { SideBar } from "../../organisms/header/Sidebar";

const headerStyle = tv({
  base: "flex justify-between items-stretch relative",
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
  base: "flex w-full sm-w-[30%] min-h-20 relative",
});
const menuButtonStyle = tv({
  base: "flex items-center justify-center w-full h-full bg-important-color text-primary-color font-bold text-xl cursor-pointer hover:bg-read-color relative",
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathName = useLocation().pathname;
  const { isDesktop } = useMediaQuery();

  const showTcontactInfo = pathName !== BLOG_PAGE;
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <header ref={headerRef} className={headerStyle()}>
        {showTcontactInfo && (
          <div className={headerLeftStyle({ isDesktop })}>
            <ContactInfoList />
          </div>
        )}
        {!isDesktop && (
          <div className={menuContainerStyle()}>
            <button onClick={toggleSidebar} className={menuButtonStyle()}>
              <span className="">Menu</span>
            </button>
          </div>
        )}
      </header>
      <SideBar open={open} />
    </>
  );
};

export default Header;
