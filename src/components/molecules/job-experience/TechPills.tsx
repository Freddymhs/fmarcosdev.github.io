import { techColors } from "../../../constants/constants";

type TechPillsProps = {
  tech: string;
  showItem: boolean;
  index: number;
};

const getTechColor = (tech: string) =>
  techColors[tech] || "bg-gray-100 text-gray-800";

export const TechPills = ({ tech, showItem, index }: TechPillsProps) => {
  return (
    <span
      key={index}
      className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${getTechColor(
        tech
      )} ${showItem ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {tech}
    </span>
  );
};
