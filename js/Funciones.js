document.getElementById("inicio").addEventListener("click", mostrarInicio);
document.getElementById("elaboracion").addEventListener("click", mostrarElaboracion);
document.getElementById("productos").addEventListener("click", mostrarProductos);
document.getElementById("contacto").addEventListener("click", mostrarContacto);




function ocultarPaginas() {
    document.getElementById("cuerpo-inicio").style.display = "none";
    document.getElementById("cuerpo-elaboracion").style.display = "none";
    document.getElementById("cuerpo-productos").style.display = "none";
    document.getElementById("cuerpo-contacto").style.display = "none";
    document.getElementById("inicio").className = "pasivo";
    document.getElementById("elaboracion").className = "pasivo";
    document.getElementById("productos").className = "pasivo";
    document.getElementById("contacto").className = "pasivo";
}

function mostrarInicio() {
    ocultarPaginas();
    document.getElementById("inicio").className = "activo";
    document.getElementById("cuerpo-inicio").style.display = "flex";
}
function mostrarElaboracion() {
    ocultarPaginas();
    document.getElementById("elaboracion").className = "activo";
    document.getElementById("cuerpo-elaboracion").style.display = "flex";
}
function mostrarProductos() {
    ocultarPaginas();
    document.getElementById("productos").className = "activo";
    document.getElementById("cuerpo-productos").style.display = "flex";
}
function mostrarContacto() {
    ocultarPaginas();
    document.getElementById("contacto").className = "activo";
    document.getElementById("cuerpo-contacto").style.display = "block";
}


function mensaje() {
    if (document.getElementById("nombre").value !== "" && document.getElementById("ciudad").value !== ""
            && document.getElementById("telefono").value !== "" && document.getElementById("email").value !== "") {
        var nombre = document.getElementById("nombre").value;
        var mensaje = nombre + ", Tu mensaje ha sido enviado";
        alert(mensaje);
    }

}