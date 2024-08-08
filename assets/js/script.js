import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){

    $("#button-mail").click(function () {
        alert("El correo fue enviado correctamente");
    });

});