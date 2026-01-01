import { Router } from "express";
import { Crear_Nuevo, Leer_Nuevo, Leer_id_Nuevo, Actualizar_Nuevo, Eliminar_Nuevo } from "../Controlador/operaciones.js";


const router = Router();

//Rutas
router.post("/personas", Crear_Nuevo);
router.get("/personas", Leer_Nuevo);
router.get("/personas/:id", Leer_id_Nuevo);
router.put("/personas/:id", Actualizar_Nuevo);
router.delete("/personas/:id", Eliminar_Nuevo);


export default router;
