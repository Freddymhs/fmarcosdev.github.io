import PageContentLayout from "../../templates/page-content-layout/Page-Content-Layout";
import resumeData from "../../../../resume.json";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Card from "./Card";
import { Project } from "../../../types/projects";
import { Cloudinary } from "@cloudinary/url-gen";

const Projects = () => {
  const projects = resumeData.projects as Project[];

  return (
    <PageContentLayout
      strech={true}
      content={{
        title: "Proyectos",
        subtitle:
          "Colección de proyectos web que he desarrollado, desde sitios informativos hasta aplicaciones móviles y herramientas interactivas",
        content: <CardsContainer projects={projects} />,
      }}
    />
  );
};

export default Projects;

const CardsContainer = ({ projects }: { projects: Project[] }) => {
  const { isDesktop } = useMediaQuery();
  const isMobile = !isDesktop;
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDNAME,
    },
  });
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-4 max-w-screen-xl mx-auto">
      {projects.map((props, i) => {
        return (
          <Card
            i={i}
            featured={i === 0}
            isMobile={isMobile}
            data={props}
            cld={cld}
          />
        );
      })}
    </div>
  );
};
