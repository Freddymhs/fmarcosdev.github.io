import { FC } from "react";
import { tv } from "tailwind-variants";
import { Link } from "react-router";
import { NAVIGATION_PAGES } from "../../../constants/constants";

interface SidebarProps {
  open: boolean;
}

export const SideBar: FC<SidebarProps> = ({ open }) => {
  return (
    <div className={sidebarContainerStyle({ open })}>
      <ul>
        {NAVIGATION_PAGES.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <li key={to}>
              <Link
                to={to}
                className={`${navItemStyle()} ${
                  isActive ? " bg-important-color text-primary-color " : ""
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const sidebarContainerStyle = tv({
  base: `w-[70%] h-screen fixed top-0 left-0 z-1 bg-secondary-color   text-read-white-color z-10000
  transform transition-transform duration-200`,
  variants: {
    open: {
      true: "translate-x-0",
      false: "-translate-x-full",
    },
  },
});

const navItemStyle = tv({
  base: `h-[4.94em] block p-2 
   no-underline cursor-pointer 
   hover:bg-read-color 
   font-bold
   
  `,
});
