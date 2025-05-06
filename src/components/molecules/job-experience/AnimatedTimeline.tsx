import { useEffect, useRef, useState } from "react";
import resumeData from "../../../../resume.json";
import {
  awardsText,
  professionalExperienceText,
  techColors,
} from "../../../constants/constants";

interface ItemProps {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights?: string[];
  technologies?: string[];
}
// todo , this sohuld be in a helper
const getTechColor = (tech: string) =>
  techColors[tech] || "bg-gray-100 text-gray-800";

const formatDate = (date: string) => {
  if (!date) return "No disponible";
  try {
    const [year, month] = date.split("-");
    const dateObj = new Date(Number(year), Number(month) - 1);
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "short",
    }).format(dateObj);
  } catch {
    return date;
  }
};

function TimelineItem({
  name,
  position,
  startDate,
  endDate,
  summary,
  highlights = [],
  technologies = [],
}: ItemProps) {
  const [showItem, setShowItem] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = itemRef.current;
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowItem(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    observer.observe(targetElement);
    return () => observer.disconnect();
  }, []);

  const Dot = () => {
    return (
      <div className="absolute -left-3 top-4 h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-md">
        <div className="h-2 w-2 rounded-full bg-read-white-color animate-pulse" />
      </div>
    );
  };
  const NameAndDate = () => {
    return (
      <div className="sm:w-28 flex-shrink-0">
        <span className="text-primary font-bold text-lg block">{name}</span>
        <div className="text-xs font-medium text-muted-foreground mt-1 flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/30" />
          <span className="truncate">
            {formatDate(startDate)} – {formatDate(endDate)}
          </span>
        </div>
      </div>
    );
  };
  const Summary = () => (
    <div className="flex-1">
      <h3 className="text-xl font-bold text-foreground mb-2 relative group-hover:text-primary transition-colors duration-300">
        <span>{position}</span>
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary/20 rounded-r-md hidden sm:block" />
      </h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        <span className="text-primary font-semibold text-base">
          {summary.charAt(0)}
        </span>
        {summary.slice(1)}
      </p>

      {highlights.length > 0 && (
        <div className="mb-4 bg-muted/30 p-3 rounded-md border-l-2 border-primary/30">
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {awardsText}
          </h4>

          <ul className="space-y-2">
            {highlights.map((item, index) => (
              <li
                key={index}
                className={`flex items-start text-sm transition-all duration-300 ${
                  showItem
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                *
                <span className="inline-block w-1 h-1 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${getTechColor(
                tech
              )} ${showItem ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
  return (
    <div
      ref={itemRef}
      className={`relative px-5      border border-dashed rounded  `}
    >
      <Dot />
      <div
        className={`
        flex flex-col sm:flex-row  my-3 rounded-lg p-5 transition-all duration-300 ${
          showItem && "scale-[1.07]"
        }        `}
      >
        <NameAndDate />
        <Summary />
      </div>
    </div>
  );
}

const AnimatedTimeline = () => {
  const { work } = resumeData;

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <h2
        className=" text-2xl md:text-3xl font-bold text-center mb-12 relative opacity-100 animate-fadeDown"
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <span>{professionalExperienceText}</span>

        <div className="absolute left-1/2 -bottom-3 w-16 h-1 bg-primary/30 rounded-full transform -translate-x-1/2" />
      </h2>

      <div className="space-y-2">
        {work.map((item, index) => (
          <TimelineItem
            key={`${item.name}-${index}`}
            name={item.name}
            position={item.position}
            startDate={item.startDate}
            endDate={item.endDate}
            summary={item.summary}
            highlights={item.highlights}
            technologies={item.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimatedTimeline;
