---
title: "Conocimiento Basicos de API REST"
path: blog/Que-es-la-API-REST
tags: [apirest]
cover: ./KZ.jpg
date: 2020-12-02
draft: true
excerpt: Comprendiendo API REST EN BASICO
---

`API REST esta basado en el protocolo HTTP`

###Comparacion de algunos conceptos con la realidad

- solicitudes : **mensaje**
- dispositivo : persona que **interpreta** mensajes
- http : idioma con sus **reglas de comunicacion** gramaticales
- tcp/ip : **camino o via** de los mensajes

##Que es HTTP?

- es un **Protocolo de transferencia de hipertexto**
- enfocado al **intercambio de recursos**
- todo lo que esta en internet es un **recurso**

#Que es REST?

- logica/concepto/guia de o marco para **RESTRICCIONES y RECOMENDACIONES**

#Que es una API?

- es una **Abstraccion de FUNCIONES y PROCEDIMIENTOS**

#entonces que es una RESTfullAPI

- es **una API construida con la logica de REST**
- usa **HTTP como protocolo de comunicacion**
- Que Incluye?
  - VERBO HTTP (GET,POST,PUT/PATCH,DELETE)
  - RECURSO (RECURSO como nombre , precio , edad )
  - URI (Indentificador de recursos)
- ejemplo ? **DELETE / Libro /918291801**
- cuando usarlo? en procesos simples
- es la unica forma de consumir o interactuar con los recursos web? no pero es la mas convencional que ademas usa muy pocos recursos ya que se basa mucho en **http** que es algo impementado de manera universal.

---

#CREANDO UN SERVIDOR
`Debo tener algunas tipos de recursos disponibles para validar`
TiposrecursosDisponibles = ['nombres','autos','tipos'];

`Detectar el verbo http en ingreso existe`
switch(verbo_http){
case 'GET':
break;
case 'POST':
break;
case 'PUT':
break;
case 'DELETE':
break;
}

`si desde postman u otro accedemos`
https://ipdemiservidor:supuerto debe regresar 200

`mis recursos disponibles ej desde una base de datos`
var MisAutos = [
'1':{
'id':'1',
'nombre':'homeromovil'
'anio':'1992'},
'2'{
'id':'2',
'nombre':'batimovil'
'anio':'1980'}
]

`metodos minimos que deben crearse para consumo de esta apirestfull`

POST
`metodo para crear 1 tipo de recurso con su ID y mas datos`  
POST
`metodo para obtener todos los recursos`  
GET
`metodo para obtener todos los recursos con diferentes filtros`  
GET
`metodo para buscar x tipo de recursos con su ID`  
PUT
`metodo para actualizar 1 recurso por su ID`  
DELETE
`metood para borrar 1 recurso con su ID`

#como Validar o restringir Accesos para mi ApiRestfull
`revisar si el usuario existe en el servidor`  
`se puede usar la autenticacio HTTP aunque no es muy buena`  
`se puede autenticar via HMAC`  
 `se puede autenticar via ACCESS TOKENS`

#como validar errores del servicio apirestfull
`404`  
`400`  
`500`  
`200`
