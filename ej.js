function problema1(){
    const input = document.getElementById("p1-input");
    const textoIngresado = input.value.trim();
    
 
    if (textoIngresado === "") {
        alert("Por favor ingresa palabras separadas por espacios.");
        return;
    }

 
    const caracteresValidos = /^[a-zA-Z\s]+$/;
    if (!caracteresValidos.test(textoIngresado)) {
        alert("Simbolo no encontrado. Ingrese letras y espacios.");
        return;
    }

    const palabras = textoIngresado.split(" ");
    const palabrasInvertidas = palabras.reverse().join(" ");

    document.getElementById("p1-output").textContent ="El cambio en sus palabras o letras es: " + palabrasInvertidas;
}
