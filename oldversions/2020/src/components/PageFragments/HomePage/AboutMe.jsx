import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"

import SEO from "../../Seo"

const pageText = {
  paraOne: `Hola mi nombre es Freddy Marcos Huaylla Silvestre ,  soy Desarrollador Web mas enfocado al Front-End y Microservicios
  , me apasionan las nuevas tecnologias con las que intento experimentar para aprender continuamente.
  En la Universidad aprendi PHP pero ahora llevo casi 1 año desde que conoci React entre otras tecnologias y frameworks por lo que me enfoque mas en javascript.
  `,
  paraTwo: `
  Inicie aprendiendo Arquitecturas monoloticas con MVC en PHP pero ahora pruebo usar Microservicios gracias a Firebase ,
   Graphql entre otras herramientas considero mas simple el control de datos para proyectos startups , siempre e trabajado con Bootstrap 
   pero ahora tambien creo mis propios componentes pensando en "Atom Design" , Me gusta Crear Apis REST para remover dependencias
   directar y asi crear APPs multientorno con un mismo back-end.
  <br/>
  <br/>
   Mantendre mi Blog actualizando para contenido documentar lo que aprendo en internet y quizas pueda apoyar a mas como yo!

  `,
}

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            "Desarrollador web y movil",
            "Freddy",
            "Huaylla",
            "Arica",
            "FullStack developer",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "Gatsby",
            "PHP",
            "Python",
          ]}
        />
        <h1 className="titleSeparate">Sobre Mi</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="ubicacion fmarcosdev"
            textH4="Lugar de Nacimiento"
            textH3="Arica, Chile"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="cafe fmarcosdev"
            textH4="Cafe puro"
            textH3="Cafe + Yo = Felicidad"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="socialmente fmarcosdev"
            textH4="Socialmente Distante"
            textH3="en ocaciones"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="game.png"
            alt="gaming fmarcosdev"
            textH4="Creo que los Juegos son Arte "
            textH3="Witcher 3,Undertale <3"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Programador Autodidacta"
            textH3="Gracias a todos los que comparten"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Titulado en 2019"
            textH3="Tecnico Superior Analista Programador"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  )
}
export default AboutMe
