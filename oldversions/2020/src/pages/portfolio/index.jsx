import React from "react"
import { Layout } from "antd"
import Header from "../../components/PageLayout/Header"

import SidebarWrapper from "../../components/PageLayout/Sidebar"
import AboutMe from "../../components/PageFragments/HomePage/AboutMe"
import Skills from "../../components/PageFragments/HomePage/SkillProgress"
import SEO from "../../components/Seo"

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Portafolio"
        description="Hola mi nombre es Freddy Marcos Huaylla Silvestre , soy Desarrollador Web mas enfocado al Front-End y Microservicios , me apasionan las nuevas tecnologias..."
        path="/portfolio"
        keywords={[
          "Freddy",
          "Huaylla",
          "FmarcosDev",
          "Desarrollador Web y Movil",
          "Javascript",
          "ReactJS",
          "NodeJS",
          "Gatsby",
          "technology",
          "Startup",
          "Arica Programador",
        ]}
      />
      <Header />
      <SidebarWrapper>
        <>
          por ahora todo en github.
          {/* <AboutMe /> */}
          {/* <Skills /> */}
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
)
