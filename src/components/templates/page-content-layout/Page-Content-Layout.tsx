import { tv } from "tailwind-variants";

type PageContentLayoutProps = {
  strech: boolean;
  content: {
    title: string;
    content: React.ReactNode;
    subtitle?: string;
  };
};

const spaceContainer = tv({
  base: "mx-auto px-4",
  variants: {
    strech: {
      true: "container",
      false: "",
    },
  },
});
const PageContentLayout = ({
  strech,
  content: { title, content, subtitle },
}: PageContentLayoutProps) => {
  return (
    <section className="w-full py-16 ">
      <div className={`${spaceContainer({ strech })} `}>
        <h2 className="text-3xl font-bold text-center font-mono mb-5 text-important-color">
          {title}
        </h2>
        <h3 className="text-center  font-mono mb-7">{subtitle}</h3>
        {content}
      </div>
    </section>
  );
};

export default PageContentLayout;
