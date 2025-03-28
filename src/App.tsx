import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./components/templates/main-layout/MainLayout";
import BlogLayout from "./components/templates/blog-layout/BlogLayout";
import {
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  HOME_PAGE,
  SOCIAL_PAGE,
} from "./constants/constants";
import {
  AboutMe,
  Blog,
  Certificates,
  LandingPage,
  Social,
} from "./components/pages";

const App = () => {
  const routesWithLayout = (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path={HOME_PAGE}
        element={
          <MainLayout>
            <AboutMe />
          </MainLayout>
        }
      />
      <Route
        path={SOCIAL_PAGE}
        element={
          <MainLayout>
            <Social />
          </MainLayout>
        }
      />
      <Route
        path={CERTIFICATES_PAGE}
        element={
          <MainLayout>
            <Certificates />
          </MainLayout>
        }
      />
      <Route
        path={BLOG_PAGE}
        element={
          <BlogLayout>
            <Blog />
          </BlogLayout>
        }
      />
      <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
    </Routes>
  );
  return routesWithLayout;
};

export default App;
