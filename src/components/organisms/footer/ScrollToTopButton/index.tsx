import { LucideArrowBigUpDash } from "lucide-react";
import { tv } from "tailwind-variants";
import { FOOTER_CONFIG } from "../helper";

const scrollToPageTop = () => {
  window.scrollTo({
    top: 0,
    behavior: FOOTER_CONFIG.SCROLL_BEHAVIOR,
  });
};
const ScrollToTopButton = () => {
  const buttonStyles = createScrollToTopButtonStyles();

  return (
    <button
      className={buttonStyles()}
      onClick={scrollToPageTop}
      aria-label="Scroll to top"
    >
      <LucideArrowBigUpDash size={20} />
    </button>
  );
};

export default ScrollToTopButton;

const createScrollToTopButtonStyles = () =>
  tv({
    base: `
    fixed bottom-7 right-7
    bg-read-color text-primary-color
    rounded-full p-3 shadow-lg
    hover:bg-important-color hover:text-read-color
    cursor-pointer 
  `,
  });
