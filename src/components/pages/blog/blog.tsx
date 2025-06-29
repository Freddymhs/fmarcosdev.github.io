import { useEffect, useState } from "react";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
import HelicalScrollCards from "./Oscilospira";
import HeaderBlog from "./headerBlog";

interface ArticleRaw {
  id: number;
  Title: string;
  richContent: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<ArticleRaw[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filterHeight, setFilterHeight] = useState(0);

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

  // Medir la altura de la sección de filtros
  useEffect(() => {
    const measureFilterHeight = () => {
      const filterElement = document.getElementById("filter-section");
      if (filterElement) {
        setFilterHeight(filterElement.offsetHeight);
      }
    };

    measureFilterHeight();
    window.addEventListener("resize", measureFilterHeight);
    return () => window.removeEventListener("resize", measureFilterHeight);
  }, []);

  if (loading) return;

  const updateSelectedCard = (selected: number) => {
    setShowModal(!showModal);
    setSelectedCard(selected);
  };

  return (
    <>
      <HeaderBlog />
      <HelicalScrollCards hiddenReposition={false} />
    </>
  );
};

export default Blog;
