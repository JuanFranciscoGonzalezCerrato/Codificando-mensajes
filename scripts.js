

// function codificar() {
// 	let mensaje = prompt("El texto que introduzcas será codificado");
// 	mensaje = mensaje.toUpperCase();

// 	// console.log(mensaje);
// 	document.getElementById("mostrarParrafo").innerHTML=mensaje;

function codificar() {
    let mensaje = prompt("Introduce el texto que deseas codificar");
    let mensajeCodificado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i].toUpperCase();

        if ((caracter >= 'A' && caracter < 'Z') || (caracter >= '0' && caracter < '9')) {
            // Si el caracter es una letra entre 'A' y 'Y' o un número entre '0' y '8',
            // reemplázalo por el siguiente caracter o número.
            mensajeCodificado += String.fromCharCode(caracter.charCodeAt(0) + 1);
        } else if (caracter === 'Z') {
            // Si el caracter es Z, reemplázalo con la letra A.
            mensajeCodificado += 'A';
        } else if (caracter === '9') {
            // Si el caracter es 9, reemplázalo con el número 0.
            mensajeCodificado += '0';
        } else {
            // Mantén otros caracteres sin cambios.
            mensajeCodificado += caracter;
        }
    }

    document.getElementById("mostrarParrafo").innerHTML = mensajeCodificado;
}
