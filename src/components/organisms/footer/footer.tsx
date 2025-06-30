import { tv } from "tailwind-variants";
import { Link, useLocation } from "react-router";
import {
  BLOG_PAGE,
  copyRightText,
  NAVIGATION_PAGES,
} from "../../../constants/constants";
import {
  CopyrightSectionProps,
  FooterAreaProps,
  FooterProps,
  NavigationItemProps,
  NavigationSectionProps,
} from "./types";

import { isEqualName } from "../../helpers";
import useMediaQuery from "../../../hooks/useMediaQuery";
import DebugInfo from "../../molecules/debug-info";
import { calculateFooterDimensions } from "./helper";
import ScrollToTopButton from "./ScrollToTopButton";

const CopyrightStyles = tv({
  base: "flex items-center text-read-white-color text-[0.7rem] text-important-color",
  variants: {
    isDesktop: {
      true: "w-auto justify-end pr-7",
      false: "w-full justify-center",
    },
  },
});

const NavigationItemStyles = tv({
  base: `
    flex items-center justify-center
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

const CopyrightSection = ({ isDesktop, height }: CopyrightSectionProps) => {
  return (
    <div
      className={CopyrightStyles({ isDesktop })}
      style={{ height: `${height}vh` }}
    >
      <span>{copyRightText}</span>
    </div>
  );
};

const NavigationSection = ({ pages, height }: NavigationSectionProps) => {
  const { isDesktop } = useMediaQuery();
  const location = useLocation();

  return (
    <div className="flex flex-row">
      {pages.map((page) => (
        <NavigationItem
          key={page.to}
          page={page}
          isDesktop={isDesktop}
          currentPath={location.pathname}
          height={height}
        />
      ))}
    </div>
  );
};
const NavigationItem = ({
  page,
  isDesktop,
  currentPath,
  height,
}: NavigationItemProps) => {
  const isCurrentPage = currentPath === page.to;
  const activePageClasses = isCurrentPage
    ? "bg-primary-color text-secondary-color font-bold"
    : "";

  return (
    <Link
      key={page.to}
      to={page.to}
      className={`${NavigationItemStyles({
        isDesktop,
      })} ${activePageClasses}`}
      style={{ height: `${height}vh` }}
    >
      {page.label}
    </Link>
  );
};

const Footer = ({ debug = false, footerHeight = 24 }: FooterProps) => {
  const { isDesktop } = useMediaQuery();
  const location = useLocation();

  const isNavigationHidden = !isDesktop;
  const showContactInfo = isEqualName(location.pathname, BLOG_PAGE);

  const { backgroundHeight, navigationHeight } = calculateFooterDimensions(
    footerHeight,
    isNavigationHidden
  );

  const FooterArea = ({
    isDesktop,
    showContactInfo,
    height,
    isDebugMode = false,
    children,
  }: FooterAreaProps) => {
    const navigationStyles = tv({
      base: "flex bg-secondary-color fixed bottom-0 w-full justify-between border-important-color transition-all duration-200 ease-in-out",
      variants: {
        isDesktop: {
          true: "flex-row",
          false: "flex-col",
        },
        showContactInfo: {
          true: "",
          false: "border-t-4 border-solid",
        },
        debug: {
          true: "border-4 border-red-500 border-solid",
          false: "",
        },
      },
    });

    return (
      <div
        className={navigationStyles({
          isDesktop,
          showContactInfo,
          debug: isDebugMode,
        })}
        style={{ height: `${height}vh` }}
      >
        {children}
      </div>
    );
  };

  const FooterContent = () => {
    return (
      <>
        <NavigationSection pages={NAVIGATION_PAGES} height={navigationHeight} />
        <CopyrightSection isDesktop={isDesktop} height={navigationHeight} />
      </>
    );
  };

  return (
    <>
      {!isNavigationHidden && (
        <FooterArea
          isDesktop={isDesktop}
          showContactInfo={showContactInfo}
          height={navigationHeight}
          isDebugMode={debug}
        >
          <FooterContent />
        </FooterArea>
      )}

      {isNavigationHidden && <ScrollToTopButton />}

      {debug && (
        <DebugInfo
          allComponentsHeight={[backgroundHeight, navigationHeight]}
          areaHeight={footerHeight}
        />
      )}
    </>
  );
};
export default Footer;
