---
title: "herramientas de documentacion "
path: blog/documentacion-js
tags: [nodejs]
cover: ./swagger.jpeg
date: 2021-03-15
draw: true
excerpt: documentacion-js
---

# intento 1

npm install swagger-jsdoc@5.0.1 --save-exact
npm install swagger-ui-express --save

config general

```
// app.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

# intento 2

npm i swagger-ui-express@4.1.6
npm i swagger-jsdoc@6.0.1

config general

```
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "https://5s5s7.sse.codesandbox.io/"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsDoc(options);

//const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

```

# usado

```
import swaggerJsDoc from 'swagger-jsdoc';
import Config from './config.js';

const cfg = new Config();
/* setup swagger docs */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: tituloaplicacion,
      version: versionaplicacion,
      description: descripcionaplicacion,
    },
    servers: [
      {
        url: https://direccion.com,
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js', './app.js'],
};
const specs = swaggerJsDoc(options);

route.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
```

# esquema de ejemplo para un modelo/objeto

```

/**
 * @swagger
 * components:
 *   schemas:
 *     product:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: int
 *           description: the product id unique
 *         name:
 *           type: string
 *           description: the product name
 *         url_image:
 *           type: string
 *           description: the product image
 *         price:
 *           type: float
 *           description: the product price
 *         discount:
 *           type: int
 *           description: the product discount
 *         category:
 *           type: int
 *           description: the product category
 *       example:
 *         id: 99
 *         name: cafe enlatado
 *         url_image: https://picsum.photos/200/300/
 *         price: 2900
 *         discount: 90
 *         category: "naturales"
 */
```

# documentando una ruta de api

```

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [api product]
 *     responses:
 *       200:
 *         description: The list of the product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 */

```

```
/**
 * @swagger
 * /api/product/{formName}:
 *   get:
 *     summary: find products by name
 *     tags: [api product]
 *     parameters:
 *       - in: path
 *         name: formName
 *         schema:
 *           type: string
 *           default: pisco
 *         required: true
 *     responses:
 *       200:
 *         description:  find some product filtering by name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 */
```

# jsdoc

npm i jsdoc

- jsdoc setup
  /conf.js

```
{
  "plugins":[]
  "source":{
    "include": ["src"],   //leera
    "includePatern": ".js$" , // de tipo
    "excludePatern" : "(node_modules | docs)" // menos estos
  },
  "template": {
    "cleverLinks":false,     // permite crear links en la doc
    "monospaceLinks": false  //
  },
  "opts":{ // opciones
    "recurse":"true",       // permite leer archivos
    "destination": "./docs" // carpeta destino generada
  }
}
```

- ejecutara la instancia y creara documentacion

```
npx jsdoc -c jsdoc.json

```

- creando la documentacion de variables

  ### comentarios rapidos

  ```
  /** this is a description*/
  ```

  ### documentando una variable

  ```
  /**
  * this is a the name of the user
  * @type {string}
  */
  const name = "freddy"
  ```

  ### aplicar type checking (para matener el tipado y muestra helpers para el tipo de dato )

  ```
  //@ts-checck

  /**
  * this is a the name of the user
  * @type {string}
  */
  const name = "freddy"
  ```

  ### alternativa a @ts-checck (para todo el proyecto)

  - open workspace settings (json)
  - {"javascript.implicitProjectConfig.checkJs":true}

  ### documentando un array

  ```
  /**
  * array of user ages and more things
  * @type {Array}
  */
  const age = [19,20,30,40,100 ,true , "hola" , {saludo:"hola mundo"}]
  ```

  ### documentando un array de X tipo

  ```
  /**
  * array of user ages
  * @type {Array<Number>}
  */
  const age = [19,20,30,40,100]
  ```

  ### documentando un array de X y X tipo

  ```
  /**
  * array of users
  * @type {Array<Number | string>}
  */
  const age = [19,20,"treinta","40",50]
  ```

  ### documentando un objeto

  ```
  /**
  * Person Object
  * @type {{id:number,name:string,lastname:string,age:number}}
  */
  const person = {
    id:1,
    name:"freddy",
    lastname:"huaylla"
    age: 16
  }
  ```

  ### documentando objeto mas complejo con varaible id de X y X tipo

  ```
  /**
  * Dog Object
  * @type {{id:number | string ,name:string,lastname:string}}
  */
  const person = {
    id:1,
    name:"boby",
    lastname:"huaylla"
  }
  ```

  ### documentando funciones

```
/**
 * function that adds 2 numbers and return a number
 * @params {number} n1 The First Number
 * @params {number} n2 The Second Number
 * @returns {number}
 */
function add(n1+n2){
  return n1+n2;
}
```

```
/**
 * function that substract 2 numbers and return a string
 * @params {number} n1 The First Number
 * @params {number} n2 The Second Number
 * @returns {number}
 */
const substract = (n1,n2) => `my result is: ${n1 - n2}`;
```

```
/**
 * function that substract 2 numbers and return a string
 * @params {{id:number , age:number}} n1 The First Number
 * @params {number} n2 The Second Number
 * @returns {number}
 */
const substract = (object,n2) => `my result is: ${object.age - n2}`;
```

### custom types object para nuestras necesidades

```
/**
 * User
 * @typedef {Object}           User
 * @property {number}          id   User's id
 * @property {string}          name User's name
 * @property {number | string} age  User's age
 * @property {boolean}         [isActive] User's status (optional prop)
 */

/**
 * @type {User}
 */

const myNewUser = {
  id:1,
  name:'ryan',
  age:30,
  isActive:true
}

/**
 * @type {User}
 */
const myNewUser2 = {
  id:2,
  name:'red',
  age:31,
  isActive:false
}
```

/\*\*

- class to create a programmer
- @example
- const ex = new Programmer({ name:"ryan" , "php" })
- ex.getAllData();
  \*/

### documentando clases

```
class Programmer{
    /**
     * @param {name: string} user
     * @param {string}       language
     */
    constructor(user,language){
      this.name = user.name;
      this.language = user.lang;
    }
    /**
     * Get programmer information
     * returns {avoid}
     */
    getAllData(){
      console.log('la persona es' + this.name + 'y estudia' + this.language)
    }

}
const userExample = {
  name:'red',
}
const p1 = new Programmer ({userExample.name} , "javascript")
const p2 = new Programmer ({userExample.name} , "ruby")
p1.getAllData();
```

### documentando mi libreria /libs

```
/**
 *My DB conexion
 *@module myDBConection
 */

 //funciones y sus documentaciones abajo
```

### nuevo estilo

```
npm i docdash
```

```
"opts":{
  "template":"node_modules/docdash"
  }
```

### plugins especificos

https://www.npmjs.com/package/jsdoc-http-plugin , para API REST

```
npm i jsdoc-api-plugin
```

```
 "plugins": ["jsdoc-api-plugin"],
 tambien existe https://www.npmjs.com/package/jsdoc-api-plugin
```

recomiendo usar el modulo para las rutas
/\*\*

- @module api
  \*/

/\*\*

- Index route
-
- @name index
- @path {GET}/
  \*/

# como realizar integracion continua para actualizar codigo y docs?

- subir archivos a github , .gitignore [doc]
- subir documentacion a github pages
  - npm i gh-pages --save-dev
  - "updocs":"gh-pages -d doc" // la carptea [doc] se subira

### documentando una clase
