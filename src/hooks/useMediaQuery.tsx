import { useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 613px)";
const MORE_THAN_SMALL_QUERY = "(min-width: 401px)";

export default function useMediaQuery() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMoreThanSmall, setIsMoreThanSmall] = useState(false);

  useEffect(() => {
    const desktopMedia = window.matchMedia(DESKTOP_QUERY);
    const smallMedia = window.matchMedia(MORE_THAN_SMALL_QUERY);

    const updateIsDesktop = () => setIsDesktop(desktopMedia.matches);
    const updateIsMoreThanSmall = () => setIsMoreThanSmall(smallMedia.matches);

    updateIsDesktop();
    updateIsMoreThanSmall();

    desktopMedia.addEventListener("change", updateIsDesktop);
    smallMedia.addEventListener("change", updateIsMoreThanSmall);

    return () => {
      desktopMedia.removeEventListener("change", updateIsDesktop);
      smallMedia.removeEventListener("change", updateIsMoreThanSmall);
    };
  }, []);

  return { isDesktop, isMoreThanSmall };
}
