import { Calendar, GithubIcon, Link } from "lucide-react";
import { TechPills } from "../../molecules/job-experience/TechPills";
import IconButton from "./IconButton";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface InterfaceCardProps {
  isRequiredFullWidth?: boolean;
  isCardVertical?: boolean;
  i?: number;
}

const Card = ({
  isRequiredFullWidth,
  isCardVertical,
  i,
}: InterfaceCardProps) => {
  const firstElements = i === 0;
  return (
    <div
      key={i}
      className={`${
        isRequiredFullWidth ? "w-full" : "w-full md:w-[calc(50%-0.5rem)]"
      } `}
    >
      <div
        className={`bg-red-300 shadow rounded bg-white-area-color border border-dashed
        flex ${isCardVertical ? "flex-col" : "flex-row"}`}
      >
        {/*  */}
        <div className="  flex-1 bg-read-color">
          <div className="relative aspect-[3/2] min-h-full max-w-full bg-gray-100 flex items-center justify-center rounded-sm mx-auto  ">
            {firstElements && (
              <p className="absolute top-2 left-2 bg-primary-color text-xs font-semibold px-3 py-1 my-2 ml-1 rounded-full">
                Proyecto Destacado
              </p>
            )}
            img aca
          </div>
        </div>
        {/*  */}
        <div className="  flex-1 w-full flex justify-center items-center ">
          <div className="w-full h-full p-10   flex flex-col justify-center">
            <div className="flex items-center mt-4 gap-3 mb-4  ">
              <p className="bg-read-white-color border border-2 rounded-full px-3 py-1 truncate">
                Tipo Project - Web Comporation
              </p>

              <Calendar size={18} className="text-secondary-color/70" />
              <p className="text-secondary-color/70">2024</p>
            </div>
            <h3 className="text-2xl font-semibold font-mono mb-2">
              GEOTRANS - Maquinarias y Transportes
            </h3>
            <p className="text-sm text-secondary-color/70 mb-4">
              Sitio web corporativo para empresa de maquinarias pesadas con 10
              años de experiencia en el sector
            </p>
            <div className="flex flex-wrap gap-2">
              <TechPills tech="React" showItem={true} index={0} />
              <TechPills tech="Nextjs" showItem={true} index={1} />
              <TechPills tech="Tailwind" showItem={true} index={2} />
              <TechPills tech="Typescript" showItem={true} index={3} />
            </div>
            <div className="flex gap-2 mt-4">
              <div className="flex-1">
                <IconButton icon={<Link size={18} />} title="Ver Proyecto" />
              </div>
              <div>
                <IconButton
                  icon={<GithubIcon size={18} />}
                  title="Código"
                  type="small"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Card;
