---
title: "guia-instalacion-ruby-on-rails-mac"
path: blog/guia-instalacion-ruby-on-rails-mac
tags: [fmarcosdev]
cover: ./popular-commands-sql.jpg
date: 2021-01-19
draw: true
excerpt: guia-instalacion-ruby-on-rails-mac
---

Mac Big Sur

- Instalar brew junto a xcode

```
=/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- [brew] modificar archivo [zprofile] , este es el ejemplo de mi ruta.(modificar)

```
echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/fmarcos/.zprofile
    eval $(/opt/homebrew/bin/brew shellenv)
```

- instal rbENV

```
brew install rbenv ruby-build
```

- [rbenv] modificar archivo [zprofile] , este es el ejemplo de mi ruta.(modificar)

```
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.zshrc
```

```
source ~/.zshrc
```

- instalar ruby

```
sudo rbenv install 3.0.0
```

```
sudo rbenv global 3.0.0
```

- instalar rails

```
sudo gem install rails -v 6.0.3.4 --no-document
```

```
rbenv rehash
```

# extras

- sqlite

```
brew install sqlite
```

- [sqlite] modificar archivo [zprofile] , este es el ejemplo de mi ruta.(modificar)

```
echo 'export PATH="/opt/homebrew/opt/sqlite/bin:$PATH"' >> ~/.zshrc
```

- mysql

```
brew install mysql
```

- [openssl] modificar archivo [zprofile] , este es el ejemplo de mi ruta.(modificar)

```
echo 'export PATH="/opt/homebrew/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc
```

- postgresql

```
brew install postgresql
```

- Instalacion requerida

descarga e instala install Xcode Command Line Tools.
yo use Command_Line_Tools_for_Xcode_12.2.dmg.

- instalar node desde su pagina web

https://nodejs.org/es/.
yo use 15.8.0

# crear el primer proyecto

```
rails new proyectorails

```

opcional

```
Your user account isn't allowed to install to the system RubyGems.
 You can cancel this installation and run:


     bundle config set --local path 'vendor/bundle'
     bundle install
```
