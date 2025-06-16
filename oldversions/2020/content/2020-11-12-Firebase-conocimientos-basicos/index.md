---
title: "Firebase-conocimientos-basicos"
path: blog/Firebase-conocimientos-basicos
tags: [firebase, fmarcosdev]
cover: ./KZ.PNG
date: 2020-11-12
excerpt: Firebase-conocimientos-basicos
---

- `Ejemplo Realtime Database Seguridad`
  - [Plantillas-para-seguridad-REALTIMEDATABASE](https://medium.com/@juliomacr/10-firebase-realtime-database-rule-templates-d4894a118a98)

```
{
 "rules":
  {
    ".read": true,
    ".write": true
  }
}
```

#Cloud Functions

#**Modulo AUTH** de firebase

- `Registro en AUTH de firebase con Email y Password`

<pre>
firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.catch(function (error) {
var errorCode = error.code;
var errorMessage = error.message;
Alert.alert(errorCode + ' ' + errorMessage);
});
</pre>

- `Ingresar con datos personales`

<pre>
firebase.auth().signInWithEmailAndPassword 
</pre>

- `obtener UID de usuario Actual`

<pre>
firebase.auth().currentUser.uid
</pre>

- `Revisar estado de Auth`

 <pre>
 firebase.auth().onAuthStateChanged(function (response) {
      if (!response) {
        console.log('usuario sin cambios');
      } else {
       console.log('existen cambios en el usuario')//auth almacena informacion de usuario ingresado , uid ,email entre otros
      }
    });
 </pre>

- `Salir de auth`
  firebase.auth().signOut();

- `Recargar Auth`
  firebase.auth().currentUser.reload()

##**Modulo RealTime Database** de firebase

- `registrar un usuario en REALTIME DATABASE`

<pre>
firebase
.database()
.ref('usuarios/' + user.uid)
.set({
uid: user.uid,
email: user.email,
});
</pre>

- `guardar datos en firebase REALTIME DATABASE`

<pre>
firebase.database().ref(/'ruta1/ruta2') 
.set(objetos)

o

firebase.database().ref('ruta1').child('ruta2')
.set(objetos)
</pre>

- `Leer datos en firebase REALTIME DATABASE`

<pre>
firebase
.database()
.ref('/usuarios/' + 'uidusuario')
.once('value', (snapshot) => {
console.log(snapshot.val()); //yo uso "UseState de react"
});
</pre>
