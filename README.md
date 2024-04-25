# Desafio_MiRepertorio_M7D7_v2 🎵

Servidor con conexión a PostgreSQL, Insertar registros, Consultar registros, Actualizar registros y Eliminar registros.

## Descripción

La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en
vivo y se puso en contacto con el restaurante del sector para usar su tarima e iniciar un
calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus
estudiantes, la escuela contrató a un desarrollador freelance para la creación de una
aplicación tipo CRUD.
En este desafío deberás desarrollar un servidor con Express que utilice el paquete pg para
conectarse con PostgreSQL y utilice funciones asíncronas para hacer las consultas a la base
de datos.

## Requerimientos📜

1. Crear una ruta POST /cancion que reciba los datos correspondientes a una canción y
   realice a través de una función asíncrona la inserción en la tabla canciones.
   **(3 Puntos)**
2. Crear una ruta GET /canciones que devuelva un JSON con los registros de la tabla
   canciones.
   **(2 Puntos)**
3. Crear una ruta PUT /cancion que reciba los datos de una canción que se desea editar,
   ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice
   ese registro de la tabla canciones.
   **(3 Puntos)**
4. Crear una ruta DELETE /cancion que reciba por queryString el id de una canción y
   realiza una consulta SQL a través de una función asíncrona para eliminarla de la base
   de datos.
   **(2 Puntos)**

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

```bash
git git@github.com:Percy-182/desafio_MiRepertorio_M7D7_v2.git
```

### Pre-requisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo (Ubuntu 20.04, Windows 10, MacOS 10.15)
- Navegador (Firefox, Opera, Chrome, Brave, Safari)
