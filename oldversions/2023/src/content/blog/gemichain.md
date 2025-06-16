---
title: "langchain + gemini"
description: "uasndo langchain con gemini"
pubDate: "Mar 07 2025" 
heroImage: "./pg16.png"
---

# Integración de Gemini AI con NestJS usando LangChain: Guía Completa

Aprende a implementar un servicio de categorización de actividades usando IA generativa de Google con NestJS y LangChain.

## 📋 Requisitos Previos
- Node.js 18+
- NestJS 10+
- Cuenta en Google Cloud con [Generative AI habilitado](https://console.cloud.google.com/vertex-ai)
- API Key de Gemini

## 🛠 Instalación de Dependencias
```bash
npm install @langchain/google-genai @langchain/core
```

## 🧠 Código del Servicio de Categorización
```typescript
import { Injectable } from '@nestjs/common';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

@Injectable()
export class ScrappifyService {
  private model: ChatGoogleGenerativeAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        'GEMINI_API_KEY no está configurado en las variables de entorno',
      );
    }

    this.model = new ChatGoogleGenerativeAI({
      modelName: 'gemini-2.0-flash',
      maxOutputTokens: 100,
      apiKey,
    });
  }

  async categorizer(data: { message: string }): Promise<string> {
    return this.getGeminiAnswer(data);
  }

  private async getGeminiAnswer(data: { message: string }): Promise<string> {
    try {
      const messages = [
        new SystemMessage(
          'Responde exclusivamente en el formato "clave:valor" usando solo 3 palabras como máximo. ' +
            'Tu objetivo es identificar categorías de actividades urbanas o rurales.',
        ),
        new HumanMessage(
          `Texto a analizar: ${data.message.replace(/\s+/g, ' ').trim()}`,
        ),
      ];

      const response = await this.model.invoke(messages);
      return response.content.toString();
    } catch (error) {
      throw new Error(`Error de Gemini: ${error.message}`);
    }
  }
}
```

## 🔍 Explicación Paso a Paso

### 1. Configuración Inicial
```typescript
this.model = new ChatGoogleGenerativeAI({
  modelName: 'gemini-2.0-flash',
  maxOutputTokens: 100,
  apiKey,
});
```
- **modelName**: Versión del modelo Gemini
  - `gemini-2.0-flash`: Optimizado para velocidad (recomendado)
  - `gemini-pro`: Mayor capacidad de razonamiento
- **maxOutputTokens**: Limita la longitud de la respuesta
- **apiKey**: Obtenido de Google Cloud Console

### 2. Estructura de Mensajes
```typescript
const messages = [
  new SystemMessage('...'),  // Instrucciones del sistema
  new HumanMessage('...')    // Entrada del usuario
];
```
- **SystemMessage**: Define el comportamiento del modelo
- **HumanMessage**: Contiene el texto a analizar

### 3. Ejecución del Modelo
```typescript
const response = await this.model.invoke(messages);
return response.content.toString();
```
- `invoke()`: Ejecuta el modelo con los mensajes
- `content`: Extrae la respuesta generada

## 🚀 Ejemplo de Uso
```typescript
// En tu controlador
@Post('/categorizar')
async categorizar(@Body() data: { message: string }) {
  return this.scrappifyService.categorizer(data);
}
```

**Entrada:**
```json
{
  "message": "Excursión de senderismo en montañas cercanas con guía profesional"
}
```

**Salida:**
```
actividad: senderismo
tipo: rural
dificultad: media
```

## 💡 Mejores Prácticas
1. **Manejo de Errores:**
```typescript
try {
  // Llamada al modelo
} catch (error) {
  this.logger.error('Error en Gemini', error.stack);
  throw new HttpException('Error procesando solicitud', 500);
}
```

2. **Validación de Entrada:**
```typescript
import { IsString, MaxLength } from 'class-validator';

class CategorizerDto {
  @IsString()
  @MaxLength(500)
  message: string;
}
```

3. **Optimización de Costos:**
```typescript
{
  maxOutputTokens: 50,
  temperature: 0.2
}
```

## ⚠️ Solución de Problemas Comunes

### Error: "Modelo no encontrado"
```bash
npm update @langchain/google-genai
```
Verifica los modelos disponibles:
```typescript
const models = await this.model.getAvailableModels();
console.log(models);
```

### Error: "API Key inválida"
```bash
export GEMINI_API_KEY="tu-api-key-actual"
```

## 📈 Comparativa de Modelos Gemini
| Modelo           | Velocidad | Costo (por 1M tokens) | Caso de Uso                |
| ---------------- | --------- | --------------------- | -------------------------- |
| gemini-2.0-flash | ⚡️ Ultra   | $0.35                 | Respuestas rápidas         |
| gemini-pro       | 🏎 Rápida  | $0.70                 | Razonamiento complejo      |
| gemini-1.5-pro   | 🐢 Media   | $2.50                 | Contexto largo (1M tokens) |

## 🔗 Recursos Adicionales
- [Documentación Oficial LangChain](https://js.langchain.com)
- [Pricing de Gemini](https://cloud.google.com/vertex-ai/pricing)
- [Ejemplos Avanzados](https://github.com/langchain-ai/langchainjs)
