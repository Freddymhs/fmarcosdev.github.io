// import useMediaQuery from "../../../hooks/useMediaQuery";
import PageContentLayout from "../../templates/page-content-layout/Page-Content-Layout";
import Card from "./Card";
// import Card from "./Card";

const Projects = () => {
  const Content = () => {
    // const { isDesktop } = useMediaQuery();
    return (
      <div className="flex flex-wrap gap-4 w-full max-w-screen-xl mx-auto ">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className={` ${
                i === 0 ? "w-full" : "w-full md:w-[calc(50%-0.5rem)]"
              }`}
            >
              <Card />
            </div>
          ))}
      </div>
    );
  };

  return (
    <PageContentLayout
      content={{
        title: "Proyectos",
        subtitle:
          "Una coleccion de proyectos web que he desarrollado ,desde sitios informativos hasta aplicaciones utiles y de tipo mobile",
        content: <Content />,
      }}
    />
  );
};

export default Projects;
{
  /* text-sm text-center bg-primary-color  my-1 rounded-full font-semibold w-1/4 */
}
