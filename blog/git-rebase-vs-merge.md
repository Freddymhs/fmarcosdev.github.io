---
title: "Git Rebase vs Merge: ¿Cuál deberías usar?"
date: "2025-06-20"
tags: ["git", "rebase", "merge", "flujo de trabajo"]
excerpt: "Entiende las diferencias entre git merge y git rebase, cuándo usar cada uno y cómo afectan el historial de tu proyecto."
---

# Git Rebase vs Merge: ¿Cuál deberías usar?

Cuando colaboras en un proyecto con Git, te enfrentas a una elección común: ¿hacer merge o rebase? Aunque ambos sirven para integrar cambios, afectan el historial de manera distinta. Este post explica cómo funcionan, sus ventajas y cuándo deberías usarlos.

## ¿Qué es `git merge`?

Git merge une ramas creando un commit de merge. El historial visual muestra cómo las ramas divergentes se vuelven a juntar, preservando el orden cronológico de los commits.

```bash
git checkout main
git merge feature-branch
```

**Ventajas:**
- Queda claro quién integró qué y cuándo
- Más seguro en equipos grandes
- Preserva el contexto histórico completo

**Desventajas:**
- Historial más "ruidoso" con muchos commits de merge
- Puede ser difícil seguir el flujo en proyectos complejos

## ¿Qué es `git rebase`?

Git rebase reescribe el historial para que parezca que trabajaste sobre otra rama directamente. Es muy útil para mantener un historial lineal y limpio.

```bash
git checkout feature-branch
git rebase main
```

**Ventajas:**
- Historial limpio y lineal
- Ideal para pull requests pequeños
- Más fácil de leer y entender el flujo de desarrollo

**Desventajas:**
- Riesgoso si ya compartiste esa rama (puede causar conflictos si reescribes historia pública)
- Pierdes el contexto temporal real de cuándo se hicieron los cambios

## ¿Cuándo usar cada uno?

| Escenario                                | ¿Merge o Rebase? |
| ---------------------------------------- | ---------------- |
| Integrar una feature ya lista            | **Merge**        |
| Sincronizar tu rama local                | **Rebase**       |
| Trabajas en equipo                       | **Merge**        |
| Trabajas solo (historial limpio)         | **Rebase**       |
| Feature branch grande con muchos commits | **Merge**        |
| Pequeños cambios locales                 | **Rebase**       |

## Ejemplo gráfico

```plaintext
Historial inicial:
A---B---C main
    \
     D---E feature

Después de git merge:
A---B---C---M main
    \      /
     D---E feature

Después de git rebase:
A---B---C---D'---E' main
```

## Buenas prácticas

**Reglas de oro:**
- Nunca hagas rebase de ramas que ya empujaste y otros están usando
- Usa merge para mantener contexto histórico en PRs grandes
- Usa rebase en tus ramas locales antes de hacer un PR
- Si tienes dudas, merge es la opción más segura

**Flujo recomendado:**
1. Trabajas en tu rama local: usa `rebase` para mantenerla actualizada
2. Antes de hacer PR: haz `rebase` para limpiar el historial
3. Al integrar el PR: usa `merge` para preservar el contexto

## Comandos útiles

```bash
# Rebase interactivo para limpiar commits
git rebase -i HEAD~3

# Merge sin fast-forward (siempre crea commit de merge)
git merge --no-ff feature-branch

# Rebase manteniendo commits de merge
git rebase --preserve-merges main
```

## Conclusión

Ambas estrategias son válidas, y lo ideal es entender su impacto para usarlas correctamente. En resumen: usa merge para preservar contexto y colaboración, y rebase para mantener un historial limpio cuando trabajas solo.

La clave está en ser consistente con tu equipo y establecer una estrategia clara desde el inicio del proyecto. Recuerda: un historial claro es tan importante como el código que escribes.