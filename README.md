# ClinicaVeterinaria

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Seguridad y privacidad

Este portfolio es una aplicación estática: no tiene backend, base de datos,
analítica ni almacenamiento del formulario. El formulario solo valida datos en
el navegador y los descarta; no introduzcas datos personales reales. Las
imágenes se sirven desde `public/images` y las fuentes usan la pila local del
sistema para evitar solicitudes a terceros.

La política CSP está en `src/index.html` y limita scripts, conexiones e imágenes
al mismo origen. Se permite `unsafe-inline` únicamente en estilos porque
Angular inserta estilos de componentes durante la ejecución. GitHub Pages no
permite configurar encabezados HTTP personalizados para este sitio; por eso
esta política usa una etiqueta meta y no puede aplicar directivas que requieren
encabezados HTTP, como `frame-ancestors` o HSTS. GitHub Pages sirve el sitio con
HTTPS.

Antes de publicar, ejecuta `npm audit` y revisa que el build de producción y las
pruebas terminen correctamente. GitHub Pages y los cambios de código no
constituyen una certificación SOC 2 ni ISO/IEC 27001 o 27701. Esos marcos
requieren controles y evidencias organizativas; CISSP es una certificación
profesional, no un estándar de cumplimiento.

## GitHub Pages

El `base href` relativo permite servir el sitio tanto desde un dominio propio
como desde la ruta de un repositorio de GitHub Pages. Genera el sitio con
`npm run build` y publica el contenido de `dist/clinica-veterinaria/browser`.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
