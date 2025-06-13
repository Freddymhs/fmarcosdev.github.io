---
title: "Configurando PostgreSQL"
description: "Guia para instalar PostgreSQL"
pubDate: "Jun 20 2025" 
heroImage: "./pg16.png"
---

# Guía para instalar PostgreSQL en Linux

## Pre-requisitos
sudo apt update
sudo apt upgrade

## Instalación y Configuración Básica

# Paso 1: Instalar PostgreSQL y el cliente
sudo apt install postgresql postgresql-client -y

# Paso 2: Verificar el estado de PostgreSQL
sudo systemctl status postgresql

# Paso 3: Acceder a la consola de PostgreSQL
sudo -u postgres psql

# Paso 4: Verificar roles existentes
sudo -u postgres psql -c "\du"

# Paso 5: Cambiar contraseña del usuario postgres
# (Dentro de la consola psql)
sudo -u postgres psql
\password postgres
# Ingresar la nueva contraseña cuando se solicite

## Instalación de Herramientas Adicionales

# Instalar Git y NPM
sudo apt install git
sudo apt install npm 

## Comandos para el Backend con Prisma

# Generar tablas de la base de datos
npx prisma db push

# Nota: Asegúrate de que tu archivo schema.prisma contiene:
# "postgresql://postgres:postgres@localhost:5432/postgres?schema=public"

# Generar schema GraphQL
npx prisma generate

# Generar migración de Prisma
npx prisma migrate dev

# Iniciar el backend en modo desarrollo
npm run start:dev