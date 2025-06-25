import { Download, ExternalLink } from "lucide-react";
import resumeData from "../../../../resume.json";
import PageContentLayout from "../../templates/page-content-layout/Page-Content-Layout";

const Certificates = () => {
  const { certificates } = resumeData;

  const Content = () => {
    return (
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="bg-cv-light rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="w-full h-64 flex items-center justify-center p-2">
                  <img
                    src={"certificates/" + cert.name + ".png"}
                    alt={cert.name}
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-lg text-cv-dark font-mono truncate">
                    {cert.name.replace(/-/g, " ")}
                  </h3>
                  <p className="text-sm text-cv-secondary">
                    {cert.issuer} • {cert.date}
                  </p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <button
                      onClick={() => window.open(cert.url, "_blank")}
                      className="flex items-center text-cv-secondary hover:opacity-80"
                    >
                      <ExternalLink size={14} className="mr-1" /> Ver
                    </button>
                    <a href={`certificates/${cert.name}.png`} download>
                      <button className="flex items-center text-cv-green hover:opacity-80">
                        <Download size={14} className="mr-1" /> Descargar
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <PageContentLayout
      strech={true}
      content={{ title: "Certificados", content: <Content /> }}
    />
  );
};

export default Certificates;
