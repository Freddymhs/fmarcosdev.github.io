// MainLayout.tsx
import React, { ReactNode } from "react";
import HeaderNavigation from "../../molecules/header-navigation/HeaderNavigation";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <HeaderNavigation />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>

      {/* <footer
        style={{
          backgroundColor: "#e0e0e0",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Mi Aplicación</p>
      </footer> */}
    </div>
  );
};

export default MainLayout;
