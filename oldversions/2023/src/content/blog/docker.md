---
title: "Docker "
description: "docker en linux"
pubDate: "Feb 18 2025"
heroImage: "./skills-svg/zorin-icon.svg"
---

# Guía rápida de instalación y uso de Docker en Linux

## 📌 Instalación de Docker

### 1️⃣ Eliminar versiones antiguas
```bash
sudo apt remove docker docker-engine docker.io containerd runc
```

### 2️⃣ Actualizar paquetes
```bash
sudo apt update && sudo apt upgrade -y
```

### 3️⃣ Instalar dependencias
```bash
sudo apt install -y ca-certificates curl gnupg
```

### 4️⃣ Agregar la clave GPG de Docker
```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/keyrings/docker.asc > /dev/null
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

### 5️⃣ Agregar el repositorio de Docker
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
```

### 6️⃣ Instalar Docker y Docker Compose
```bash
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 7️⃣ Verificar instalación
```bash
docker --version
docker compose version
```

### 8️⃣ Agregar usuario al grupo Docker (opcional, evitar `sudo`)
```bash
sudo usermod -aG docker $USER
newgrp docker
```

## 🚀 Uso básico de Docker

### 🐳 Verificar que Docker funciona
```bash
docker run hello-world
```

### 🖥️ Ejecutar un contenedor Ubuntu
```bash
docker run -it ubuntu bash
```

### 📋 Listar contenedores en ejecución
```bash
docker ps
```

### 📦 Listar todos los contenedores
```bash
docker ps -a
```

### ❌ Detener un contenedor
```bash
docker stop <container_id>
```

### 🔄 Eliminar un contenedor
```bash
docker rm <container_id>
```

### 🏗️ Crear y ejecutar un contenedor con puerto expuesto
```bash
docker run -d -p 8080:80 nginx
```

### 📜 Ver logs de un contenedor
```bash
docker logs <container_id>
```

### 💾 Listar imágenes descargadas
```bash
docker images
```

### 🚀 Descargar una imagen sin ejecutarla
```bash
docker pull ubuntu
```

### 🔥 Eliminar una imagen
```bash
docker rmi <image_id>
```

Para más detalles, visita la [documentación oficial de Docker](https://docs.docker.com/). 🚀
