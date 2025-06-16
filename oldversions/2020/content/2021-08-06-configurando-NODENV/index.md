---
title: "configurando-NODENV"
path: blog/configurando-NODENV
tags: [nodejs,fmarcosdev]
cover: ./nodenv.jpeg
date: 2021-08-06
excerpt: configurando-NODENV
---

# configurando NODENV en un mac M1

brew install nodenv


nodenv install -l  (ver las versiones)
nodenv install 14.17.4
nodenv global 14.17.4 (es una version estable supone)
nodenv rehash


- code ~/.zprofile 
      - dentro agregar esto : eval "$(nodenv init -)"

- checkea si todo funciona bien con el doctor
  curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash


