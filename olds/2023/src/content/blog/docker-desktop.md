---
title: "Docker "
description: "docker en linux"
pubDate: "Feb 18 2025"
heroImage: "./skills-svg/zorin-icon.svg"
---

# 🐳 Instalar Docker Desktop en Linux (Ubuntu y derivados)
Si ya tienes Docker instalado en tu sistema Linux y quieres Docker Desktop, aquí tienes dos formas de hacerlo. Te recomendamos agregar el repositorio oficial, ya que facilitará futuras actualizaciones. Sin embargo, si prefieres, también puedes probar descargando el .deb manualmente.

## 1️⃣ Agregar el repositorio oficial de Docker (recomendado)
Este paso permite instalar y actualizar Docker Desktop fácilmente en el futuro:

```
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

## 2️⃣ Instalar Docker Desktop (prueba ambos métodos)
Ahora tienes dos opciones para instalar Docker Desktop. Prueba ambas y usa la que mejor te funcione:

#### ✅ Opción 1: Instalar con apt (fácil de actualizar en el futuro)

Si agregaste el repositorio en el paso anterior, instala Docker Desktop con este comando:

```
sudo apt-get install docker-desktop
```

#### 📦 Opción 2: Descargar manualmente el .deb desde la web

Si prefieres descargar el .deb manualmente:

Ve a 👉 Docker Desktop for Linux

Descarga el archivo .deb para tu versión de Ubuntu.

Instálalo con:

```
sudo dpkg -i docker-desktop-<versión>-amd64.deb
sudo apt-get install -f  # (para resolver dependencias si es necesario)
```

## 3️⃣ Iniciar Docker Desktop
Después de instalarlo, ábrelo desde el menú de aplicaciones o con:

```
systemctl --user start docker-desktop
```

Si no arranca, reinicia tu PC y vuelve a intentarlo.

## 4️⃣ (Opcional) Ejecutar Docker sin sudo
Para no tener que escribir sudo en cada comando Docker:

```
sudo usermod -aG docker $USER
```

#### ✨ Conclusión
Ahora tienes Docker Desktop en Linux 🎉. Si agregaste el repositorio, actualizar será tan fácil como ejecutar sudo apt update && sudo apt upgrade. Si descargaste el .deb, tendrás que hacerlo manualmente en el futuro.

🔥 ¡Listo para usar Docker Desktop! 🚀🐳