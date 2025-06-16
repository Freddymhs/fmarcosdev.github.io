---
title: "Guia Instalando-Firebase"
path: blog/Instalando-Firebase
tags: [firebase]
cover: ./KZ.PNG
date: 2020-11-05
excerpt: Instalando-Firebase
---

#guia rapida para implementar firebase a un proyecto
##creado para funcionar con reactjs o reactnative
###si busca implementar login y almacenamiento de datos

---

**_Luego de crear tu aplicaicon en ReactJS o ReactNative :)_**

- `yarn add firebase`
- ir a https://firebase.google.com
  - ir a consola
    - `añadir nuevo proyecto`
      - crar proyecto firebase ejemplo : **_proyecto-firebase_**
    - `ingresar al proyecto` recien creado
      - Crear aplicacion **_WEB_** firebase ejemplo : **_React-firebase-todolist_** `esto es lo que conectaremos a la aplicacion`
        - copiar el contenido entregado por firebase **_archivo de texto_**
        - quitamos etiquetas html y dejamos todo direcamente para ejecutarse en javascript.
        - abajo `Compartire` mi forma de implementar este documento
    - primero vamos a crear este archivo
      - crear directorio src
        - crear directorio utils o libs
          - crear archivo Firebase.js
          - pegar tu contenido

```
//importando FIREBASE y algunos de sus MODULOS
//Los modulos permiten hacer autenticacion , conectarse a reatime database, firestore y otros que se ven en la pagina web
import * as firebase from 'firebase'; // impartamos lo instalado 'yarn add firebase'
import '@firebase/auth'; // modulo extra que quiero usar ahora para revisar mi conexion

//intentar inicializar FIREBASE
try {
 firebase.initializeApp({ // se inicializare FIREBASE
   apiKey: '------------------------------------',
   authDomain: 'mitodolist-3cee1.firebaseapp.com',
   databaseURL: 'https://mitodolist-3cee1.firebaseio.com',
   projectId: 'mitodolist-3cee1',
   storageBucket: 'mitodolist-3cee1.appspot.com',
   messagingSenderId: '892935763072',
   appId: '1:892935763072:web:ce807830493486c0d92265',
 });
} catch (err) {
 //ERROR Si FIREBASE YA ESTABA INICIALIZADO
 if (!/already exists/.test(err.message)) {
   console.error('Firebase initialization error', err.stack);
 }
}

export default firebase; // esto importaremos desde otro archivo
```

- revisemos si esta funcionando la **_conexion a firebase_**

  - ir a tu archivo main o app.js

    ````
    import firebase from './src/libs/Firebase';

        ```

    usar este codigo donde se ejecute apenas inicia tu aplicacion o como se quiera :)
    ` firebase.auth().onAuthStateChanged((user) => { console.log(user); console.log('ejecuta sin problemas') }); `
    ````

- revisar la consola por algun dato de regreso
  - nota `tambien puedes hacer console.log(firebase)`

#metodos utiles

`registrarse en fb Auth con emails y password`, se
firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.catch(function (error) {
var errorCode = error.code;
var errorMessage = error.message;
Alert.alert(errorCode + ' ' + errorMessage);
});

`registrar Usuario en BD` se
firebase
.database()
.ref('usuarios/' + user.uid)
.set({
uid: user.uid,
email: user.email,
});

`guardar en firebase` se
firebase.database().ref(/'ruta/ruta').set(objetos)
o
firebase.database()
.ref('ruta')
.child('ruta')
.set(objetos)

`leer datos` se
firebase
.database()
.ref('/usuarios/' + 'identificador')
.once('value', (snapshot) => {
console.log(snapshot.val());
//asigar a un usestate u objeto para crearlo
});

`obten UID del usuario actual` se
firebase.auth().currentUser.uid

`obten UID del usuario` , no usado
https://stackoverflow.com/questions/48893199/firebase-database-query-to-fetch-particular-data
Query query = db.child("Leads").child("Generated").orderByChild("userid").equalTo(current_uid);

##Seguridad
*https://medium.com/@juliomacr/10-firebase-realtime-database-rule-templates-d4894a118a98*

`firebase rules only authenticated users`

```
{
 "rules":
  {
    ".read": true,
    ".write": true
  }
}
```

#metodos utiles de firebase del su modulo AUTH

- documentacion https://firebase.google.com/docs/auth/web/password-auth
- firebase.auth().createUserWithEmailAndPassword(email, password) //Registra
- firebase.auth().signInWithEmailAndPassword Ingresar
- firebase.auth().signOut(); //salir
- firebase.auth().currentUser.reload() //recargar
