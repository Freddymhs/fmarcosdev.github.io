---
title: "motor vistas EJS en express"
path: blog/ejs-nodejs
tags: [nodejs]
cover: ./ejs.png
date: 2021-04-14
draw: true
excerpt: ejs-nodejs
---


- instala ejs
```
npm i ejs
```
- usa plantilla ejs
```
app.set("view engine","ejs");
app.set("views", __dirname + "pathhacia/views");
```
- renderizar
```
app.get('/',(req,res)=>{
res.render('index',{hola:"prueba :D"})
})

```