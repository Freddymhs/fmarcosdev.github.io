---
title: "NativeWind en expo react native"
description: "Instalacion de nativewind en expo react native"
pubDate: "Feb 04 2025" 
heroImage: "./pg16.png"
---

# Guía Configurar NativeWind con Expo y TypeScript

1. Instalar dependencias necesarias
Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

2. Crear el archivo tailwind.config.js
Crea un archivo tailwind.config.js en la raíz de tu proyecto y configura el contenido de la siguiente manera:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Asegúrate de incluir las rutas a todos los archivos de tus componentes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Crear el archivo global.css en la raíz
Crea un archivo global.css en la raíz de tu proyecto y añade las siguientes directivas de Tailwind:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Configurar babel.config.js
Crea o actualiza el archivo babel.config.js en la raíz de tu proyecto con la siguiente configuración:

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

5. Configurar metro.config.js
Si tu proyecto no tiene un archivo metro.config.js, ejecuta el siguiente comando para crearlo:

```
npx expo customize metro.config.js
```

Luego, reemplaza el contenido del archivo con lo siguiente:

```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

6. Importar global.css en el layout padre
Asegúrate de importar global.css en el archivo principal de tu aplicación (por ejemplo, _layout.tsx o App.tsx):

```
import "./global.css";
```

7. Usar Tailwind en tus componentes
Ahora puedes usar clases de Tailwind directamente en tus componentes:

```
import { Text, View } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Hola, Mundo!</Text>
    </View>
  );
}
```

8. Configurar TypeScript para NativeWind
Crea un archivo nativewind-env.d.ts en la raíz de tu proyecto para asegurar que TypeScript reconozca las clases de Tailwind:

```
/// <reference types="nativewind/types" />
```

***Asegúrate de estar utilizando la versión correcta de NativeWind. Esta guía está basada en NativeWind v4. Si en el futuro hay cambios importantes, consulta la documentación oficial para actualizaciones.***