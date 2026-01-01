import { Crear, Leer, Leer_id, Actualizar, Eliminar} from "../Servicios/crud_mysql.js"

export const Crear_Nuevo = async(req, res) =>{

    const Pasar_Crear = await Crear(req,res);

    res.status(Pasar_Crear.Status).json({
        Estado: Pasar_Crear.Estado,
        Respuesta: Pasar_Crear.Respuesta
    });

}

export const Leer_Nuevo = async(req, res) =>{

    const Pasar_Leer = await Leer(req,res);

    if(Pasar_Leer.Estado){
        res.status(Pasar_Leer.Status).json({
            Estado: Pasar_Leer.Estado,
            Respuesta: Pasar_Leer.Respuesta,
            Contenido: Pasar_Leer.Contenido
        });
    }
    else{
        res.status(Pasar_Leer.Status).json({
            Estado: Pasar_Leer.Estado,
            Respuesta: Pasar_Leer.Respuesta
        });
    }
}

export const Leer_id_Nuevo = async(req, res) =>{

    const Pasar_Leer_id = await Leer_id(req,res);

    if(Pasar_Leer_id.Estado){
        res.status(Pasar_Leer_id.Status).json({
            Estado: Pasar_Leer_id.Estado,
            Respuesta: Pasar_Leer_id.Respuesta,
            Contenido: Pasar_Leer_id.Contenido
        });
    }
    else{
        res.status(Pasar_Leer_id.Status).json({
            Estado: Pasar_Leer_id.Estado,
            Respuesta: Pasar_Leer_id.Respuesta
        });
    }

}

export const Actualizar_Nuevo = async(req, res) =>{

    const Pasar_Actualizar = await Actualizar(req,res);

    res.status(Pasar_Actualizar.Status).json({
        Estado: Pasar_Actualizar.Estado,
        Respuesta: Pasar_Actualizar.Respuesta
    });

}

export const Eliminar_Nuevo = async(req, res) =>{

    const Pasar_Eliminar = await Eliminar(req,res);

    res.status(Pasar_Eliminar.Status).json({
        Estado: Pasar_Eliminar.Estado,
        Respuesta: Pasar_Eliminar.Respuesta
    });

}