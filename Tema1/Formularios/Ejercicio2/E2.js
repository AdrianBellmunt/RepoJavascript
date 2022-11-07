window.onload = function () {
    
    var x = document.getElementById("color");
    x.addEventListener("change", cambiarcolor);

}

function cambiarcolor() {
    var colorear = document.form.color.value;
    document.getElementById("parrafo").style.color = colorear;

}