---
title: "expresiones-regulares-js"
path: blog/expresiones-regulares-js
tags: [fmarcosdev]
cover: ./expreg.jpg
date: 2021-03-02
draw: true
excerpt: expresiones-regulares-js
---

# README

- forma1
  var expresion1 = new RegExp("abc")  
  var expresion2 = /abc/  
  var expresion3 = /[0123456789]/  
  var expresion4 = /[0-9a-zA-Z]/  
  var expresion5 = /\d\d-\d\d-\d\d\d\d/  
  var expresion6 = /[^01]/ no tiene estos valores  
  var expresion6 = /\d+/ se repite una vez o mas  
  var expresion9 = /Hola mun?do/  
  var expresion10 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/  
  var expresion11 = /hola/i  
  var expresion12 = /Woo+(hoo+)/i  
  var expresion13 = /\d+/.exec("desde 1980")  
  var expresion14 = /\bffreddy\b/  
  var expresion15 = /pollo|pescado|res|tacos|papas/  
  var expresion16 = /^inicio final$/      
var expresion17 = /^inicio|final$/

- validando coincidencias
  - expresion1.test("abcdef") // true
  - expresion2.test("abcdef") // true
  - expresion3.test("sucedio en 1993") // true
  - expresion4.test("sucedio en 1992") // true
  - expresion5.test("22-12-1992") //true
  - expresion5.test("1010101010101010101010110100101") //false
  - expresion5.test("") // false
  - expresion9.test(/Hola muto/) // false
  - expresion10.test(27-01-2021 11:55) // true
  - expresion11.test("HoLA")
  - expresion11.test("wooHOO,123OhoohOhohohohHhooo,123") //true
  - expresion13.test("hola mundo desde el 1980") // true
  - expresion14.test("freddy") // false
  - expresion15.test("res") // true
  - expresion16.test("inicio a 1 b 2 c 3 final") // true
  - expresion17.test("inommmm creo que final") // true
  - "feliz navidad".replace(/navidad/,'vanidad') // remplaza la palabra navidad
  - "feliz navidad y hoy sera noche de navidad".replace(/navidad/g,'vanidad') // remplaza de forma global ahora 2 palabras

# shortcuts

\d Cualquier numero  
\w Cualquier caracter AlfaNumerico  
\s Cualquier espacio en blanco [tabs,salto linea , similares]  
\D Cualquier letra que no sea numero  
\W Cualquier caracter que no sea alfanumerico  
\S Cualquier caracter que no sea un espacio en blanco  
. Cualquier caracter exepto nuevas lineas  
^ negacion

- se repite <1

* se repite <1 o ninguna vez  
  ? el resto sera opcional  
  {} algun rango del min al max o cantidad exacta  
  i acepta mayuscula o minuscula  
  .exec regresa un array y la coincidencia mietras mueve su index  
  \b establece limites  
  | establecer algunas opciones u alternativas  
  ^ inicio de la cadena , $ final de la cadena  
  g aplicacion global de alguna regla  
  .search busca el primero en el contenido  
  () agrupados de cosas que serian las posibilidades a considerarse por ejemplo  
  $ al final  
  ^ al inicio

# EJEMPLO VALIDACION

- validando el email

```
 var validEmail = function (){
   var email = document.getElementById("email")
   var content = email.value
   var res = /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,30})+$/.test(content)
   return res
 }
```

- validando el twitter

```
 var validTwitter = function (){
   var twitter = document.getElementById("twitter")
   var content = twitter.value
   var res = /^@?(\w+)$/.test(content)
   return res
 }
```

# Mas ejemplos de validaciones

     - URL/Dirección web válida

```
 var isValidUrl = function () {
     var url = document.getElementById('url');
     return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(url.value)
 }
```

     - Contraseña segura
      Contraseñas con al menos una letra mayúscula.
      Contraseñas con al menos una letra minúscula.
      Contraseñas con al menos un número o caracter especial.
      Contraseñas con mínimo 8 caracteres.


```
 var isValidPass = function () {
     var pass = document.getElementById('pass');
     return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pass.value)
 }
```

     - [Teléfonos en el mundo](https://en.wikipedia.org/wiki/List_of_country_calling_codes)

```
  var isValidPhone = function () {
      var phone = document.getElementById('phone');
      return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(phone.value)
  }
```

    -  Tarjetas de credito


```
 var isValidCreditCard = function () {
     var phone = document.getElementById('phone');
     return /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/.test(phone.value)
 }
```

    - Código postal


```
  var isValidPostalCode = function () {
      var phone = document.getElementById('phone');
      return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(phone.value)
  }
```

     - Nombres de usuario
      Mínimo 6 caracteres
      Máximo 30 caracteres


```
  var isValidUserName = function () {
      var phone = document.getElementById('phone');
      return /^[a-z\d_]{6,30}$/i.test(phone.value)
  }
```
