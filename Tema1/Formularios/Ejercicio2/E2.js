window.onload = function () {
    document.getElementById("color").onchange = cambiarcolor;
}

function cambiarcolor() {
    var indice = this.selectedIndex
    var valorOpcion = this[indice].value
    document.getElementById("parrafo").style.backgroundColor = valorOpcion;
}
