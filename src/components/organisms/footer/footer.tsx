import { tv } from "tailwind-variants";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {
  BLOG_PAGE,
  copyRightText,
  NAVIGATION_PAGES,
} from "../../../constants/constants";
import { Link, useLocation } from "react-router";

// bg-left-bottom    bottom-0
const footerBgStyle = tv({
  base: `
    w-full h-[17vh]
    bg-[url('/background/arica-morro.svg')] bg-no-repeat  
    bg-[length:auto_17vh]
  `,
});

const footerNavStyle = tv({
  base: "flex bg-secondary-color fixed bottom-0 w-full justify-between border-important-color  transition-all duration-200 ease-in-out",
  variants: {
    isDesktop: {
      true: "flex-row",
      false: "flex-col",
    },
    showTcontactInfo: {
      true: "",
      false: `border-t-4 border-solid 
     
      `,
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

export const Footer = () => {
  const { isDesktop } = useMediaQuery();
  const location = useLocation();
  const pathName = location.pathname;
  const showTcontactInfo = pathName !== BLOG_PAGE;
  return (
    <>
      <div className={footerBgStyle()} />
      <div className={footerNavStyle({ isDesktop, showTcontactInfo })}>
        {isDesktop && (
          <div className={footerLinksContainerStyle({ isDesktop })}>
            {NAVIGATION_PAGES.map(({ to, label }) => {
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
