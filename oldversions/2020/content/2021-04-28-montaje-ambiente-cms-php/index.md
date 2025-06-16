---
title: "montaje-ambiente-cms-php"
path: blog/montaje-ambiente-cms-php
tags: [fmarcosdev]
cover: ./CMS.jpeg
date: 2021-04-28
excerpt: montaje-ambiente-cms-php
---
**context es una forma simple de manejar estados en reactjs**

# guia para montar ambiente para CMS (v0.0.1)

## wordpress , moodle , magento 

- es necesario
    ```
    tener brew (para mac)
    ```
- pasos de instalacion 

- php
```
brew install php@7.4 --build-from-source  (imporante para editar php.init)
```
- mysql
```
brew install mysql
brew services start mysql
```
- composer
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php

mv composer.phar /usr/local/bin/composer
export PATH=${PATH}:~/.composer/vendor/bin
```
- laravel opcionalmente
    - recomiendo instalar laravel para luego usar su comando y crear proyecto
        - esto permite actualizar composer y laravel para que tengan plugins base como (module zip requerido en Wordpress) 
- montaje de algun cms (debo configurar su BD correctamente)
    - ejecucion del cms en el directorio
    ```
    php -S localhost:8000
    ```



