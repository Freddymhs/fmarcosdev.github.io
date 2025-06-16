---
title: "Map Pattern"
description: "Map Pattern"
pubDate: "Feb 11 2025"
heroImage: "./skills-svg/zorin-icon.svg"
---

# Estructuras de tipos en TypeScript

Cuando trabajamos en proyectos reales con TypeScript, muchas veces nos encontramos con estructuras de tipos que funcionan, pero que son poco flexibles y difíciles de mantener , cómo solucionarlo con el Map Pattern? haciéndolo más dinámico y escalable.

🚨 El problema: Tipos en TypeScript

Imagina que tienes una estructura de datos que almacena reacciones en un post:

```
export type Reaction = {
  count: number;
  percentage: number;
};

export type FinalResponse = {
  totalScore: number;
  reactions: {
    likes: Reaction;
    unicorns: Reaction;
    explodingHeads: Reaction;
    raisedHands: Reaction;
    fire: Reaction;
  };
};

```

Si en el futuro quieres agregar una nueva reacción, por ejemplo "claps/happyFace", tendrías que modificar este tipo y actualizar todas las partes del código donde se usa. Esto hace que el código sea difícil de escalar y propenso a errores.

✅ Solución: Usar el Map Pattern

Para hacerlo más flexible, podemos usar un mapa de reacciones en lugar de definirlas de forma es:

```
export type ReactionMap = Record<string, Reaction>;

export type FinalResponse = {
  totalScore: number;
  reactions: ReactionMap;
};
```

🔹 ¿Qué ganamos con esto?

✔ Ahora podemos agregar nuevas types de reacciones sin modificar múltiples archivos.
✔ Nuestro código es más limpio y escalable.

Por ejemplo, en nuestra función:

```
export const calculateScore = (
  totalScore: number,
  reactions: ReactionMap
): FinalResponse => {
  return { totalScore, reactions };
};
```

Podemos pasar cualquier reacción sin problemas:

```
const postReactions: ReactionMap = {
  likes: { count: 10, percentage: 50 },
  claps: { count: 5, percentage: 25 },
  hearts: { count: 5, percentage: 25 }
};

const finalResult = calculateScore(100, postReactions);
```

🔒 Pero, ¿y si queremos más control?

El uso de Record<string, Reaction> permite cualquier string como clave, lo que podría introducir errores. Para evitarlo, podemos limitar las claves a valores predefinidos:

```
type AllowedReactions = 'likes' | 'unicorns' | 'explodingHeads' | 'raisedHands' | 'fire';

export type ReactionMap = {
  [key in AllowedReactions]: Reaction;
};
```

Ahora solo se permitirán reacciones definidas en AllowedReactions, asegurando un mayor control sin perder flexibilidad. 🔐



