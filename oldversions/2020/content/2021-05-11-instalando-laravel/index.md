---
title: "instalando-laravel"
path: blog/instalando-laravel
tags: [fmarcosdev]
cover: ./laravel.png
date: 2021-05-11
excerpt: instalando-laravel
---

# guia instalacio laravel 
### no completo aun..

```
brew install php
```

https://www.youtube.com/watch?v=JPNRPCff4Gs&t=128s2021



```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

- mover el composer al lugar correcto , para que detecte comando composer
```
sudo cp composer.phar /usr/local/bin/composer
```
- crea proyecto laravel de prueba
composer create-project laravel/laravel blog

- ejecutar servidor
```
php artisan serve
```