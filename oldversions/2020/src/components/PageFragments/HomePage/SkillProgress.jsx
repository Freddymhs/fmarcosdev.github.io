import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2>Habilidades</h2>

    <Row gutter={[20, 20]}>
      <Col xs={24} md={12} xl={12}>
        <Col xs={24}>
          <h2>Front End</h2>
          <ProgressBar percent={100} text="Bootstrap" />
          <ProgressBar percent={85} text="Materialize" />
          <ProgressBar percent={100} text="HTML , CSS" />
          <ProgressBar percent={90} text="JS es6 (Client)" />
          <ProgressBar percent={70} text="Axios" />
        </Col>
        <Col xs={24}>
          <h2>Frameworks Front End</h2>
          <ProgressBar percent={90} text="Gatsby" />
        </Col>
        <Col xs={24}>
          <h2>Herramientas</h2>
          <ProgressBar percent={70} text="GitHub" />
          <ProgressBar percent={70} text="Heroku" />
          <ProgressBar percent={70} text="Netlify" />
          <ProgressBar percent={100} text="Figma" />
          <ProgressBar percent={75} text="Slack" />
          <ProgressBar percent={75} text="Canva" />
          <ProgressBar percent={90} text="Linux" />
          <ProgressBar percent={80} text="Windows" />
        </Col>

        <Col xs={24}>
          <h2>Desarrollo Moviles</h2>
          <ProgressBar percent={75} text="React Native" />
        </Col>

        <Col xs={24}>
          <h2>Nivel Ingles</h2>
          <ProgressBar percent={80} text="Escrito" />
          <ProgressBar percent={60} text="Hablado" />
        </Col>
      </Col>
      {/*  */}
      <Col xs={24} md={12} xl={12}>
        <Col xs={24}>
          <h2>Back End</h2>
          <ProgressBar percent={90} text="Javascript es6 (Server)" />
          <ProgressBar percent={90} text="Python" />
          <ProgressBar percent={90} text="Ruby" />
        </Col>
        <Col xs={24}>
          <h2>Frameworks Back End</h2>
          <ProgressBar percent={60} text="Express JS" />
          <ProgressBar percent={75} text="Gatsby JS" />
        </Col>
        <Col xs={24}>
          <h2>ORM para BD</h2>
          <ProgressBar percent={85} text="Mongoose" />
          <ProgressBar percent={80} text="Sequelize" />
          <ProgressBar percent={75} text="GraphQL" />
        </Col>
        <Col xs={24}>
          <h2>Base de Datos</h2>
          <ProgressBar percent={90} text="MySQL" />
          <ProgressBar percent={85} text="PostreSQL" />
          <ProgressBar percent={90} text="Firebase" />
          <ProgressBar percent={75} text="MongoDB" />
        </Col>
        <Col xs={24}>
          <h2>Otros conocimientos</h2>
          <ProgressBar percent={100} text="API REST" />
          <ProgressBar percent={100} text="MVC" />
          <ProgressBar percent={100} text="Atomic Design " />
          <ProgressBar percent={90} text="SEO , UX ,UI" />
          <ProgressBar percent={90} text="Website/Serverless" />
          <ProgressBar percent={50} text="PWA" />
          <ProgressBar percent={65} text="MPA ,SPA" />
          <ProgressBar percent={70} text="Responsive Design" />
          <ProgressBar percent={80} text="Estandares Eslint" />
        </Col>
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
