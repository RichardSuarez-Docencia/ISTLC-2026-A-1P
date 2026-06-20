obtenerTodosLosActores();
/// HTTP GET - Mostrar todos los actores
 function obtenerTodosLosActores() {
   fetch("http://cine.runasp.net/api/Actores")
    .then((respuesta) => respuesta.json())
    .then((informacion) => {
      console.log(informacion);

      const body = document.getElementById("bodyTabla");
      body.innerHTML = "";
      let html = "";
      informacion.forEach((element) => {
        html += `<tr>
                                <td>${element.idActor}</td>
                                <td>${element.nombre}</td>
                                <td>${element.fechaNacimiento}</td>
                                <td>${element.nacionalidad}</td>
                                <td>
                                  <img src='${element.imagen}'/>
                                </td>
                                <td>
                                    <button onclick='eliminarActor(${element.idActor})' class='buttonDelete'><span class="material-symbols-outlined cursorDelete">delete</span></button>

                                    <button onclick='mostrarActor(${element.idActor})' class='buttonDelete'><span class="material-symbols-outlined cursorDelete">edit</span></button>
                                </td>
                            </tr>`;
          body.innerHTML = html;
      });
    })
    .catch((error) => console.log(error));
}

function mostrarActor(idActor)
{
    obtenerActorPorId(idActor);
}

/// HTTP GET POR ID - Mostrar actor por ID

function obtenerActorPorId(idActor) {
  fetch(`http://cine.runasp.net/api/Actores/${idActor}`)
    .then((respuesta) => respuesta.json())
    .then((informacion) => {
        document.getElementById("txtId").value = informacion.idActor;
        document.getElementById("txtNombre").value = informacion.nombre;
        document.getElementById("txtImagen").value = informacion.imagen;
        document.getElementById("txtFechaNacimiento").value = informacion.fechaNacimiento;
        document.getElementById("txtNacionalidad").value = informacion.nacionalidad;
    })
    .catch((error) => console.log(error));
}

function limpiarFormulario() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtImagen").value = "";
  document.getElementById("txtFechaNacimiento").value = "";
  document.getElementById("txtNacionalidad").value = "";
}

function guardarActor() {
  const idActorObtenido = document.getElementById("txtId").value;
  const nombreActor = document.getElementById("txtNombre").value;
  const imagenActor = document.getElementById("txtImagen").value;
  const fechaNacimientoActor =
    document.getElementById("txtFechaNacimiento").value;
  const nacionalidadActor = document.getElementById("txtNacionalidad").value;

  const actor = {
    idActor: idActorObtenido,
    nombre: nombreActor,
    imagen: imagenActor,
    fechaNacimiento: fechaNacimientoActor,
    nacionalidad: nacionalidadActor,
  };

  if(idActorObtenido == undefined || idActorObtenido == null || idActorObtenido == ''){
    fetch("http://cine.runasp.net/api/Actores", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(actor),
    })
        .then((respuesta) => respuesta.json())
        .then((informacion) => {
        limpiarFormulario();
        Swal.fire({
          title: "Satisfactorio!",
          text: informacion.mensaje,
          icon: "success"
        });
        obtenerTodosLosActores();
        console.log(informacion.mensaje);
        })
        .catch((error) => console.log(error));
  }else{
    actualizarActor(idActorObtenido, actor)
  }
  
}

function actualizarActor(idActorObtenido, actorActualizar) {
  fetch(`http://cine.runasp.net/api/Actores/${idActorObtenido}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(actorActualizar),
  })
    .then((respuesta) => respuesta.json())
    .then((informacion) => {
              Swal.fire({
          title: "Satisfactorio!",
          text: "Actor actualizado exitosamente",
          icon: "success"
        });
        obtenerTodosLosActores()
    })
    .catch((error) => console.log(error));
}

function eliminarActor(idActor) {
  Swal.fire({
  title: "Estás seguro de querer eliminar?",
  text: "Una vez eliminado, no podrás recuperar la información!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sí"
}).then((result) => {
  if (result.isConfirmed){
    fetch(`http://cine.runasp.net/api/Actores/${idActor}`, {
    method: "DELETE",
  })
    .then((respuesta) => respuesta.json())
    .then((informacion) => {
      Swal.fire({
      title: "Eliminado!",
      text: informacion.mensaje,
      icon: "success"
    });
      obtenerTodosLosActores();
    })
    .catch((error) => console.log(error));
  } 
});
}
