---
title: "guia-uso-moodle"
path: blog/guia-uso-moodle
tags: [fmarcosdev]
cover: ./CMS.jpeg
date: 2021-04-30
excerpt: guia-uso-moodle
---

```
php 8 me da errores en moodle por lo que instale 7.4
seria bueno instalar lavel para que con este se instalen plugins muy necesarios los CMS
```

# INSTALANDO MOODLE


- obtencion codigo de git
 cd 'tu ruta donde desear tener tus nuevos proyectos moodle'
 git clone git://git.moodle.org/moodle.git 
 cd moodle                                                
 git branch --track MOODLE_310_STABLE origin/MOODLE_310_STABLE     
 git checkout MOODLE_310_STABLE

- actualizarlo
cd ..
git pull

- permisos para moodle
```
sudo chmod -R 0755 moodle
```

- La carpeta Moodledata (carpeta que debe estar a un lado de moodle)
```
sudo mkdir moodledata
sudo chown -R  fmarcos moodledata   // para cambiar el owner
sudo chmod -R 777 moodledata
```

- configurando BD para moodle con el motor MYSQL
```
brew services start mysql (ejecutando mi version de mysql)
```
```
mysql -u root -p
CREATE DATABASE moodle DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'moodle10'@'localhost'IDENTIFIED BY '112233';
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,CREATE TEMPORARY TABLES,DROP,INDEX,ALTER ON moodle.* TO 'moodle10'@'localhost';
```

# APRENDIENDO MOODLE

<pre>
basado en una capacitacion
</pre>

## cambiando forma de presentar todo el contenido
~administracion del curso -> editar ajustes ->  formato curso ->
-> formato botones 
-> titulo del agrupamiento 
    -> titulo del agrupamiento  (contenido,evaluacion,encuesta)
    -> numero de seccion a agrupar (1) 

## recursos + actividades 
~~administracion del curso ->activar edicion  -> editar un tema -> 
+aniade actividad o recurso 
    - recursos
        - archivos
            - nombre
            - que archivos
            - apariencia
                - mostrar(forzar descarga)
        - carpetas
        - etiquetas (se muestra en la portada) (puede usar iframes)
        - libros  (crear objeto de aprendizaje como libro)
        - paginas (muestra lo que tiene la unidad dentro en otra pagina independiente)
            - mostrar 
                - automatico o ventana emergente
                - dimensiones (si es ventana)
        - paquete de contenido IMS (x_x)
        - url (url de internet :])
    - actividad
        - base de datos 
        - chat
        - consulta
        - cuestionario
            - nombre
            - descripcion
            - temporalizacion
                - abrir cuestionario
                - cerrar cuestionario o intentos
                - tiempo limite
                - cuando el tiempo termina 
                - periodo de gracias para envio (opcional)
                - calificacion
                    - cal para aprobar (4)
                    - intentos (2)
                    - metodo de calificacion (mas alta)
                - comportamiento de las preguntas
                    - ordenar al azar (nop)
                    - opciones de revision (ambas)
                        - mientras esta abierto 
                        - despues de cerra cuestionario
             - EDITAR CUESTIONARIO (afuera)
                 - agregar nueva pregunta
                     - nombre pregunta (DE-1-indica-cuales-son-de-tipo-x)
                     - enunciado pregunta () 
                     - puntuacion
                     - barajar respuestas? (si existe TODAS LAS ANTERIORES , Desactivarlo)
                     - respuesta (que sea texto limpio sin formatos)    
                         - elegir su puntuacion (100% , 20% , depende el formato pregunta)
                 - desde un banco de preguntas? (debe tener la universidad lista)                       
        - encuesta
            - nombre encuesta
            - descripcion
            - ajustes de pregunta y envio
                - anonimo o por nombre de usuarios
            - EDITAR ENCUESTA (afuera)
            - editar preguntas
                -  tipo eleccion multiple 
                    - pregunta
                    - etiquetas (relacionar 2 preguntas)
                    - ajuste (vertical)
                    - valores eleccion multiple (mala,buena,excelente)
                - tipo texto corto
                    - pregunta
                    - depende de un item? (etiqueta previa creada)
                    - depende valor (excelente)
        - encuestra predefinida
        - foros
            - tipos de foro (uso general,abierto,debate sencillo)
            - subs y seguimiento (sub forzosa)
        - glosario
        - herramienta externa
        - leccion
        - paquete SCORM
        - taller
        - tarea
        - wiki
## configuracion sencilla para presentar las unidades
<pre>
basado segunda parte de la capacitacion
</pre>
~administracion del curso -> editar ajustes ->  formato curso ->
-> formato botones (cambiar formato de mostrar el contenido )
-> titulo del agrupamiento 
    -> titulo del agrupamiento  (contenido,evaluacion,encuesta)
    -> numero de seccion a agrupar (1) 
## cambiar rol usuarios
editar ajustes-> renombrar rol -> 
palabra para estudiante()
palabra para profesor()
## ver usuarios matriculados
~administracion del curso ->usuarios-> usuarios matriculados -> **Matricular usuarios** -> selecionar usuario -> matricular
## matricular usuarios
~administracion del curso ->usuarios-> usuarios matriculados
## actividad tarea y metodo de calificar !
~administraciondel curso -> activar edicion
```
a;ade una actividad o un recurso -> tarea -> agregar
    nombre tarea (tarea 1)
    descripcion (esta es una tarea)
    archivos adiciones (guias para alumnos, plantillas)
    disponibilidad (desde,fecha inicio entrega, fecha limite entrega)
    Tipo entrega(texto en linea,archivo enviado , maximo de archivos , maximoSize:5mb,tipos:pdf,docs,excel )
```
```
    calificaciones (maximoPuntuacion: 10)
    metodo calificaciones (calificacion simple)
        - listo
    metodo calificaciones (guia de evaluacion )
        - luego crear plantilla por puintos de [contenido 4,presentacion 3,calidad 3]
    metodo calificaciones (rubrica )
        -  luego crear matrix desde[areas(contenido,presentacion,claridad) y calificaciones (0,1,2,3,4)]
    calificacion minima para aprobar 
```
## calificar tareas
(calificacion simple) ingresar a la tarea creada -> calificar todas las tareas -> calificar!
(guia de evaluacion ) ingresar a la tarea creada -> calificar todas las tareas -> calificar! 
(rubrica ) ingresar a la tarea creada -> calificar todas las tareas -> calificar! 

## activar grupos
~administracion del curso -> editar ajustes ->
grupos (visible y privado)
forzar modo de grupo (si)
agrupamientoo por defencto ()
## crear grupo 
~administracion del curso -> grupos -> 
crear grupo (nombre descripcion imagen)
## formar grupo 
~administracion del curso -> grupos -> 
selecionagrupo -> agregar o quitar usuarios
## tarea especifica para x grupo ! 55:00


## gestion de un curso

## calificaciones

## grupos y visualizacion

## 

