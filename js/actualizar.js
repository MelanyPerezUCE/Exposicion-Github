// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Extraer el valor del parámetro 'id'
const id = urlParams.get('id');


if (id == null || id == "") {
    location.href = "Leer"
}

Leer();

async function Leer(){

     // Hacemos una solicitud al servidor cuando se haga clic
 const Solicitud = await fetch(`/api/personas/`+id, {
    method: "GET",  // Cambiar a POST
    headers: {
        "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
    }
});

const Respuesta_Servidor = await Solicitud.json();

if (Respuesta_Servidor.Estado) {
    
    document.getElementById("Inp_Nombre").value=Respuesta_Servidor.Contenido.nombre;
    document.getElementById("Inp_edad").value=Respuesta_Servidor.Contenido.edad;
    document.getElementById("Inp_email").value=Respuesta_Servidor.Contenido.email;
}
else{
    alert(Respuesta_Servidor.Respuesta)
}
}

document.getElementById("Btn_Guardar").addEventListener('click', async() =>{

    var Inp_Nombre = document.getElementById("Inp_Nombre").value;
    var Inp_edad = document.getElementById("Inp_edad").value;  
    var Inp_email = document.getElementById("Inp_email").value;  

    if(Inp_Nombre.trim() == ""){
        alert("Ingrese el Nombre");    
        return;
    }

    if(Inp_edad.trim() == ""){
        alert("Ingrese la Edad");    
        return;
    }
    
    if(Inp_email.trim() == ""){
        alert("Ingrese el Email");    
        return;
    }

    // Hacemos una solicitud al servidor cuando se haga clic
    const Solicitud = await fetch(`/api/personas/`+id, {
        method: "PUT",  // Cambiar
        headers: {
            "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
        },
        body: JSON.stringify({
            nombre: Inp_Nombre,
            edad: Inp_edad,
            email: Inp_email 
        })
    });
    
    const Respuesta_Servidor = await Solicitud.json();

    if (Respuesta_Servidor.Estado) {
        alert(Respuesta_Servidor.Respuesta)
        
    } else {
        alert(Respuesta_Servidor.Respuesta)
    }
    
});

document.getElementById("Btn_Borrar").addEventListener('click', async() =>{

   // Hacemos una solicitud al servidor cuando se haga clic
   const Solicitud = await fetch(`/api/personas/`+id, {
    method: "DELETE",  // Cambiar
    headers: {
        "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
    }
});

const Respuesta_Servidor = await Solicitud.json();

if (Respuesta_Servidor.Estado) {
    location.href = "Leer"
} else {
    alert(Respuesta_Servidor.Respuesta)
}

});