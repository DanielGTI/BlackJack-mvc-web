// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function calcularIMC() {
    var formulario = document.getElementById("formulario");
    var peso = +formulario.peso.value;
    var altura = +formulario.altura.value;
    var imc = peso / (altura * altura);
    formulario.imc.value = imc.toFixed(2);
}