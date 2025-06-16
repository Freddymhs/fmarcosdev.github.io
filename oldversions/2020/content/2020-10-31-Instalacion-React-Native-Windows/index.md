---
title: "Instalacion-React-Native-Windows 🔥"
path: blog/Instalacion-React-Native-Windows
tags: [reactnative]
cover: ./KZ.jpg

date: 2020-10-31
excerpt: Tutorial ReactNative/Windows
---

#Disclaimer
[LINK de la documentacion oficial para la instalacion correcta](https://reactnative.dev/docs/environment-setup/)  
`guia creada en 30/10/2020 , el contenido de la guia podria no estar actualizado`  
**esta guia no usara AVD o emulador virtual de Android , recomiendo usar un dispositivo Real**  
**la version de EXPO estara al final**

---

#Instalando Chocolatey

- **Prepara PowerShell como Administrador y Ejecutar**
- `Get-ExecutionPolicy`

  - `Set-ExecutionPolicy AllSigned`
    - si no funciona el comando anterior usar `Set-ExecutionPolicy Bypass -Scope Process`
    - responder "S" para aceptar.

- Ahora si debera permitirnos ejecutar el Primer comando intentado `Get-ExecutionPolicy`

- si funciono correcta indicaria algo como `Bypass o Allsigned`

- Ahora podremos realizar la instalacion de **Chocolatey**
  - `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
- Cholatey estara instalado? probar comando

```
 choco
```

---

##instalando Pre Requisitos
`Debemos instalar estos PRE Requisitos : NODE ,PYTHON2, JDK de la siguiente forma`

- **Prepara PowerShell como Administrador y Ejecutar**
- `choco install -y nodejs.install openjdk8`
  - Como comprobar que todo fue instalado?

```
node -v
```

```
npm -v
```

```
python
```

[LINK descargarga de ANDROID STUDIO](https://developer.android.com/studio)` (800mb)`

- abrir y ejecutar instalacion de android studio:
  - instalacion default sin cambios.
- configuracion inicial android studio
  - aceptar las configuracion por default o standart de la aplicacion.
- revisar sdk tools en dentro de Android studio
  - abrir->configuracion->sdk manager->sdk tools :
    - [] hide obsolete packages -> asegurarse de que este marcado "Android SDK tools(obsolete)"

---

##Configurando Variables de Entorno

- `Obtener Ruta SDK` para configurar Variables de Entorno:

  - configuracion en android studio - sdk manager (android sdk location) - copiar ruta :)

- buscar Variables de entorno en window con su buscandor `por ejemplo`
  - Variables de entorno
    - denuevo Variables de entorno
      - ir a la `Seccion De Sistema`
      - (Crear Nueva Variable)
        - **ANDROID_HOME**
          - pegar ruta ->`C:\Users\xxxxxxxxxxxx\AppData\Local\Android\Sdk` (debe ser tu ruta exacta)
      - (EDITAR Variable Existente)
        - **Path** -> Agregar nuevo en la lista con ADD
          - pegar ruta -> `C:\Users\xxxxxxxxxxxxxx\AppData\Local\Android\Sdk\platform-tools`
            - `la ruta platform tools esta dentro de la anterior ruta Android\Sdk`

---

#Creando la Primera Aplicacion  
**usando conexion usb 3.0**

- `en el Celular`
  - habilitar USD depuracion
  - en mis notificaciones ver opciones de cargado : Solo carga (me lo pregunta al ejecutar la aplicacion )
- `en el PC`
  ```
  npm install -g react-native-cli
  ```
- ir a un directorio vacio

  ```
  react-native init MiProtecto
  ```

- dentro de la carpeta proyecto , usando 2 terminales
  ```
  npx react-native start
  ```
  ```
  npx react-native run-ios
  ```
  ```
  npx react-native run-android
  ```

**Aceptar la sincronziacion o conexión en tu celular(si lo solicita) y entonces cargara tu aplicacion :)**

<pre>                                                                       
Solucion de stack overflow
En caso de error de licencia al ejecutarse:
                        Go to Configure>SDK Manager in your Android Studio.
                        Select SDK Tools tab and install Google Play Licensing Library
</pre>

# instalacion de expo

```
npm install -g expo-cli
```

- crear nuevo proyecto expo

```
expo init proyectoexpo
```
