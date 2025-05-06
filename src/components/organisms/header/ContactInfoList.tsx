import { tv } from "tailwind-variants";
import { contactsData } from "../../../constants/constants";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Download, Copy, ExternalLink } from "lucide-react";
import cv from "../../../generate-resume-files-by-workflow/cv.pdf";

export const ContactInfoList = () => {
  const { isDesktop } = useMediaQuery();
  // todo usar el type para mostrar icono mas adecuado como correo u otro en vez de la flecha
  const contactItems = contactsData.map(({ name, url }, index) => {
    return (
      <div key={index} className={contactItemWrapperStyle({ isDesktop })}>
        <span className={contactNameStyle({ isDesktop })}>{name}</span>
        <a
          href={url.includes("@") ? `mailto:${url}` : url}
          target="_blank"
          rel="noopener noreferrer"
          className={contactButtonStyle({ isDesktop })}
        >
          <ExternalLink size={17} />
        </a>
        <button
          className={contactButtonStyle({ isDesktop })}
          onClick={() => navigator.clipboard.writeText(url)}
        >
          <Copy size={17} />
        </button>
      </div>
    );
  });

  return (
    <div className={containerStyle({ isDesktop })}>
      <a
        href={cv}
        download="fullstack-freddy-huaylla-cv.pdf"
        className={downloadCvStyle({ isDesktop })}
      >
        Download CV
        <Download size={18} className="ml-5" />
      </a>

      <div className={contactsContainerStyle({ isDesktop })}>
        {contactItems}
      </div>
    </div>
  );
};

const contactButtonStyle = tv({
  base: `
flex items-center
    no-underline border border-dashed border-secondary-color rounded-none fill-none stroke-2 stroke-secondary-color flex hover:bg-secondary-color hover:text-primary-color hover:stroke-primary-color text-xl


  `,
  variants: {
    isDesktop: {
      false: "px-2",
      true: "px-5",
    },
  },
});

const contactNameStyle = tv({
  base: `truncate max-w-xs text-left overflow-hidden whitespace-nowrap flex-grow text-sm border border-dashed border-secondary-color rounded-none fill-none stroke-2 stroke-secondary-color flex hover:bg-secondary-color hover:text-primary-color hover:stroke-primary-color `,
  variants: {
    isDesktop: {
      true: "text-[0.8rem]",
      false: "text-[0.77rem]",
    },
  },
});

const containerStyle = tv({
  base: "w-full ",
  variants: {
    isDesktop: {
      true: "flex justify-between ",
    },
  },
});

const contactsContainerStyle = tv({
  base: "flex flex-col",
  variants: {
    isDesktop: {
      true: "w-1/2",
    },
  },
});

const contactItemWrapperStyle = tv({
  base: "flex",
  variants: {
    isDesktop: {
      true: "justify-end ",
    },
  },
});

const downloadCvStyle = tv({
  base: "flex items-center border border-dashed rounded-none  hover:bg-secondary-color hover:text-primary-color text-[0.9rem] ",
  variants: {
    isDesktop: {
      true: "justify-around px-21",
      false: "justify-center p-2",
    },
  },
});
