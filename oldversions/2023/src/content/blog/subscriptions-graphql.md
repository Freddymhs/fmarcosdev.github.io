---
title: "subscription graphql"
description: "Cómo usar Suscripciones con GraphQL"
pubDate: "Oct 16 2024"
heroImage: "./skills-svg/flutter.svg"
---


# Guía: Cómo usar Suscripciones con GraphQL

Las suscripciones en GraphQL permiten recibir actualizaciones en tiempo real cuando los datos cambian en el servidor. Esta guía te mostrará cómo implementar y usar suscripciones en tu aplicación GraphQL.

## 1. Configuración

Primero, asegúrate de tener instaladas las dependencias necesarias:

```bash
npm install graphql graphql-subscriptions nexus
```

## 2. Definir los tipos

Define tus tipos GraphQL usando Nexus:

```typescript
import { objectType } from 'nexus';

export const Sale = objectType({
  name: 'Sale',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.float('totalAmount');
    // Otros campos que necesites
  },
});

export const TableSales = objectType({
  name: 'TableSales',
  definition(t) {
    t.nonNull.int('totalSales');
    t.nonNull.int('totalPages');
    t.nonNull.list.nonNull.field('sales', { type: Sale });
  },
});
```

## 3. Configurar PubSub

Crea una instancia de PubSub para manejar los eventos:

```typescript
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();
const SALES_UPDATED = 'SALES_UPDATED';
```

## 4. Implementar la Mutación

Crea una mutación que actualice los datos y publique un evento:

```typescript
import { extendType, nonNull, idArg, intArg } from 'nexus';

export const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('updateTotalAmountInSale', {
      type: Sale,
      args: {
        id: nonNull(idArg()),
        totalAmount: nonNull(intArg()),
      },
      resolve: async (_, { id, totalAmount }, { prisma }) => {
        const updatedSale = await prisma.sale.update({
          where: { id: parseInt(id) },
          data: { totalAmount },
        });

        // Obtener datos actualizados
        const sales = await prisma.sale.findMany({
          take: 10,
          orderBy: { createdAt: 'desc' },
        });

        const totalSales = await prisma.sale.count();
        const totalPages = Math.ceil(totalSales / 10);

        const updatedTableSales = {
          totalSales,
          totalPages,
          sales,
        };

        pubsub.publish(SALES_UPDATED, { salesUpdated: updatedTableSales }); // esto permite la subscripcion

        return updatedSale;
      },
    });
  },
});
```

## 5. Implementar la Suscripción

Define la suscripción que escuchará los eventos:

```typescript
export const Subscription = extendType({
  type: 'Subscription',
  definition(t) {
    t.field('salesUpdated', {
      type: 'TableSales',
      subscribe: () => pubsub.asyncIterator(SALES_UPDATED),
      resolve: (payload) => {
        return payload.salesUpdated;
      },
    });
  },
});
```

## 6. Uso en el Cliente

### Iniciar una Suscripción

En tu cliente GraphQL, inicia la suscripción:

```graphql
subscription {
  salesUpdated {
    totalSales
    totalPages
    sales {
      id
      totalAmount
    }
  }
}
```

### Ejecutar una Mutación

Para provocar un cambio y ver la suscripción en acción, ejecuta la mutación:

```graphql
mutation {
  updateTotalAmountInSale(id: "1", totalAmount: 150) {
    id
    totalAmount
  }
}
```

## 7. Flujo de Trabajo

1. El cliente inicia una suscripción a `salesUpdated`.
2. Cuando se ejecuta la mutación `updateTotalAmountInSale`, el servidor actualiza la venta en la base de datos.
3. Después de la actualización, el servidor publica un evento `SALES_UPDATED` con los datos actualizados.
4. El sistema de suscripciones detecta este evento y envía los datos actualizados a todos los clientes suscritos.
5. El cliente recibe automáticamente los datos actualizados a través de la suscripción.

## Conclusión

Las suscripciones en GraphQL proporcionan una forma poderosa de mantener los datos del cliente sincronizados con el servidor en tiempo real. Al implementar este patrón, puedes crear aplicaciones más reactivas y en tiempo real.