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
    const Solicitud = await fetch(`/api/personas`, {
        method: "POST",  // Cambiar a POST
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
        location.reload()
    } else {
        alert(Respuesta_Servidor.Respuesta)
    }

});