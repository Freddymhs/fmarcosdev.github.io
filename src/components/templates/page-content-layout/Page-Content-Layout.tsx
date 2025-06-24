type PageContentLayoutProps = {
  content: {
    title: string;
    content: React.ReactNode;
    subtitle?: string;
  };
};

const PageContentLayout = ({
  content: { title, content, subtitle },
}: PageContentLayoutProps) => {
  return (
    <section className="w-full py-16 bg-cv-yellow">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-mono mb-5">
          {title}
        </h2>
        <h3 className="text-center  font-mono mb-7">{subtitle}</h3>
        {content}
      </div>
    </section>
  );
};

export default PageContentLayout;
