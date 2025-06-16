---
title: "Guia Autenticacion-Firebase"
path: blog/Autenticacion-Firebase
tags: [firebase]
cover: ./KZ.PNG
date: 2020-11-06
excerpt: Autenticacion-Firebase
---

- Ingresar a tu Proyecto de firebase en la web
- en el panel de la izquierda `Auhentication`
  - sign-in methods
  - correo electronico
    - habilitarlo
  - regresamos e ingresar dentro de Authentication -> **_USERS_**
    - no existen usuarios registrados
- implementamos en tu archivo Main o App.js
  - agregamos funcion createUserWithEmailAndPassword de auth de firebase

```
  firebase
    .auth()
    .createUserWithEmailAndPassword('correofalso@gmail.com', '123456789')
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('codigo' + errorCode);
      console.log('codigo' + errorMessage);
    });
```

     - regresamos a la web e ingresar dentro de Authentication -> ***USERS***
        - existe un usuario registrado
