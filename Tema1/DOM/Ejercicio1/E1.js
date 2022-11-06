function anadir_parrafo(){

    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo añadido.');
    parrafo.appendChild(texto);
    document.getElementById('ej-aCh').appendChild(parrafo);
    }

function insertar_parrafo() {

    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo insertado');
    parrafo.appendChild(texto);
    document.getElementById('ej-aCh').appendChild(parrafo);
}

function reemplazar(){
    var nuevoParrafo = document.createElement('p');
    nuevoParrafo.appendChild(document.createTextNode('parrafo remplazado'));
    var viejoParrafo = document.getElementById('ej-aCh').getElementsByTagName('p')[1];
    document.getElementById('ej-aCh').replaceChild(nuevoParrafo,viejoParrafo);
}    

function eliminar(){
    var parrafoAEliminar = document.getElementById('ej-aCh').getElementsByTagName('p')[1];
    document.getElementById('ej-aCh').removeChild(parrafoAEliminar);
}

function clonar(){
    var clon = document.getElementById('ej-aCh').cloneNode(true);
    document.getElementById('ej-aCh').parentNode.insertBefore(clon,document.getElementById('ej-aCh'));
}
    