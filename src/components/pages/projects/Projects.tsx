import useMediaQuery from "../../../hooks/useMediaQuery";
import PageContentLayout from "../../templates/page-content-layout/Page-Content-Layout";
import Card from "./Card";

const Projects = () => {
  const Content = () => {
    const { isDesktop } = useMediaQuery();
    const isMobile = !isDesktop;

    return (
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 max-w-screen-xl mx-auto">
        {Array(4)
          .fill(null)
          .map((_, i) => {
            const isRequiredFullWidth = !!isMobile || i === 0;
            const isCardVertical = isMobile === true || i !== 0;
            return (
              <Card
                isCardVertical={isCardVertical}
                isRequiredFullWidth={isRequiredFullWidth}
                i={i}
              />
            );
          })}
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
