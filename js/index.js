// document.getElementById("Btn_Guardar").addEventListener('click', async() =>{

//     var Inp_Nombre = document.getElementById("Inp_Nombre").value;
//     var Inp_edad = document.getElementById("Inp_edad").value;  
//     var Inp_email = document.getElementById("Inp_email").value;  



//     // if (!regex.test(Inp_Correo)) {
//     //     Notificacion("Ingrese un correo válido");    
//     //     return;
//     // }

//     // if(Inp_Clave == ""){
//     //     Notificacion("Ingrese una contraseña");    
//     //     return;
//     // }


//     // if(Inp_Clave.length < 6){
//     //     Notificacion("Su clave debe poseer al menos 6 dígitos");    
//     //     return;
//     // }



//     // Hacemos una solicitud al servidor cuando se haga clic
//     const Solicitud = await fetch(`/personas`, {
//         method: "POST",  // Cambiar a POST
//         headers: {
//             "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
//         },
//         body: JSON.stringify({
//             Nombre: Inp_Nombre,
//             Edad: Inp_edad,
//             Emai: Inp_email,   
//         })
//     });
    
//     const Respuesta_Servidor = await Solicitud.json();

//     alert(Respuesta_Servidor.Respuesta)

// });