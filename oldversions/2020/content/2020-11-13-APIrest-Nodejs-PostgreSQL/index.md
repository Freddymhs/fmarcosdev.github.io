---
title: "APIrest-Nodejs-PostgreSQL"
path: blog/APIrest-Nodejs-PostgreSQL
tags: [nodejs, sql]
cover: ./KZ.PNG
date: 2020-11-13
excerpt: APIrest-Nodejs-PostgreSQL
---

npm init -y en carpeta vacia
yarn add express pg
yarn add nodemon -D // script = "dev":"nodemon src/index.js"

- crear src // ejecutara todo nuestro contenido
- crear controllers // crear peticiones para pasarse a las rutas
- crear routes // crear rutas

`src necesita ejecutar el servidor`
`routes entregaran rutas `
`controllers `

`crear rutas rapidas`
routes → Cria a classe de rotas do express

- snippets de express
  app → Cria classe principal do express
  sch → Cria um schema do mongoose
  mod → Cria um model do sequelize
  db → Cria classe de conexão de banco de dados postgres/mongodb
  cfc → Cria um controller com todos os métodos
  cst → Cria um controller com o método store
  cin → Cria um controller com o método index
  ccr → Cria um controller com o método create
  csh → Cria um controller com o método show
  ced → Cria um controller com o método edit
  cup → Cria um controller com o método update
  cde → Cria um controller com o método destroy
  cvi → Cria um controller com o método view
  cgr → Cria um controller com o método grid
  cfo → Cria um controller com o método form
  st → Cria o método store
  in → Cria o método index
  cr → Cria o método create
  sh → Cria o método show
  ed → Cria o método edit
  up → Cria o método update
  dt → Cria o método destroy
  de → Cria o método delete
  vi → Cria o método view
  gr → Cria o método grid
  fo → Cria o método form
