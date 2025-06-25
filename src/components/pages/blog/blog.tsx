import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import PageContentLayout from "../../templates/page-content-layout/Page-Content-Layout";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";

interface ArticleRaw {
  id: number;
  richContent: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<ArticleRaw[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3033/Articles")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta");
        return res.json();
      })
      .then((data: ArticleRaw[]) => setArticles(data))
      .catch((error) => console.error("Error al cargar artículos:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Cargando artículos...</p>;

  return (
    <PageContentLayout
      strech={true}
      content={{
        title: "Blog",
        content: (
          <>
            {articles.map((article) => (
              <article
                key={article.id}
                className="prose prose-lg
                 max-w-none 
                 p-10 border-0 mb-12
                 rounded-2xl shadow-2xl shadow-amber-500/10
                 bg-important-color 
                 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-700 
                 ring-1 ring-slate-200/60 backdrop-blur-md 
                 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkEmoji, remarkMath]}
                  rehypePlugins={[rehypeHighlight, rehypeKatex, rehypeSlug]}
                >
                  {article.richContent}
                </ReactMarkdown>
              </article>
            ))}
          </>
        ),
      }}
    />
  );
};

export default Blog;
