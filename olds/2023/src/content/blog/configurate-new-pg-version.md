---
title: "Configurando PG16"
description: "Guia para configurar una nueva version de PG en zorin"
pubDate: "Nov 02 2024" 
heroImage: "./pg16.png"
---

# Guía de Configuración de PostgreSQL 16 en Linux Zorin

## Esta guía te ayudará a configurar PostgreSQL 16 y verificar la conexión.


### 1. Verificar el Estado de PostgreSQL

- Comprueba el estado del servicio:
```
sudo systemctl status postgresql
```

- Si no está corriendo, inicia PostgreSQL:
```
sudo systemctl start postgresql
sudo systemctl enable postgresql  # Habilita inicio automático
```
### 2. Configurar la Autenticación en pg_hba.conf
Edita el archivo de configuración:
```
sudo nano /etc/postgresql/16/main/pg_hba.conf
```
Agrega o ajusta las líneas:
```
# Tipo, Base de datos, Usuario, Dirección IP, Método de autenticación
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
```
### 3. Configurar postgresql.conf
Abre el archivo:
```
sudo nano /etc/postgresql/16/main/postgresql.conf
```
Ajusta las configuraciones:
```
port = 5432
listen_addresses = 'localhost'  # Cambia a '*' para todas las interfaces

```

4. Reiniciar PostgreSQL
```
sudo systemctl restart postgresql
```

5. Configurar Usuario y Base de Datos
Accede a PostgreSQL:
```
sudo -u postgres psql
```
Ejecuta los comandos:

```
ALTER USER postgres WITH PASSWORD 'postgres';
CREATE DATABASE postgres OWNER postgres;
\q
```

6. Configurar URL de Conexión
Usa esta URL en tu archivo .env:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

7. Verificar Conexión
Prueba la conexión:
```
psql postgresql://postgres:postgres@localhost:5432/postgres
```


***¡Configuración completada! Tu PostgreSQL 16 debería estar listo para usar.***