---
title: "Desde Javascript a PYTHON 🔥"
path: blog/Javascript-to-Python
tags: [fmarcosdev]
cover: ./KZ.jpg
date: 2020-10-26

excerpt: Python es un lenguaje bien explicativo y de buenas practicas a la hora de programar ademas incluye su plus de ser muy bueno manejando informacion.
---

#Donde Descargar Python
https://www.python.org/ e instalar :)

#Como revisar si esta Instalado

- en la consola.
  `python` - Para salir de python
  `exit`
  #Cosas Basicas  
  `archivo PYC?` Este es el bytecode/archivo compilado  
  `Tipo de lenguaje` Es un lenguaje **Intepretado** de ** Alto Nivel** osea mas amigable al programdor

#Algunas diferencias con Javascrip, **_segun yo_**

`En Python puedo declarar muchas varaibles en solo 1 Linea.`

`Las Constantes se declara asi: NOMBRE , siempre en mayuscula`

`LISTAS` son como el array con mayor cantidad de funciones disponibles , ej ordenarlos a la inversa

- .
  - Obtener parte de una lista : `0:3` estas 4
  - Invertir la lista invertir la lista completa `::0 `
  - Buscar elemento por su `index(posicion)`
  - crear matrizes jutando 2 arrays en 1 nueva
  - se puede convertir a una tupla

`TUPLAS`

- .
  - son como listas pero son INMUTABLES `no cambian`
  - se declaran con `()`
  - se puede convertir a una lista

`metodos para el control`

- .
  - Existe un metodo find() para buscar en una cadena
  - Existe un metodo count() cotibilziar el texto en la variable

`DICCIONARIOS`

- .
  - similar a lo anterior pero usan KEYS
  - las keys permiten acceso a la informacion
  - .get('key') regresara la llave
  - .se puede crear diccionario dentro de una 'Key' o mas bien su posicion a la que aputa esta key.
  - podemos obtener solo los items con .items()
  - podemos obtener solo los keys con .keys()
  - podemos contar todos los elementos con len(diccionario)
  - podemos borrar con del diccionario['key'] o tambien con la funcion pop
  - EXISTEN funciones para escribir numeros impares facilmente

`en Python tambien`

- .
- podemos asignar Variables 'MIENTRAS' esta en ejecucion el if
- las funciones se definen con DEF nombre_de_mi_funcion
- se puede definir una *propiedad o *argumentos de funcion por si no sabemos cuantos params llegaran a la funcion
- una variable sera local o global dependiendo donde se crea **en la funcion , o fuera**

`expresion LAMBDA?`

- .
- son funciones ANONIMAS que se ejecutan en 1 sola linea y desaparecen , me recuerda al arrow function.

`yield`

- .
- una forma de RETORNAR resultado de la funcion **SIN terminarla** como un break

`clases`

- .
- las clases en python se definen con la palabra class
- existen metodos y atributos como siempre dentro de las funciones
- instanciar con class object que es igual el metodo simple **class**, solo que esta muestra que hereda de una clase.

`funcioines`

- .
- la funcion la puedo definir con **def**

`ademas`

- existe Herencias y Herencias multiples
- se puede sobreescribir los metodos

`trabajar con modulos?`

- como en javascript esto es posible y nos ayuda a reusar estos 'componentes/modulos'
- import miarchivo y luego podemos acceder a miarchivo.saludar(params)
- from miarchivo import \*

`como trabajar con PACKAGES?`

- basicamente es como los modulos
- folder.archivo import clase
  - **init**.py `puede ser un archivo principal desde donde se exponen otras clases asi se simplifica`
    - este es un patron de diseño de buenas practicas
