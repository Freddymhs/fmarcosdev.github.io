---
title: "eslint-nodejs-express"
path: blog/eslint-nodejs-express
tags: [nodejs, reactjs]
cover: ./eslint.png
date: 2021-03-17
draw: true
excerpt: eslint-nodejs-express
---

# eslint en express

```
npm install eslint --save-dev
npx eslint --init
```

# eslint en react



```
npx create-react-app myapp --cra-eslint-prettier-airbnb // sin redux
```

- rules generales utiles depende tipo de "framework"

```
  "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
```
