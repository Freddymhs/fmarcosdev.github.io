---
title: "Comandos Basicos Git"
path: blog/Comandos-Basicos-Git
tags: [fmarcosdev]
cover: ./KZ.png
date: 2020-10-29
excerpt: Comandos Basicos Git
draw: true
---

<pre>

las ramas|||||||||||||||||||
master rama = por defecto
crear rama = git checkout -b version3
git checkout master = ir a rama principal
git push origin version3 = habilita y pushea a una rama

sobre escribir desde el REPO a mi carpeta LOCAL?|||||||||||||||||||||
por protocolo git no permite sobre 'escribir'
git lo reusara
si el directorio esta vacio lo deberia llenar (borrar .git)

inidicar a github que ESTE repo Local es el mismo que el repo Remoto=======
git remote add origin 'elotrorepo'

CLONAR repo ========================
git clone ruta.git destino

subir CAMBIOS=======================
git add .
git commit -m "agrege comandos git"
git push origin master

subir cambios a REPO existente y VACIO===========
git init
git add .
git commit -m "sda"
git remote add origin "https"
git push -u origin master

actualizarme a la ultima version=============
git pull

como debo hacer merge/rebase?============================
en rama master :
en rama freddy:
en rama erik :

git checkout master
git rebase erik
git rebase freddy

merge o rebase???? ambas combinana N a 1
merge no muestra el codigo y sus cambios a detalle
rebase se muestra el codigo editado a detalle / subir archivo editado al final , subir archivo recien editado
rebase insertar su contenido al final de la linea del master.

comandos generales//
git log /ver historial
git log -p /ver historial
git brach / para ver ramas
git checkout -b / crear y cambiar rama
git status / ver ultimos cambiso de archivo inlcuso en local
git branch -d 'rama' / borra esa rama
git remote -v /ver a que repo esta contectado mi repo local
git remote remove -v /remueve el Vinculo del Repo Remoto
git fork /copia el repo cuando no es de mi grupo ni mio , D:

extras//
git worflows en grupos

OMAR-------------------------sube
git add .
git commit -m "acabo de subir un header nuevo para el inicio'
git push origin master
usuario y contraseña

FILI------------------- actualiza
git remote add origin 'direccion del repo'
git fetch origin
git merge origin/master

si tenemos un manual merge------------------- arreglarlo manual
borrar o elegir un archivo

</pre>

- `git init` se crea un area en la RAM
- `git add` los archivos se van a stagging
- `git commit` envia Cambios al repositorio local 'es un save? de seguridad'
- git remoto ? `gitlab` , `github`
- `git push` enviar los cambios al repositorio Remoto
- `git pull` traer cambios del repo remoto al repo local y ademas al directorio de trabajo

- `checkout` traer cambios de una rama

  - `master`
  - `desarrollo`
  - `hotfixing`

- `merge` union de ramas (crea un commit al mismo tiempo)
- `git status` para ver lo que pasa actualmente en este git
- `git log` todos los commits existentes
- `git diff` comparar las versiones

cambiar entre versiones
git checkout xxxx
git checkout master

- `git reset xxxx --hard` sobreescrib el commit actual
- `git reset xxxx --soft` conserva el commit actual

- ramas en commits
  - `master` el principal que tiene historias de los commits
    - `head` indica el commit actual en el que trabajas
    -
- git `branch minuevarama`
- git `checkout minuevarama`

si estoy en master
creare una nueva rama para hacer cambios
otro programador creara otra rama para hacer otros cambios

todos los cambios no se conectan por lo que
regreso a la rama master y desde la rama master
hacer merge con rama1 y rama2

merge staging : es una seccion existente cuando falla un merge por conflictos entre 2 partes.

//github

git clone para usar el git pero no puedo actualizar si no es mi repo
git

git pull origin master ? traer de internet al master
git push origin master ? manda desde origin al master
git push origin header ? manda desde el origin al header

header indica nuestra posicion actual

git pull origin footer , para traer del repo una rama en especifica
