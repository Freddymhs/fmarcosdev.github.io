---
title: "Configurando ZSH y Oh My ZSH"
description: "Guia "
pubDate: "Jun 20 2025" 
heroImage: "./pg16.png"
---

# Guía de Instalación de ZSH y Oh My ZSH
## Instalación de ZSH
### 1. Instalar ZSH
```sudo apt install zsh```

### 2. Configuración Inicial
Ejecutar el comando:
```zsh```

Esto iniciará la configuración inicial si es la primera vez que se ejecuta.

### 3. Establecer ZSH como Shell por Defecto
```chsh -s $(which zsh)```

### 4. Reiniciar el Sistema

Es necesario reiniciar el sistema para aplicar los cambios.

### Instalación de Oh My ZSH
#### 1. Clonar Oh My ZSH
```git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh```

#### 2. Configurar .zshrc

Abrir el archivo ~/.zshrc y agregar:
```
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"  # Personalizable con otros temas
plugins=(git)
source $ZSH/oh-my-zsh.sh
```

#### 3. Recargar Configuración
```source ~/.zshrc```

#### 4. Agregar Oh My ZSH
```source ~/.oh-my-zsh/oh-my-zsh.sh```

### Plugins Recomendados

#### 1. Navegar a la Carpeta de Plugins
```cd $ZSH_CUSTOM/plugins```

#### 2. Lista de Plugins a Instalar
Agregar al archivo .zshrc:

```
plugins=(
    you-should-use
    zsh-autosuggestions     # autocompleta a la derecha
    fast-syntax-highlighting
    zsh-autocomplete        # autocompleta línea debajo
    git
    npm
    aws
    ohmyzsh-full-autoupdate
)
```

#### 3. Instalar Plugins

```
git clone https://github.com/MichaelAquilina/zsh-you-should-use.git ./you-should-use
git clone https://github.com/zsh-users/zsh-autosuggestions 
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting 
git clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git
git clone https://github.com/Pilaton/OhMyZsh-full-autoupdate.git ./ohmyzsh-full-autoupdate
```

#### 4. Configuración Adicional
Agregar al archivo .zshrc:

```
# Auto updater ZSH (11 días)
export UPDATE_ZSH_DAYS=11

# Fast ZSH plugin connect
source $ZSH/custom/plugins/fast-syntax-highlighting/fast-syntax-highlighting.plugin.zsh
```

#### 5. Aplicar Cambios

```source ~/.zshrc```
