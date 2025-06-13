---
title: "Agregar un Acceso Directo de Android Studio Linux"
description: "Guía paso a paso para crear un acceso directo de Android Studio en la sección de Apps de Zorin OS"
pubDate: "May 14 2024"
heroImage: "./skills-svg/zorin-icon.svg"
---

# Cómo Agregar un Acceso Directo de Android Studio en Zorin OS

¿Cansado de buscar Android Studio en tu sistema Zorin OS? ¡No busques más! Esta guía te mostrará cómo crear un acceso directo conveniente en tu menú de aplicaciones.

## Requisitos Previos

- Zorin OS instalado
- Android Studio instalado
- Acceso a la terminal
- Permisos de administrador

## Paso 1: Crear el Archivo de Acceso Directo

1. Abre tu editor de texto favorito (por ejemplo, gedit, nano, o VS Code).
2. Copia y pega el siguiente contenido:

```plaintext
[Desktop Entry]
Type=Application
Categories=Development
Name=Android Studio
Icon=/home/TU_USUARIO/development/android-studio/bin/studio.png
Exec=/home/TU_USUARIO/development/android-studio/bin/studio.sh
Terminal=false
StartupNotify=true
Comment=Develop Android Apps
```

3. **Importante:** Reemplaza `TU_USUARIO` con tu nombre de usuario real.
4. Guarda el archivo como `android-studio.desktop` en tu directorio de Descargas.

## Paso 2: Dar Permisos al Archivo

1. Abre una terminal (Ctrl + Alt + T).
2. Ejecuta el siguiente comando:

```bash
chmod +x ~/Descargas/android-studio.desktop
```

## Paso 3: Mover el Archivo al Directorio de Aplicaciones

1. En la misma terminal, ejecuta:

```bash
sudo mv ~/Descargas/android-studio.desktop /usr/share/applications/
```

2. Ingresa tu contraseña cuando se te solicite.

## Paso 4: Verificar y Usar el Acceso Directo

1. Haz clic en el menú de aplicaciones de Zorin OS.
2. Busca "Android Studio".
3. ¡Deberías ver el icono de Android Studio! Haz clic para lanzar la aplicación.

## Solución de Problemas

- **El icono no aparece:** Verifica la ruta del icono en el archivo .desktop.
- **La aplicación no se inicia:** Asegúrate de que la ruta de Exec sea correcta.
- **No encuentras el acceso directo:** Intenta reiniciar la sesión de tu escritorio.

## Conclusión

¡Felicidades! Ahora tienes un acceso directo rápido y fácil a Android Studio en tu Zorin OS. Este truco no solo funciona para Android Studio, sino que puedes adaptarlo para cualquier otra aplicación que necesites.

¿Te resultó útil esta guía? Compártela con otros desarrolladores de Android que usen Zorin OS. Si tienes preguntas o sugerencias, ¡déjalas en los comentarios abajo!

---

**Nota:** Esta guía asume que Android Studio está instalado en la ruta predeterminada. Si lo instalaste en una ubicación diferente, asegúrate de ajustar las rutas en el archivo .desktop en consecuencia.