import { Navigate, Route, Routes, useNavigate } from "react-router";
import "./App.css";
import MainLayout from "./components/templates/main-layout/MainLayout";
import BlogLayout from "./components/templates/blog-layout/BlogLayout";
import {
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  HOME_PAGE,
  SOCIAL_PAGE,
  WELCOME_MESSAGES,
} from "./constants/constants";
import { AboutMe, Blog, Certificates, Social } from "./components/pages";
import { useEffect, useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(
      WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)]
    );
    const timer = setTimeout(() => navigate(HOME_PAGE), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const routesWithLayout = (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <div className="loader"></div>
            <div className="text">{message}</div>
            <style>
              {`
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #f1de63;
            color: #252830;
            font-family: "Courier New", Courier, monospace;
            overflow: hidden;
          }
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            position: relative;
          }
          .loader {
            border: 16px solid #095957;
            border-top: 16px solid #252830;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .text {
            margin-top: 20px;
            text-align: center;
            font-size: 1.5rem;
          }
        `}
            </style>
          </div>
        }
      />
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
