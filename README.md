# API CRUD de Productos y Usuarios con Next.js

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

API REST construida con **Next.js** (API Routes) para la gestión de **productos** y **usuarios** mediante operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar). Incluye manejo de errores, validaciones y una estructura organizada y escalable.

## ✨ Características

- Rutas API personalizadas con **Next.js API Routes**
- Gestión completa de **productos** (CRUD)
- Gestión completa de **usuarios** (CRUD)
- Manejo de errores y validaciones
- Estructura escalable y organizada

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| Next.js | Framework fullstack (API Routes) |
| JavaScript / TypeScript | Lenguajes del proyecto |
| Node.js | Entorno de ejecución |
| npm | Gestor de paquetes |
| CSS | Estilos base del scaffold |

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18.17 o superior (recomendado LTS) — incluye **npm**
- **Git** para clonar el repositorio
- Un cliente HTTP para probar la API (navegador, [Postman](https://www.postman.com/), Thunder Client o `curl`)

## 🚀 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/NinaDIV/API-CRUD-NextJS.git
   cd API-CRUD-NextJS
   ```

2. Entra a la carpeta de la aplicación (el proyecto Next.js vive en `mi-api-next/`):

   ```bash
   cd mi-api-next
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. La API estará disponible en `http://localhost:3000/api` — desde ahí puedes consumir los endpoints de productos y usuarios (por ejemplo `http://localhost:3000/api/products`).

### Build de producción

```bash
npm run build
npm start
```

## 📁 Estructura del proyecto

```
API-CRUD-NextJS/
└── mi-api-next/
    ├── pages/
    │   └── api/
    │       ├── products/    # Endpoints CRUD de productos
    │       └── users/       # Endpoints CRUD de usuarios
    ├── lib/                 # Utilidades y helpers
    └── package.json
```
