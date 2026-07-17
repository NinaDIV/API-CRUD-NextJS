# API CRUD con Next.js

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

API completa utilizando **Next.js** para la gestion de productos y usuarios a traves de operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar).

## Caracteristicas

- Rutas API personalizadas con Next.js API Routes
- Gestion completa de **productos** (CRUD)
- Gestion completa de **usuarios** (CRUD)
- Manejo de errores y validaciones
- Estructura escalable y organizada

## Tecnologias

- **Framework:** Next.js
- **Lenguaje:** JavaScript
- **Runtime:** Node.js
- **Gestor de paquetes:** npm

## Estructura del proyecto

```
/
â”œâ”€â”€ pages/
â”‚   â””â”€â”€ api/
â”‚       â”œâ”€â”€ products/    # Endpoints de productos
â”‚       â””â”€â”€ users/       # Endpoints de usuarios
â”œâ”€â”€ lib/                 # Utilidades y helpers
â””â”€â”€ package.json
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

La API estara disponible en `http://localhost:3000/api`