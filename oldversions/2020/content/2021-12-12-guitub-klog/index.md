---
title: "comandos github, implementar nueva rama"
path: blog/aprendiendo-agregar-nueva-rama-gitflow
tags: [git]
cover: ./github.png
date: 2021-12-12
excerpt: usando comandos basicos
---


# crear PR, sin rebase D:

ingreso a github
hacer pull request
s

# pablo , crear rebase !!
<!--  squash-->
grbi , anterior hash al mio! 

ctrl+v selecionar y modifica en cantidades (dejar el primero, el resto pick replace por "s")
:X // salir y guardar
pantalla para asginar nombre del commit


<!-- mi primer pero no esta rebaseado!!! -->
gco master
gl
git branch -D development
gco development
gl
gco feature/changelogs //tu rama
git rebase --onto development 145ab755b698ccc7a38b15c6484f42e518fa19eb //hashDel commit anterior al primero del mio // podria pedir resolver conflicto

<!-- solucion conflictos -->

git add .
grbc 

<!-- forzar push -->
gp -f



