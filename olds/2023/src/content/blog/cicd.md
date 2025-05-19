---
title: "CI/CD"
description: "Conceptos basicos del buen uso de CI/CD con GitHub Actions"
pubDate: "Feb 27 2025" 
heroImage: "./pg16.png"
---
# Guía de Uso de CI/CD con GitHub Actions

**Desde lo Básico hasta lo Avanzado**

Esta guía te llevará paso a paso para dominar GitHub Actions, crear pipelines profesionales, proteger ramas, optimizar workflows y asegurar un entorno de colaboración eficiente.

---

## 1. Introducción a GitHub Actions

GitHub Actions es una herramienta de CI/CD integrada en GitHub que permite automatizar tareas como builds, tests y despliegues.

### Conceptos Clave:

- **Workflow**: Un proceso automatizado que se ejecuta en respuesta a eventos (push, pull request, etc.).
- **Job**: Un conjunto de pasos que se ejecutan en un mismo entorno.
- **Step**: Un comando o acción que se ejecuta dentro de un job.
- **Action**: Un bloque reutilizable de código que realiza una tarea específica (por ejemplo, `actions/checkout`).

---

## 2. Configuración Básica de un Workflow

### Crear un Workflow:

1. Crea una carpeta `.github/workflows/` en tu repositorio.
2. Dentro de esta carpeta, crea un archivo YAML (por ejemplo, `ci-cd.yml`).

### Estructura Básica:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build project
        run: npm run build
```
#### Explicación:
on: Define los eventos que activan el workflow (push, pull request, etc.).

jobs: Contiene los jobs que se ejecutarán.

steps: Define los pasos que se ejecutan en cada job.

## 3. Uso de Acciones del Marketplace
El GitHub Marketplace ofrece acciones predefinidas que puedes integrar en tus workflows.

### Acciones Comunes:
actions/checkout: Descarga el código del repositorio.

actions/setup-node: Configura Node.js en el entorno.

akhileshns/heroku-deploy: Despliega la aplicación en Heroku.

Ejemplo de Uso de actions/checkout:

```
- name: Checkout code
  uses: actions/checkout@v4
```
Ejemplo de Uso de npm ci:

```
- name: Install dependencies
  run: npm ci
```

¿Por qué npm ci?: Es más rápido y seguro que npm install porque usa el package-lock.json para instalar dependencias de manera consistente.

## 4. Protección de Ramas y Merge Seguro
### Proteger la Rama main:
Ve a Settings > Branches en tu repositorio.

Crea una regla de protección para main:

Requiere que los cambios pasen los workflows de CI/CD antes de mergear.

Requiere que la rama esté actualizada antes de mergear.

Bloquea mergeos directos a main.

### Configuración en el Workflow:

```
on:
  pull_request:
    branches:
      - main
```

### ¿Por qué es importante?:
- Evita mergear código que no ha pasado las pruebas.

- Asegura que el código en main esté siempre actualizado y funcional.

### 5. Despliegue Automático con Heroku
#### Configuración del Despliegue:
Crea un token de Heroku y guárdalo en Settings > Secrets and variables > Actions.

Usa la acción akhileshns/heroku-deploy para desplegar.

#### Ejemplo de Workflow de Despliegue:

```
deploy:
  runs-on: ubuntu-latest
  needs: build
  steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Deploy to Heroku
      uses: akhileshns/heroku-deploy@v3
      with:
        heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
        heroku_app_name: "your-app-name"
        heroku_email: "your-email@example.com"
```

#### Rollback Automático:
Configura un health check en Heroku para verificar que la aplicación está funcionando correctamente después del despliegue. Si falla, se realiza un rollback automático.

## 6. Uso de Entornos (Environments)
### Crear Entornos:
Ve a Settings > Environments en tu repositorio.

Crea entornos como dev, staging y production.

### Configuración en el Workflow:

```
deploy:
  runs-on: ubuntu-latest
  environment: production
  steps:
    - name: Deploy to Heroku
      uses: akhileshns/heroku-deploy@v3
      with:
        heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
        heroku_app_name: "your-app-name"
```

#### ¿Por qué usar entornos?:
Permite gestionar diferentes etapas del desarrollo (dev, staging, production).

Facilita la implementación de políticas de seguridad y permisos.

## 7. Paralelización y Dependencias entre Jobs
### Paralelización:
Ejecuta jobs en paralelo para optimizar el tiempo de ejecución.

### Dependencias entre Jobs:
Usa needs para definir dependencias entre jobs.

Ejemplo:
```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build project
        run: npm run build

  test:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Run tests
        run: npm test

  deploy:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3
```

## 8. Cancelación de Builds Redundantes
### Uso de cancel-workflow-action:
Cancela builds anteriores si se inicia uno nuevo.

### Ejemplo:
```
- name: Cancel previous redundant builds
  uses: styfle/cancel-workflow-action@v2
  with:
    access_token: ${{ github.token }}
```

#### ¿Por qué es útil?:
Evita el desperdicio de recursos al cancelar builds innecesarios.

## 9. Uso de Condiciones (if)
### Ejecución Condicional:
Usa if para ejecutar pasos solo bajo ciertas condiciones.

Ejemplo:

```
- name: Deploy to Heroku
  if: github.event_name == 'push' && github.ref == 'refs/heads/main'
  uses: akhileshns/heroku-deploy@v3
```
#### ¿Por qué es útil?:
Permite ejecutar acciones solo en ciertos eventos (push, pull request, etc.).

## 10. Workflow Completo 
Ejemplo de Workflow Completo:

```
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build project
        run: npm run build

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment: production
    steps:
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "your-app-name"
```
