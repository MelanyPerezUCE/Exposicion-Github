import express, {json} from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import test_Conexion from "./Controlador/test_Conexion.js";
import router from "./Routers/router_mysql.js";

//Permitimos la conceccion con el .env
dotenv.config();
const PORT = process.env.PORT;

//Iniciamos express
const app = express();

// Obtenemos la dirección de los elementos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Para que acepte json
app.use(json());
test_Conexion();

  


// Permite mostrar la página web segun la ruta
app.use(express.static(path.join(__dirname)));
// Habilita acceso a la carpeta css
app.use('/css', express.static(path.join(__dirname, 'css')));

// Para que Express sirva archivos JS
app.use('/js', express.static(path.join(__dirname, 'js')));


// ---------------------- Login ------------------------------

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.get("/Crear", (req,res) =>{
  res.sendFile(path.join(__dirname,"views","crear.html"));
});

app.get("/Leer", (req,res) =>{
  res.sendFile(path.join(__dirname,"views","leer.html"));
});

app.get("/Actualizar", (req,res) =>{
  res.sendFile(path.join(__dirname,"views","actualizar.html"));
});


//url  que no este aqui se va al error del middleware
//-------------Gateway-------------------------
app.use("/api", router);



//Middleware para manejar rutas que no existen, 
// con res envio las cosas a lo parte visual del cliente, 
// req almacena el body o los datos a procesar
app.use((req,res)=>{
  res.sendFile(path.join(__dirname,"views","404.html"));
})

app.listen(PORT, () => {
    console.log(`Servidor Activo http://localhost:${PORT}`);
});