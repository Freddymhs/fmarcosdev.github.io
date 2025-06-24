import { techColors } from "../../../constants/constants";
import TechContainer from "../../atoms/techContainer";

type ShowPillsProps = {
  items: string[];
  max?: number;
  format?: "pill" | "box";
};

const getTechColor = (tech: string) =>
  techColors[tech] || "bg-gray-100 text-gray-800";

const TechPill = ({ tech, index }: { tech: string; index: number }) => (
  <span
    className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${getTechColor(
      tech
    )} opacity-100 scale-100`}
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    {tech}
  </span>
);

const BoxPill = ({ feature }: { feature: string }) => (
  <span className="text-xs bg-read-color text-white-area-color px-2 py-1 rounded border flex items-center gap-1">
    <span>✨</span> {feature}
  </span>
);

const ShowPills = ({
  items = [],
  max = 10,
  format = "pill",
}: ShowPillsProps) => {
  const visibleItems = items.slice(0, max);
  const hiddenItems = items.slice(max);

  return (
    <TechContainer>
      {visibleItems.map((item, index) =>
        format === "pill" ? (
          <TechPill key={index} tech={item} index={index} />
        ) : (
          <BoxPill key={index} feature={item} />
        )
      )}

      {hiddenItems.length > 0 && (
        <span className="relative group text-xs text-secondary-color/70 px-2 py-1 select-none cursor-pointer">
          +{hiddenItems.length} más
          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded shadow top-full left-1/2 -translate-x-1/2 mt-1 z-10 whitespace-nowrap">
            {hiddenItems.join(", ")}
          </div>
        </span>
      )}
    </TechContainer>
  );
};

export default ShowPills;
