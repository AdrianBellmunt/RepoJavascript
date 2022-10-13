function Caja() {
    
var cajatexto = document.createElement("div");

cajatexto.setAttribute("id","1");
cajatexto.setAttribute("value","cajatexto");

var contenido = document.createElement("h2")

contenido.appendChild(document.createTextNode("Hola Mundo"));

cajatexto.appendChild(contenido);

document.body.appendChild(cajatexto);
}