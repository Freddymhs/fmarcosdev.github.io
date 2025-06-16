---
title: "orm-sequelize en nodejs"
path: blog/orm-sequelize
tags: [sql,nodejs]
cover: ./sequelize.png
date: 2021-03-30
draw: true
excerpt: orm-sequelize
---

# instalacion
npm i sequelize  (adicionalmente puede requerir de otro modulos como [sqlite3,mysql,postgresql])
npm install --save-dev sequelize-cli

# montaje
**esto es opcional para mi ya que uso sequlize de una forma mas simple sin usar el CLI por lo que no uso el montaje automatico 'init'**
npx sequelize-cli init

# cambio de path para el orm https://sequelize.org/master/manual/migrations.html#the-sequelizerc-file
**esto es opcional para mi ya que uso sequlize de una forma mas simple sin usar el CLI por lo que no uso el montaje automatico 'init'**
<pre>mi configuracion personalizada del archivo .sequelizerc</pre>
```
// .sequelizerc

const path = require('path');

module.exports = {
  'config': path.resolve('./config/', 'sequelize-config.json'),
  'models-path': path.resolve('./src/models/', 'modelSequelize'),
  'seeders-path': path.resolve('./src/models/seeders'),
  'migrations-path': path.resolve('./src/models/', 'migrations'),
};
```




# comandos CLI
- migraciones
    - genera migracion
      npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
    - ejecuta migracion
      npx sequelize-cli db:migrate
    - deshacer
      npx sequelize-cli db:migrate:undo

- seeds
    - crear seed
      npx sequelize-cli seed:generate --name demo-user
    - ejecuta seed
      npx sequelize-cli db:seed:all
    - deshacer
      npx sequelize-cli db:seed:undo (mas reciente)
      npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data (especifico)
      npx sequelize-cli db:seed:undo:all(todos)