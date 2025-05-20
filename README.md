# Proyecto CubeJS para KPIs de Serinsa

Este repositorio contiene la estructura de la base de datos en `Database_structure.json` y un archivo de Excel con KPIs sugeridos. El objetivo es crear un dashboard utilizando [Cube.js](https://cube.dev/) conectado a SQL Server.

## Estructura

- `Database_structure.json`: descripción de las tablas de la base de datos.
- `Evaluación Posibles KPIs (2).xlsx`: listado de KPIs propuestos.
- `schema/`: aquí se generarán las definiciones de cubos para Cube.js.
- `scripts/generate_cubes.py`: script que crea archivos de cubos a partir del JSON.
- `cube.js`: configuración básica de Cube.js.
- `.env.example`: variables de entorno de ejemplo.
- `package.json`: dependencias del proyecto.

## Uso

1. Copia `.env.example` a `.env` y ajusta los valores de conexión a tu servidor SQL Server.
2. Instala las dependencias (requiere conexión a internet):

   ```bash
   npm install
   ```

3. Genera los archivos de esquema basados en `Database_structure.json`:

   ```bash
   npm run generate
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

Esto levantará Cube.js en modo desarrollo y podrás empezar a crear tus KPIs basados en los cubos generados.

## Notas

- Revisa el archivo de Excel para conocer los KPIs sugeridos y ajusta los cubos generados según sea necesario.
- El script de generación intenta adivinar el tipo de cada columna (número, texto o fecha) usando el nombre de la misma. Verifica y corrige los tipos de datos según tu modelo real.
- Si utilizas Replit u otra plataforma online, recuerda habilitar el acceso a tu base de datos SQL Server y mantener tu archivo `.env` fuera del control de versiones.
