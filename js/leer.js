Leer();

async function Leer(){

     // Hacemos una solicitud al servidor cuando se haga clic
 const Solicitud = await fetch(`/api/personas`, {
    method: "GET",  // Cambiar a POST
    headers: {
        "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
    }
});

const Respuesta_Servidor = await Solicitud.json();

if (Respuesta_Servidor.Estado) {
    
    crearTabla(Respuesta_Servidor.Contenido)
}
else{
    alert(Respuesta_Servidor.Respuesta)
}
}

      function crearTabla(data) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
  
        // Encabezados
        const encabezados = Object.keys(data[0]);
        const filaEncabezados = document.createElement("tr");
  
        encabezados.forEach(encabezado => {
          const th = document.createElement("th");
          th.textContent = encabezado.toUpperCase();
          filaEncabezados.appendChild(th);
        });
  
        thead.appendChild(filaEncabezados);
        table.appendChild(thead);
  
        // Filas de datos
        data.forEach(item => {
          const fila = document.createElement("tr");
          fila.onclick = function () {
            window.location = "Actualizar?id="+item.id
          };
          encabezados.forEach(clave => {
            const td = document.createElement("td");
            td.textContent = item[clave];
            fila.appendChild(td);
          });
          tbody.appendChild(fila);
        });
  
        table.appendChild(tbody);
  
        document.getElementById("tabla-container").appendChild(table);
      }