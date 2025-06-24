import { Calendar, GithubIcon, Link } from "lucide-react";
import IconButton from "../IconButton";
import ShowPills from "../../../molecules/job-experience/TechPills";
import { Project } from "../../../../types/projects";

import { AdvancedImage, placeholder, lazyload } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";

interface CardTypeProps {
  i: number;
  featured: boolean;
  isMobile: boolean;
  data: Project;
  cld: Cloudinary;
}

const Card = ({ i, featured, isMobile, data, cld }: CardTypeProps) => {
  const isRequiredFullWidth = !!isMobile || i === 0;
  const isCardVertical = isMobile === true || i !== 0;

  const {
    name,
    type,
    startDate,
    endDate,
    image: imageId,
    description,
    technologies,
    githubUrl,
    url,
    features,
    role,
    complexity,
  } = data;
  const cloudImageOptimized = cld.image(imageId).resize(scale().width(800));

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${startDate} - ${endDate}`;
    }
    return startDate;
  };

  return (
    <div
      key={i}
      className={`${
        isRequiredFullWidth ? "w-full" : "w-full md:w-[calc(50%-0.5rem)]"
      }
    transition-transform duration-400 ease-in-out
    hover:-rotate-1 
    rounded border border-dashed border-read-color
    bg-white-area-color 
    hover:border-2 hover:border-secondary-color
    
  `}
    >
      <div className={`flex ${isCardVertical ? "flex-col" : "flex-row"}`}>
        <div className="flex-5 bg-read-color">
          <div className="relative aspect-video min-h-full max-w-full bg-gray-100 flex items-center justify-center rounded-sm mx-auto">
            {featured && (
              <p className="absolute top-7 left-3 bg-primary-color text-xs font-semibold px-3 py-1 my-2 ml-1 rounded-full z-10">
                Proyecto Destacado
              </p>
            )}

            {complexity && (
              <p className="absolute bottom-2 right-2 bg-secondary-color/80 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                {complexity}
              </p>
            )}

            {role && (
              <p className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                {role}
              </p>
            )}
            <div className="h-full w-full overflow-hidden md:overflow-auto scrollbar-custom">
              <AdvancedImage
                cldImg={cloudImageOptimized}
                plugins={[placeholder({ mode: "blur" }), lazyload()]}
                className="h-full w-full object-cover object-top hover:h-auto hover:w-auto hover:min-w-full hover:min-h-full cursor-pointer bg-gray-200"
                alt={"image of " + name}
              />
            </div>
          </div>
        </div>

        <div className="flex-4 w-full flex justify-center items-center">
          <div className="w-full h-full p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center mt-4 gap-3 mb-4 ">
              <p className="bg-read-white-color  border-2 md:border-3 rounded-full px-5 py-0 md:py-1 align-center md:text-sm">
                {type}
              </p>
              <Calendar size={18} className="text-secondary-color/70" />
              <p className="text-secondary-color/70">{formatDateRange()}</p>
            </div>

            <h3 className="text-2xl font-semibold font-mono mb-2 group-hover:text-primary-color transition-colors">
              {name}
            </h3>

            <p className="text-sm text-secondary-color/70 mb-4">
              {description}
            </p>

            <ShowPills items={features} max={2} format="box" />

            <ShowPills items={technologies} max={11} format="pill" />

            <div className=" flex gap-3 ">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <IconButton icon={<Link size={18} />} title="Ver Proyecto" />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <IconButton
                  icon={<GithubIcon size={18} />}
                  title="Código"
                  type="small"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
