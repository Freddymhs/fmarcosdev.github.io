---
title: "instalar-MongoDB-en-mac"
path: blog/instalar-MongoDB-en-mac
tags: [nosql]
cover: ./popular-commands-sql.jpg
date: 2021-01-13
draw: true
excerpt: instalar-MongoDB-en-mac
---

# comandos de instalacion en mac OSX

```
brew install mongodb-community
brew services start mongodb-community
brew services stop mongodb-community@4.4
```

o 
```
download the official Homebrew formula for MongoDB and the Database Tools
```
## roles para usuarios
- super user
    - a **nivel de todo el sistema**
      - root 
- **usuarios de bd** 
    - a **nivel bd**
      - read
      - readWrite
    - a **nivel de todas las bd**
      - readAnyDatabase
      - readWriteAnyDatabase
- **administracion** de bd
    - a **nivel bd**
      - bdAdmin (gestion datos pero no ve informacion de usuarios)
      - userAdmin (crea usuarios para gestion de usuario sin ver informacion de usuarios)
      - dbOwner (readWrite+dbAdmin+userAdmin)
    - a **nivel de todas las bd**
      - dbAdminAnyDatabase
      - userAdminAnyDatabase

# conexion a BD local y gestion de Usuarios

- conexion a bd
```
mongo mongodb://$[localhost]/$[test] --username $[root]
```

- usuario **nuevo** con su **rol** para una **bd** especifica 
```
db.createUser({ user: 'root', pwd: 'password', roles: [ { role: 'root', db: 'admin' }  ] })
```

- ver usuarios 
```
db.getUsers();
```

- bprrar usuarios
```
db.removeUser("user")
```

- actualizar usuarios
```
db.updateUser("user",{  roles: [  { role: "readWrite", db: "database" }   ]})
```
# Comandos BD

- crear/usar/cambiar base de datos
```
use newdb;
```

- ver bases de datos
```
show dbs;
show databases;
```

- ver collections
```
show collections;
```

- create collection empty
```
db.createCollection("myCollection")
```

- insert data
```
db.inventory.insertOne(
   { "item" : "canvas",
     "qty" : 100,
     "tags" : ["cotton"],
     "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" }
   }
)
```
- insert many data creating Collections
```
db.inventory.insertMany( [
   { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
   { "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
   { "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
   { "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
   { "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
]);
```

- check bd
```
myCursor = db.inventory.find( {} )
myCursor = db.inventory.find( { status: "D" } )
myCursor = db.inventory.find( { "size.h": { $lt: 15 } } )
```
- update bd
```
db.inventory.updateOne(
    { "item" : "paper" }, // specifies the document to update
    {
      $set: {  "size.uom" : "cm",  "status" : "P" },
      $currentDate: { "lastModified": true }
    }
)
```

- delete bd
```
db.inventory.deleteOne(
    { "status": "D" } // specifies the document to delete
)
```
- delete many in bd
```
db.inventory.deleteMany(
    { "status" : "A" } // specifies the documents to delete
)

```