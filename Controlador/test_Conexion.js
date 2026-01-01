import pool from "../Database/conectar.js"
import {initializeDatabase} from "../Modelos/estructura_Mysql.js"

async function test_Conexion() {
    
    try {
        const connection = await pool.getConnection();
        console.log("Conexion exitosa a la base de datos");
        initializeDatabase();
        connection.release();
        
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error.message);

        await new Promise(resolve => setTimeout(resolve, 10000));

        console.log("Reintentando conectar a la base de datos");

        await test_Conexion();
        
    }
}

export default test_Conexion;