# Proyecto de Calendario

Este proyecto es una aplicación de calendario construida con React y Vite, diseñada para permitir a los usuarios gestionar eventos de manera eficiente. Utiliza tecnologías modernas de desarrollo web para ofrecer una experiencia de usuario fluida y reactiva.

## Características

- **Gestión de Eventos:** Los usuarios pueden agregar, editar y eliminar eventos en el calendario.
- **Localización:** Soporte para localización con mensajes en español, facilitando la interacción para usuarios de habla hispana.
- **Estilos Personalizados:** Utiliza CSS para estilos personalizados, incluyendo un sistema de temas para cambiar entre modos claro y oscuro.
- **Responsive Design:** Diseñado para ser completamente responsive, asegurando una experiencia de usuario óptima en dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **React:** Para construir la interfaz de usuario de manera declarativa.
- **Vite:** Como herramienta de construcción y desarrollo, ofreciendo un entorno de desarrollo rápido.
- **date-fns:** Para manejar operaciones de fecha y hora.
- **react-big-calendar:** Un componente de calendario flexible y adaptable para React.
- **Material UI:** Para componentes de UI preconstruidos y estilos.
- **Redux Toolkit:** Para la gestión del estado de la aplicación.
- **SweetAlert2:** Para mostrar alertas y diálogos modales.

## Estructura del Proyecto

El proyecto sigue una estructura modular, organizada principalmente en la carpeta `src`, que incluye:

- `api/`: Módulos para interactuar con APIs externas, como [`calendarAPI`](src/api/calendarAPI.js).
- `assets/`: Contiene recursos estáticos como imágenes.
- `auth/`: Módulos relacionados con la autenticación de usuarios.
- `calendar/`: Componentes y páginas específicas del calendario.
- `helpers/`: Funciones de utilidad, incluyendo localizadores y mensajes para la localización.
- `hooks/`: Custom hooks, como [`useAuthStore`](src/hooks/useAuthStore.js) y [`useUIStore`](src/hooks/useUIStore.js).
- `routes/`: Gestión de rutas de la aplicación.
- `store/`: Gestión del estado global de la aplicación, incluyendo slices como [`authSlice`](src/store/auth/authSlice.js), [`calendarSlice`](src/store/calendar/calendarSlice.js) y [`uiSlice`](src/store/ui/uiSlice.js).
- `styles/`: Estilos globales y específicos de componentes.

## Configuración del Proyecto

Para comenzar a trabajar con este proyecto, sigue estos pasos:

1. **Instalación de Dependencias:**


npm install



## Variables de entorno

Crea un archivo .env basado en .env.template y configura las variables necesarias.

## Ejecutar el Proyecto en Desarrollo:


npm run dev