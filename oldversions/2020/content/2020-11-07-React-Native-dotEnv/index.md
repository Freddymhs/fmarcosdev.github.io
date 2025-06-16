---
title: "React-Native-dotEnv"
path: blog/React-Native-dotEnv
tags: [reactnative]
cover: ./KZ.PNG
date: 2020-11-07
excerpt: React-Native-dotEnv
---

https://www.npmjs.com/package/react-native-dotenv

#instalacion del package

npm i react-native-dotenv

#crea .babelrc

```
{
  "plugins": [
    ["module:react-native-dotenv"]
  ]
}
```

#crear .env

```
API_URL=https://api.example.org
API_TOKEN=abc123
```

#importacion y uso

```
import {API_URL, API_TOKEN} from "@env"
console.log{API_URL}
```
