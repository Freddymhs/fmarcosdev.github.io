---
title: "Conexion de google a supabase"
description: "Guia  para conectar google a supabase"
pubDate: "Jun 20 2025" 
heroImage: "./pg16.png"
---

# Guía de Configuración de Google Auth para Flutter

## 1. Configuración de Android

### Obtener el Nombre del Paquete
Puedes encontrarlo en:
- androidmanifest.xml
- build.gradle
Ejemplo: com.example.gestor

### Generar APK de Debug
- Ejecutar el comando:
flutter build apk --debug

- El archivo se genera en:
build/app/outputs/flutter-apk/app-debug.apk

### Obtener Huella Digital SHA-1
1. Navegar al directorio:
cd ~/.android

2. Ejecutar el comando para obtener la key:
keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android

3. Copiar el valor SHA-1 del resultado

## 2. Configuración Web

### Generar Build Web
flutter build web

## 3. Configuración Supabase + Google Cloud Console

### En Google Cloud Console:
1. Crear credenciales OAuth
2. Copiar:
   - ID de cliente web
   - Secreto del cliente web

### En Supabase Provider:
1. Pegar:
   - ID de cliente web
   - Secreto del cliente web de Google
2. Copiar el callback URL de Supabase
   Ejemplo: https://samvrmunxovxptwwmplv.supabase.co/auth/v1/callback

### Volver a Google Cloud Console:
1. Pegar el callback URL de Supabase en "URI de redireccionamiento autorizados"

## 4. Configuración Final

### URL Configuration en Supabase
1. IDesarrollo (ejemplo: localhost)
   - Prr a: https://supabase.com/dashboard/project/[TU-ID]/auth/url-configuration
2. Configurar URLs para:
   - oducción (ejemplo: URL de Vercel)

## Notas Importantes:
- Guarda todos los valores SHA-1 y credenciales en un lugar seguro
- Asegúrate de configurar correctamente los URIs de redirección
- Para producción, necesitarás generar nuevas credenciales SHA-1

