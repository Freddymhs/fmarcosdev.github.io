<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

 -->

# 🚀 Personal Website 

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Aplicación web profesional construida con React y Vite, implementando Atomic Design y automatización de CI/CD para generación de documentos.


## 📌 Mejoras Futuras
Implementar i18n para soporte multilingüe

Añadir modo oscuro/claro

Integrar CMS para el blog

Mejorar métricas de performance (Lighthouse)

## 🏗️ Arquitectura del Proyecto



### Estructura Atomic Design

```
src/
├── components/
│ ├── atoms/ # Button, Image, Typography
│ ├── molecules/ # JobExperience, SocialLink
│ ├── organisms/ # Header, Footer, Hero
│ ├── pages/ # AboutMe, Blog, Certificates
│ └── templates/ # MainLayout, BlogLayout
├── assets/ # Fuentes, iconos, imágenes
├── data/ # resume.json (JSON Resume)
└── generate-resume-files-by-workflow/ # CV automáticos
```


### Stack Tecnológico
```
| Categoría      | Tecnologías                                  |
| -------------- | -------------------------------------------- |
| Core           | React 18, Vite, TypeScript                   |
| Estilos        | TailwindCSS, PostCSS                         |
| CI/CD          | GitHub Actions, wkhtmltopdf, pandoc          |
| Formato CV     | JSON Resume, dev-ats theme                   |
| Calidad Código | ESLint, Prettier, TypeScript tipado estricto |

```



## 🎨 Colores

Paleta de Colores:

- #DFD829	Resaltado	
- #252830	Fondo	
- #61A059	Títulos	
- #FFFFFF	Texto	

## Tipografía

Primaria: Inter (sans-serif)
Secundaria: Mono Lisa (monospace)

## 🌍 Rutas
- / about_me
- / social
- / certificates
- / blog
- / projects

/certificates - Certificaciones

/blog - Artículos técnicos

## ⚙️ Sistema Automatizado generador de CV

Flujo CI/CD que genera:
- `cv.html` (via resume-cli)
- `cv.pdf` (via wkhtmltopdf)
- `cv.docx` (via pandoc)

```yaml
name: Generate Resume
on:
  push:
    branches: [development]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install jsonresume-theme-dev-ats resume-cli
      - run: |
          npx resume export --theme dev-ats --format html cv.html
          wkhtmltopdf cv.html cv.pdf
          pandoc cv.html -o cv.docx
```

<!-- cosas qe agregar a este readme: -->
<!-- view transition -->
<!-- react router -->
<!-- tailwindcss/vite -->
