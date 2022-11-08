window.onload = function () {
    document.getElementById('form').onchange = cambiarestilo;
}
function cambiarestilo() {
    if(document.getElementsByName('Fuente')[0].checked) {
        document.getElementById('parrafo').style.fontWeight = document.getElementsByName('Fuente')[0].value
    }
    else {
        document.getElementById('parrafo').style.fontWeight = ""
    }
    if(document.getElementsByName('Fuente')[1].checked) {
        document.getElementById('parrafo').style.fontStyle = document.getElementsByName('Fuente')[1].value
    }
    else {
        document.getElementById('parrafo').style.fontStyle = ""
    }
}
