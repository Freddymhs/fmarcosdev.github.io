---
title: "instalar-Mysql-en-mac"
path: blog/instalar-Mysql-en-mac
tags: [sql]
cover: ./popular-commands-sql.jpg
date: 2021-01-13
draw: true
excerpt: instalar-Mysql-en-mac
---

# comandos de instalacion en mac OSX

```
brew search mysql /para buscar el programa
brew install mysql@5.7 /instalar mysql
brew tap homebrew/services /para agregar este repo al brew
brew services start mysql@5.7
```

agregar mysql al path si no reconoce el comando
```
export PATH="$(brew --prefix mysql@5.7)/bin:$PATH"
///////////export PATH="$(brew --prefix mysql)/bin:$PATH"
```