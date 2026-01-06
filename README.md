# Exposición GitHub - Versionamiento, CI y CD

## Descripción

Este proyecto es una exposición práctica de las funcionalidades de GitHub enfocadas en el versionamiento de código, Integración Continua (CI) y Despliegue Continuo (CD). Se trata de una aplicación web simple construida con Node.js que demuestra operaciones CRUD (Crear, Leer, Actualizar, Eliminar) conectada a una base de datos MySQL. El objetivo principal es ilustrar cómo utilizar GitHub para gestionar el ciclo de vida del desarrollo de software, incluyendo el control de versiones, automatización de pruebas y despliegues.

## Características

- **Operaciones CRUD**: Implementación completa de operaciones básicas de base de datos.
- **Arquitectura MVC**: Separación clara entre Modelos, Vistas, Controladores y Servicios.
- **Pruebas Automatizadas**: Configuración de Jest para ejecutar tests unitarios.
- **Contenedorización**: Uso de Docker para facilitar el despliegue y la consistencia del entorno.
- **CI/CD con GitHub Actions**: Pipelines automatizados para integración continua y despliegue continuo.

## Tecnologías Utilizadas

- **Backend**: Node.js con Express.js
- **Base de Datos**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Testing**: Jest
- **Contenedorización**: Docker y Docker Compose

## Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- Docker y Docker Compose
- Git

### Pasos de Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/MelanyPerezUCE/Exposicion-Github.git
   cd Exposicion-Github
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura la base de datos**:
   - Asegúrate de tener MySQL corriendo localmente o usa Docker Compose para levantar los servicios.
   - Ejecuta Docker Compose para iniciar la base de datos:
     ```bash
     docker-compose up -d
     ```

4. **Ejecuta las pruebas**:
   ```bash
   npm test
   ```

5. **Inicia el servidor**:
   ```bash
   npm start
   ```

   El servidor estará disponible en `http://localhost:3000`.


## Versionamiento con Git y GitHub

Este proyecto demuestra las mejores prácticas de versionamiento:

- **Ramas (Branches)**: Uso de ramas para desarrollo de nuevas funcionalidades (feature branches), corrección de bugs y releases.
- **Pull Requests**: Revisión de código a través de pull requests antes de fusionar cambios.
- **Etiquetas (Tags)**: Versionado semántico con tags para releases.
- **Git Flow**: Seguimiento de un flujo de trabajo Git estructurado.

### Flujo de Trabajo Recomendado

1. Crea una rama para tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`
2. Realiza commits descriptivos: `git commit -m "Agrega nueva funcionalidad"`
3. Sube la rama: `git push origin feature/nueva-funcionalidad`
4. Crea un Pull Request en GitHub para revisión
5. Una vez aprobado, fusiona a main

## CI/CD con GitHub Actions

El proyecto incluye configuraciones para automatizar el proceso de CI/CD:

### Integración Continua (CI)

- **Ejecución automática de pruebas**: Cada push y pull request activa las pruebas automatizadas.
- **Linting y formateo** (opcional): Verificación de código con herramientas como ESLint para detectar errores y Prettier para formateo consistente. Actualmente no configurado, pero recomendado para proyectos más grandes.
- **Construcción de la aplicación**: Build automático para asegurar que el código compile correctamente.

### Despliegue Continuo (CD)

- **Contenedorización**: Uso de Docker para entornos consistentes en desarrollo y producción.

## Estructura del Proyecto

```
Exposicion-Github/
├── Controlador/          # Lógica de controladores
├── Database/             # Configuración de conexión a BD
├── Modelos/              # Modelos de datos
├── Routers/              # Definición de rutas
├── Servicios/            # Lógica de negocio
├── css/                  # Estilos CSS
├── js/                   # Scripts del frontend
├── tests/                # Pruebas unitarias
├── views/                # Vistas HTML
├── servidor.js           # Punto de entrada del servidor
├── package.json          # Dependencias y scripts
├── jest.config.js        # Configuración de Jest
├── docker-compose.yml    # Configuración de Docker
```

## Contribución

1. Fork el proyecto
2. Crea tu rama de funcionalidad (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
