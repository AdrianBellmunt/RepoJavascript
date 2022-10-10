function anadir_parrafo(){

    var parrafo = document.createElement('li');
    var texto = document.createTextNode('tiburon.');
    parrafo.appendChild(texto);
    document.getElementById('animal').appendChild(parrafo);
    }

function insertar_parrafo() {

    var parrafo = document.createElement('li');
    var texto = document.createTextNode('gorila');
    parrafo.appendChild(texto);
    document.getElementById('animal').appendChild(parrafo);
}

function reemplazar(){
    var nuevoParrafo = document.createElement('li');
    nuevoParrafo.appendChild(document.createTextNode('animal remplazado'));
    var viejoParrafo = document.getElementById('animal').getElementsByTagName('li')[1];
    document.getElementById('animal').replaceChild(nuevoParrafo,viejoParrafo);
}    

function eliminar(){
    var parrafoAEliminar = document.getElementById('animal').getElementsByTagName('li')[1];
    document.getElementById('animal').removeChild(parrafoAEliminar);
}

function clonar(){
    var clon = document.getElementById('animal').cloneNode(true);
    document.getElementById('animal').parentNode.insertBefore(clon,document.getElementById('animal'));
}
    
function SublistaDOM() {
    var nuevoParrafo = document.createElement('ul');
    nuevoParrafo.appendChild(document.createTextNode('Salvaje'));
    var viejoParrafo = document.getElementById('animal').getElementsByTagName('ul')[1];
    document.getElementById('animal').appendChild(viejoParrafo);
}