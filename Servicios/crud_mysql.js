import pool from "../Database/conectar.js"

// 📌 CREATE - Agregar una persona
export const Crear = async (req, res) => {
    const { nombre, edad, email } = req.body;
    try {
        console.log(email)
      const [result] = await pool.query(`INSERT INTO personas (nombre, edad, email) VALUES (?, ?, ?)`, [nombre, edad, email]);

      return{
        Estado: true,
        Respuesta: "Se creo correctamente :)",
        Status: 200
    };
    } catch (error) {
    
      return {
        Estado: false,
        Respuesta: "Base de datos no encontrada",
        Status: 400 
    };
    }
   };

// 📌 READ - Obtener todas las personas
export const Leer = async (req, res) => {
    try {
      const [rows] = await pool.query(`SELECT * FROM personas`);

      return {
    
        Estado: true,
        Respuesta: "Se leyo correctamente",
        Contenido: rows,
        Status: 200
       
    };

    } catch (error) {
      return{
    
        Estado: false,
        Respuesta: "Base de datos no encontrada",
        Status: 400 
       
    };
    }
  };
  
  // 📌 READ - Obtener una persona por ID
  export const Leer_id = async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await pool.query(`SELECT * FROM personas WHERE id = ?`, [id]);
      if (rows.length === 0) {
        return {
    
          Estado: false,
          Respuesta: "Persona no encontrada",
          Status: 400 
      };
      }

      return {
        Estado: true,
        Respuesta: "Se leyo correctamente",
        Contenido: {
          nombre: rows[0].nombre,
          edad: rows[0].edad,
          email: rows[0].email
        },
        Status: 200
    };
  
    } catch (error) {

      return {
    
        Estado: false,
        Respuesta: "Error del servidor",
        Status: 400 
    };
    }
  };
  
  // 📌 UPDATE - Actualizar persona por ID
  export const Actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, edad, email } = req.body;
    try {
      const [result] = await pool.query(
        `UPDATE personas SET nombre = ?, edad = ?, email = ? WHERE id = ?`,
        [nombre, edad, email, id]
      );
      if (result.affectedRows === 0) {
        return {
    
          Estado: false,
          Respuesta: "Persona no encontrada",
          Status: 400 
      };
      }
      return {
    
        Estado: true,
        Respuesta: "Persona actualizada correctamente",
        Status: 200

    };

    } catch (error) {
      return {
    
        Estado: false,
        Respuesta: "Error del servidor",
        Status: 400 
       
    };
    }
  };
  
  // 📌 DELETE - Eliminar persona por ID
  export const Eliminar = async (req, res) => {
    const { id } = req.params;
    try {
      const [result] = await pool.query(`DELETE FROM personas WHERE id = ?`, [id]);
      if (result.affectedRows === 0) {
        return {
    
          Estado: false,
          Respuesta: "Persona no encontrada",
          Status: 400 
         
      };
      }

      return {
    
        Estado: true,
        Respuesta: "Persona eliminada correctamente",
        Status: 200
       
    };
    } catch (error) {
      return {
    
        Estado: false,
        Respuesta: "Error del servidor",
        Status: 400 
       
    };
    }
  };
  
