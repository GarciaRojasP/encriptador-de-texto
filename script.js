
var mensaje = document.getElementById("mensaje");
var buttonEncriptar = document.getElementById("encriptarMensaje");    
var buttonDesencriptar = document.getElementById("desencriptarMensaje");
var imagen = document.getElementById("imagen");
var informacion = document.getElementById("informacion");
var resultado = document.getElementById("resultado");
var alerta = document.getElementById("alerta");
var copiar = document.getElementById("copiar");
mensaje.focus();

function habilitarDesabilitar(nuevo){
    imagen.style.display="none";
    informacion.style.display="none";
    resultado.style.display="block";
    copiar.style.display="block";
    resultado.innerHTML=nuevo;
    mensaje.value = "";
}

function encriptarMensaje(evento){
    evento.preventDefault();

    if (mensaje.value == "") {
        alerta.style.display="block";
        alerta.innerHTML = "por favor, ingrese un texto para procesar";
        setTimeout(function () {
            alerta.style.display="none";
        }, 2000);
    } else if (!mensaje.value.match(/^[a-zñ\s.¡!¿?]*$/)) {
        alerta.style.display="block";
        alerta.innerHTML = "solo se admiten minusculas y sin acentos";
        setTimeout(function () {
            alerta.style.display="none";
        }, 2000);
    } else{
    var nuevo = mensaje.value.replace(/e/img, 'enter')
                             .replace(/o/img, 'ober')
                             .replace(/i/img, 'imes')
                             .replace(/a/img, 'ai')
                             .replace(/u/img, 'ufat');
        habilitarDesabilitar(nuevo);
    }
}

buttonEncriptar.onclick = encriptarMensaje;

function desencriptarMensaje(evento){
    evento.preventDefault();

    if (mensaje.value == "") {
        alerta.style.display="block";
        alerta.innerHTML = "por favor, ingrese un texto para procesar";
        setTimeout(function () {
            alerta.style.display="none";
        }, 2000);
    } else if (!mensaje.value.match(/^[a-zñ\s.¡!¿?]*$/)) {
        alerta.style.display="block";
        alerta.innerHTML = "Error, solo se admiten letras en minusculas y sin acentos";
        setTimeout(function () {
            alerta.style.display="none";
        }, 2000);
    } else{
    var nuevo = mensaje.value.replace(/enter/img, 'e')
                             .replace(/ober/img, 'o')
                             .replace(/imes/img, 'i')
                             .replace(/ai/img, 'a')
                             .replace(/ufat/img, 'u');
    habilitarDesabilitar(nuevo);
    }
}                                                    

buttonDesencriptar.onclick = (desencriptarMensaje);
        
function copiarResultado(){
    resultado.innerHTML;
    navigator.clipboard.writeText(resultado.value)
    .then(() => {
        alert("Texto copiado...");
    })
    .catch(err => {
        alert("Algo salió mal", err);
    })
    limpiar();
}

copiar.onclick = copiarResultado;

function limpiar(){
    resultado.innerHTML="";
}