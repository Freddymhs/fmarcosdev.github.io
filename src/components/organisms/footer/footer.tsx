import { tv } from "tailwind-variants";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {
  BLOG_PAGE,
  copyRightText,
  NAVIGATION_PAGES,
} from "../../../constants/constants";
import { Link, useLocation } from "react-router";

// const footerBgStyle = tv({
//   base: `
//     w-full
//     bg-[url('/background/arica-morro.svg')] bg-no-repeat
//     bg-left-bottom
//     bg-contain
//   `,
//   variants: {
//     debug: {
//       true: "border-4 border-red-500 border-solid",
//       false: "",
//     },
//   },
// });

const footerNavStyle = tv({
  base: "flex bg-secondary-color fixed bottom-0 w-full justify-between border-important-color transition-all duration-200 ease-in-out",
  variants: {
    isDesktop: {
      true: "flex-row",
      false: "flex-col",
    },
    showTcontactInfo: {
      true: "",
      false: `border-t-4 border-solid`,
    },
    debug: {
      true: "border-4 border-red-500 border-solid",
      false: "",
    },
    isHidden: {
      true: "transform translate-y-full overflow-hidden",
      false: "transform translate-y-0",
    },
  },
});

const scrollToTopButtonStyle = tv({
  base: `
    fixed bottom-4 right-4 
    bg-primary-color text-secondary-color
    rounded-full p-3 shadow-lg
    hover:bg-important-color hover:text-secondary-color
    cursor-pointer z-50
    transition-all duration-300 ease-in-out
  `,
  variants: {
    isVisible: {
      true: "opacity-100 transform scale-100",
      false: "opacity-0 transform scale-75 pointer-events-none",
    },
  },
});

const footerLinksContainerStyle = tv({
  base: "flex flex-row",
});

const footerItemStyle = tv({
  base: `
    flex 
    items-center 
    justify-center  
    no-underline cursor-pointer
    text-[1.1rem] md:text-[1rem]
    hover:bg-primary-color
    text-important-color
    hover:text-secondary-color
   `,
  variants: {
    isDesktop: {
      true: "px-5",
      false: "w-100",
    },
  },
});

const footerCopyrightStyle = tv({
  base: "flex items-center text-read-white-color text-[0.7rem] text-important-color",
  variants: {
    isDesktop: {
      true: "w-auto justify-end pr-7",
      false: "w-full justify-center",
    },
  },
});

const debugInfoStyle = tv({
  base: "fixed bottom-4 left-4 border text-white text-xs p-2 rounded z-50 shadow-lg",
});

const DebugInfo = ({ bgHeight, navHeight, totalHeight, isNavHidden }) => (
  <div className={debugInfoStyle()}>
    <div>🐛 DEBUG ON</div>
    <div>Total: {totalHeight}vh</div>
    <div>BG: {bgHeight}vh</div>
    <div>Nav: {navHeight}vh</div>
    <div>Hidden: {isNavHidden ? "YES" : "NO"}</div>
  </div>
);

const ScrollToTopButton = ({ isVisible, onClick }) => (
  <button
    className={scrollToTopButtonStyle({ isVisible })}
    onClick={onClick}
    aria-label="Scroll to top"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  </button>
);

const NavigationLinks = ({ isDesktop, navHeight, location }) => (
  <div className={footerLinksContainerStyle()}>
    {NAVIGATION_PAGES.map(({ to, label }) => {
      const isActive = location.pathname === to;
      return (
        <Link
          key={to}
          to={to}
          className={`${footerItemStyle({ isDesktop })} ${
            isActive ? "bg-primary-color text-secondary-color font-bold" : ""
          }`}
          style={{ height: `${navHeight}vh` }}
        >
          {label}
        </Link>
      );
    })}
  </div>
);

const CopyrightSection = ({ isDesktop, navHeight }) => (
  <div
    className={footerCopyrightStyle({ isDesktop })}
    style={{ height: `${navHeight}vh` }}
  >
    <span>{copyRightText}</span>
  </div>
);

export const Footer = ({ debug = false, footerHeight = 24 }) => {
  const { isDesktop } = useMediaQuery();
  const location = useLocation();
  const showTcontactInfo = location.pathname !== BLOG_PAGE;

  const isNavHidden = !isDesktop;

  const bgHeight = isNavHidden ? footerHeight : Math.floor(footerHeight * 0.73);
  const navHeight = isNavHidden ? 0 : footerHeight - bgHeight;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {debug && (
        <DebugInfo
          bgHeight={bgHeight}
          navHeight={navHeight}
          totalHeight={footerHeight}
          isNavHidden={isNavHidden}
        />
      )}

      {/* <div
        className={footerBgStyle({ debug, isDesktop })}
        style={{ height: `${bgHeight}vh` }}
      /> */}

      <div
        className={footerNavStyle({
          isDesktop,
          showTcontactInfo,
          debug,
          isHidden: isNavHidden,
        })}
        style={{ height: `${navHeight}vh` }}
      >
        <NavigationLinks
          isDesktop={isDesktop}
          navHeight={navHeight}
          location={location}
        />

        <CopyrightSection isDesktop={isDesktop} navHeight={navHeight} />
      </div>

      <ScrollToTopButton isVisible={isNavHidden} onClick={scrollToTop} />
    </>
  );
};
