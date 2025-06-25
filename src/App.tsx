import packageJson from "../package.json";
import { JSX, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router";
import MainLayout from "./components/templates/app-layout/MainLayout";
import LandingLayout from "./components/templates/landing-layout/Landing-layout";

import {
  CERTIFICATES_PAGE,
  HOME_PAGE,
  PROJECTS_PAGE,
  RoutePath,
  SOCIAL_PAGE,
  BLOG_PAGE,
  NO_INCLUDED_ROUTE_TO_PAGE,
  INITIAL_ROUTE,
  REGISTERED_PAGES,
} from "./constants/constants";
import {
  AboutMe,
  Certificates,
  LandingPage,
  Social,
  Projects,
  Blog,
} from "./components/pages";

const App = () => {
  const versionApp = useMemo(() => `V.${packageJson.version}`, []);

  const componentByRoute: Record<RoutePath, JSX.Element> = {
    [INITIAL_ROUTE]: (
      <LandingLayout version={versionApp} children={<LandingPage />} />
    ),
    [HOME_PAGE]: <AboutMe />,
    [SOCIAL_PAGE]: <Social />,
    [CERTIFICATES_PAGE]: <Certificates />,
    [PROJECTS_PAGE]: <Projects />,
    [BLOG_PAGE]: <Blog />,
    [NO_INCLUDED_ROUTE_TO_PAGE]: <Navigate to={HOME_PAGE} replace />,
  };

  const rawRoutes = REGISTERED_PAGES.map(({ to }) => {
    return {
      path: to,
      element: componentByRoute[to],
    };
  });
  const buildedRoutes = rawRoutes.map((route, index) => {
    const { element, path } = route;

    if (path === INITIAL_ROUTE) {
      return <Route key={index} path={path} element={element} />;
    }

    if (path === BLOG_PAGE) {
      return (
        <Route
          key={index}
          path={path}
          element={<MainLayout>{element}</MainLayout>}
        />
      );
    }

    return (
      <Route
        key={index}
        path={path}
        element={<MainLayout>{element}</MainLayout>}
      />
    );
  });

  const routesWithLayout = <Routes>{...buildedRoutes}</Routes>;
  return routesWithLayout;
};

export default App;
