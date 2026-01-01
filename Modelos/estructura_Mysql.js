import pool from "../Database/conectar.js"


async function createDatabase(){
    try {
        
        // Crear base de datos
        await pool.query(`CREATE DATABASE IF NOT EXISTS cwati1jy5txmsk60`);
        console.log("Base de datos verificada o creada.");
            
      } catch (error) {
        console.error("Error al inicializar la base de datos:", error.message);
      }
}


async function createTable() {
    try {
        // Seleccionar la base de datos
        await pool.query("USE cwati1jy5txmsk60");
    
        // Crear tabla
        const createTableSQL = `CREATE TABLE IF NOT EXISTS personas (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nombre VARCHAR(100),
          edad INT,
          email VARCHAR(100)
        )`;
        await pool.query(createTableSQL);
    
        console.log("Tabla 'personas' lista para usar.");
      } catch (error) {
        console.error("Error al inicializar la base de datos:", error.message);
      }
    
}


// Función para ejecutar ambos pasos
export const initializeDatabase = async () => {
    await createDatabase();
    await createTable();
};