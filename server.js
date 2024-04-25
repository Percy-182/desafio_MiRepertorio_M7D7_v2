const express = require("express"); //Importa el módulo Express, que es un framework web para Node.js.
const app = express(); //Crea una aplicación Express.
const port = 3000; //Define el número de puerto en el que la aplicación escuchará las solicitudes.

const {
  nuevaCancion,
  prepararCancion,
  editarCancion,
  eliminarCancion,
} = require("./consultas"); //Importa funciones específicas desde un módulo externo llamado "consultas".

//Registra un middleware en Express para permitir el análisis del cuerpo de las solicitudes con formato JSON.
app.use(express.json());

//Define una ruta para manejar solicitudes GET a la ruta raíz ("/"). Cuando se accede a la raíz, la aplicación devuelve el archivo "index.html".
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//insertar
//Define una ruta para manejar solicitudes POST a la ruta "/cancion". Esta ruta se utiliza para insertar una nueva canción en la base de datos utilizando la función nuevaCancion.
app.post("/cancion", async (req, res) => {
  try {
    const datos = Object.values(req.body);
    const respuesta = await nuevaCancion(datos);
    res.json(respuesta);
  } catch (error) {
    res.status(500).send("Algo salió mal :/ ...");
  }
});

//consultar
// Define una ruta para manejar solicitudes GET a la ruta "/canciones". Esta ruta se utiliza para obtener todas las canciones de la base de datos utilizando la función prepararCancion.
app.get("/canciones", async (req, res) => {
  try {
    const registros = await prepararCancion();
    res.json(registros);
  } catch (error) {
    res.status(500).send("Algo salió mal :/ ...");
  }
});

//editar
// Define una ruta para manejar solicitudes PUT a la ruta "/cancion/:id". Esta ruta se utiliza para editar una canción específica en la base de datos utilizando la función editarCancion
app.put("/cancion/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datos = req.body;
    const respuesta = await editarCancion(id, datos);
    res.json(respuesta);
  } catch (error) {
    res.status(500).send("Algo salió mal :/ ...");
  }
});

//eliminar
// Define una ruta para manejar solicitudes DELETE a la ruta "/cancion". Esta ruta se utiliza para eliminar una canción de la base de datos utilizando la función eliminarCancion.
app.delete("/cancion", async (req, res) => {
  try {
    const { id } = req.query;
    const respuesta = await eliminarCancion(id);
    res.json(respuesta);
  } catch (error) {
    res.status(500).send("Algo salió mal :/ ...");
  }
});

//Define una ruta genérica para manejar cualquier otra solicitud que no coincida con las rutas definidas anteriormente. En este caso, simplemente devuelve un mensaje indicando que la página no existe.
app.get("*", (req, res) => {
  //
  res.send("Esta página no existe");
});

//Inicia el servidor Express y lo hace escuchar en el puerto especificado. También imprime un mensaje en la consola indicando la URL donde se puede acceder al servidor.
app.listen(
  port,
  console.log(
    `El servidor está inicializado en el puerto http://localhost:${port}`
  )
);
