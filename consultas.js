// Importa un módulo llamado "pool" desde el archivo "./dbConfig.js". Presumiblemente, este módulo contiene una configuración de conexión a la base de datos.
const pool = require("./dbConfig");

//insertar
//Declara una función asíncrona llamada "nuevaCancion" que acepta un parámetro "datos". Esta función se utiliza para insertar una nueva canción en la base de datos. Utiliza el objeto "pool" para realizar consultas a la base de datos.
const nuevaCancion = async (datos) => {
  try {
    const consulta = {
      text: "INSERT INTO canciones (titulo, artista, tono) values($1, $2, $3)",
      values: datos,
    };
    const result = await pool.query(consulta);
    return result.rows;
  } catch (error) {
    console.error("Error al insertar", error);
  }
};

//consultar
//Declara una función asíncrona llamada "prepararCancion" que no acepta ningún parámetro. Esta función se utiliza para consultar todas las canciones de la base de datos y devolver los resultados.
const prepararCancion = async () => {
  try {
    const result = await pool.query("SELECT * FROM canciones");
    return result.rows;
  } catch (error) {
    console.error("Error al consultar", error);
  }
};

//editar
//Declara una función asíncrona llamada "editarCancion" que acepta dos parámetros: "id" (el identificador único de la canción que se va a editar) y "datos" (los nuevos datos de la canción). Esta función se utiliza para actualizar los datos de una canción específica en la base de datos.
const editarCancion = async (id, datos) => {
  try {
    const consulta = {
      text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *",
      values: [datos.titulo, datos.artista, datos.tono, id],
    };
    const result = await pool.query(consulta);
    return result.rows;
  } catch (error) {
    console.error("Error al editar", error);
  }
};

//eliminar
// Declara una función asíncrona llamada "eliminarCancion" que acepta un parámetro "id". Esta función se utiliza para eliminar una canción de la base de datos según su identificador único.
const eliminarCancion = async (id) => {
  try {
    const result = await pool.query(`DELETE FROM canciones WHERE id = $1`, [
      id,
    ]);
    return result;
  } catch (error) {
    console.error("Error al eliminar", error);
  }
};

//Exporta las funciones "nuevaCancion", "prepararCancion", "editarCancion" y "eliminarCancion" para que puedan ser utilizadas en otros archivos de Node.js.
module.exports = {
  nuevaCancion,
  prepararCancion,
  editarCancion,
  eliminarCancion,
};
