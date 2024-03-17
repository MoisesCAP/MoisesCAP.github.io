const texto = "Explora y desconéctate de la rutina.";
const divTexto = document.getElementById("textoAnimado");

function escribirTexto() {
    let i = 0;
    const intervalo = setInterval(function() {
        if (i <= texto.length) {
            divTexto.textContent = texto.slice(0, i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 100); // Tiempo de espera entre cada letra (en milisegundos)
}

escribirTexto();