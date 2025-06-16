---
title: "Configurando NVM"
description: "Guia para configurar Node Version Manager"
pubDate: "Jun 20 2025" 
heroImage: "./pg16.png"
---

# instalando nvm en linux
- Paso 1: Instalar curl y git si no los tienes
sudo apt update
sudo apt install curl git

- Paso 2: Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

- Paso 3: Configurar variables de entorno
# Agregar estas líneas a tu archivo ~/.bashrc o ~/.zshrc:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Esto carga nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Esto carga autocompletado

- Paso 4: Recargar la configuración
source ~/.bashrc  # si usas bash
source ~/.zshrc   # si usas zsh

- Paso 5: Verificar instalación
nvm --version

- Paso 6: Instalar Node.js
nvm install node  # instala la última versión

# Comandos útiles:
nvm ls-remote     # ver versiones disponibles
nvm ls            # listar versiones instaladas
nvm use 16.14.0   # usar una versión específica
nvm use node      # usar la última versión
nvm alias default 16.14.0  # establecer versión predeterminada