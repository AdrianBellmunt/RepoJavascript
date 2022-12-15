//Ejercicio 7

function pintar(color) {

    var colorear="#ffffff";

    switch (color) {
        case "red":
            colorear = "#ff0000";
            break;

        case "green":
            colorear = "#00ff00";
            break;

        case "blue":
            colorear = "#0000ff";
            break;
    }

     document.bgColor=colorear;
    
}