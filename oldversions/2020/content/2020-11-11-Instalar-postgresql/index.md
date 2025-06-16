---
title: "Instalar-postgresql"
path: blog/Instalar-postgresql
tags: [sql]
cover: ./KZ.PNG
date: 2020-11-13
excerpt: Instalar-postgresql
---

[Descargar-postgreSQL](https://www.postgresql.org/download/)

- ejecutar postgreSQL

  - instala todos los componentes
  - la ruta en default
  - asigna password , ej 'admin123'
  - puerto default 5432
  - config regional default
  - terminara y podemos inicar stackbuilder para agregar extras

- se lanzara stack builder(seccion opcional ya que postresql esta instalado)

  - al inicar stackbuilder seleccionar nuestro postgreSQL server
  - agregar todas las database drivers (opcional)
    - instalar los 4 en su orden correspondiente
    - termina las instalaciones :)

- `algunos comandos para usar en sql shell (psql)`
<pre>

\l = listar base de datos de pg  
\c = conectar a base de datos de pg  
\dt = listar tablas  
select \* from users = lista todo de tabla-usuarios

</pre>

- comandos basicos
psql postgres // iniciar
createdb "firstapi" // crea bd  
psql //conectar a bd  
createuser -s postgres //crea usuario  
sudo -u postgres psql // ingresa a bd
