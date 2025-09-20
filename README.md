# Dashboard Financiero Osiris

Este proyecto es un dashboard financiero completo que permite la gestión de usuarios, transacciones, categorías, integración bancaria, automatización, multicurrency y seguridad. Está compuesto por un backend en Node.js/TypeScript y un frontend en React/TypeScript.

## Estructura del Proyecto

```
backend/   # API RESTful, lógica de negocio, modelos, controladores, rutas
frontend/  # Aplicación web, componentes UI, hooks, páginas
```

## Tecnologías Principales

- **Backend:** Node.js, Express, TypeScript, Swagger
- **Frontend:** React, TypeScript, Tailwind CSS

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/sierra117sp/dashboard-osiris.git
cd dashboard-osiris
```

### 2. Instalar dependencias
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../frontend
npm install
```

## Uso

### Backend
```bash
cd backend
npm run dev
```

### Frontend
```bash
cd frontend
npm start
```

La aplicación frontend estará disponible en `http://localhost:3000` y el backend en `http://localhost:5000` (o el puerto configurado).

## Documentación de la API

La documentación Swagger está disponible en `backend/swagger/swagger.yaml`.

## Scripts útiles
- `npm run dev` (backend): Inicia el servidor en modo desarrollo.
- `npm start` (frontend): Inicia la app React.

## Estructura de carpetas destacada

- `backend/src/controllers/`: Controladores de la API
- `backend/src/models/`: Modelos de datos
- `backend/src/routes/`: Rutas de la API
- `frontend/src/components/`: Componentes reutilizables de React
- `frontend/src/pages/`: Páginas principales de la app
- `frontend/src/hooks/`: Hooks personalizados

## Contribución

1. Haz un fork del repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

MIT
