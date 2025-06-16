---
title: "Heroku-para-backend-Cloud"
path: blog/Heroku-para-backend-Cloud
tags: [freecloud]
cover: ./Cloud-Storage.jpg
date: 2021-01-11
draw: true
excerpt: Heroku-para-backend-Cloud
---

# descripcion

heroku permite almacenar proyectos backend en la nube de forma gratuita con despliegue continuo :D

# subir directo a heroku

->Crear Proyecto nuevo de backend como node u otros.

-Ir a heroku y descargar e instalar heroku CLI(para la consola)

-subir proyecto a heroku:
Cd miaplicacion
heroku login
Git init
heroku git:remote -a nombre-de-tu-aplicacion

-actualizando cambios heroku
git add .
$ git commit -am "make it better"
$ git push heroku master

# subir a heroku usando git

ingresar al dashboard de heroku en su pagina web.  
asignarle nombre de la app (por ejemplo nombre de la carpeta)
chose region(donde alojaras tu servidor)
crear app

la web indica una seccion de Deployment method -> click en github !
ingresa nombre de tu repositorio
el proyecto de backend va a subirle , luego a hacer un deploy.

usando el archivo package.json podemos agregar comandos para post deploy de heroku asi asegurarnos de que todo funcione como en local
