(function () {
    var titulo = document.getElementById("titulo");
    var posicion = 0;
    var direccion = 1;

    function moverTitulo() {
        posicion += direccion;
        titulo.innerText = titulo.innerText.substring(1) + titulo.innerText[0];
        titulo.style.marginLeft = posicion + "px";
        if (posicion > 10 || posicion < -10) {
            direccion *= -1;
        }
    }

    setInterval(moverTitulo, 90);
})();
