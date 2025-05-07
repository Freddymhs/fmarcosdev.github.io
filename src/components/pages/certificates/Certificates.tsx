import { useState } from "react";
import {
  Download,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Award,
} from "lucide-react";
import resumeData from "../../../../resume.json";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Certificates = () => {
  const { certificates } = resumeData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDesktop } = useMediaQuery();

  const handlePrevious = () =>
    setCurrentIndex((i) => (i === 0 ? certificates.length - 1 : i - 1));
  const handleNext = () =>
    setCurrentIndex((i) => (i === certificates.length - 1 ? 0 : i + 1));

  const visible = isDesktop
    ? certificates.slice(currentIndex, currentIndex + 3)
    : certificates.slice(currentIndex, currentIndex + 1);

  const navBtn =
    "p-2 rounded-full bg-cv-light text-cv-dark shadow-md hover:scale-110 transition bg-important-color cursor-pointer";

  return (
    <section className="w-full py-16 bg-cv-yellow">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cv-dark font-mono mb-12">
          Certificaciones
        </h2>

        {isDesktop && (
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevious} className={navBtn}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className={navBtn}>
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {visible.map((cert) => (
            <div key={cert.name} className="w-full px-2">
              <div className="bg-cv-light rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform ">
                <div className="relative">
                  <Award size={21} className="ml-1" />

                  <img
                    src={"certificates/" + cert.name + ".png"}
                    alt={cert.name}
                    className="w-full h-55 object-contain"
                  />
                </div>
                <div className="px-2 py-1">
                  <h3 className="font-semibold text-lg text-cv-dark font-mono truncate">
                    {cert.name.replace(/-/g, " ")}
                  </h3>
                  <p className="text-sm text-cv-secondary">
                    {cert.issuer} • {cert.date}
                  </p>
                  <div className="flex gap-5 mt-2 text-xs ">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(cert.url, "_blank");
                      }}
                      className="flex items-center text-cv-secondary hover:opacity-80 cursor-pointer"
                    >
                      <ExternalLink size={14} className="mr-1" /> Ver
                    </button>
                    <a href={"certificates/" + cert.name + ".png"} download>
                      <button className="flex items-center text-cv-green hover:opacity-80 cursor-pointer  ">
                        <Download size={14} className="mr-1" /> Descargar
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isDesktop && (
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={handlePrevious} className={navBtn}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className={navBtn}>
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
