function resetear() {
    document.getElementById('form').reset();
}

document.getElementById('form').onchange = resultado;

function resultado() {

    if (document.getElementsByName('ensalada')[0].checked && document.getElementsByName('jamon')[0].checked) {
        var resultado = 10;
        alert("precio entrantes: "+resultado +" " +"Entrante seleccionado: ensalada");
    }else{

        if(document.getElementsByName('ensalada')[0].checked) {
            var entrante1 = document.getElementById('ensalada').value;
            alert("precio entrante ensalada: "+entrante1);
        }else{

        if(document.getElementsByName('jamon')[0].checked) {
                var entrante2 = document.getElementById('jamon').value;
                alert("precio entrante jamon: "+entrante2 +"Entrante seleccionado: jamon");
            }

        }
    }

    for (let index = 0; index <= document.getElementsByName('segundoplato').length; index++) {
        var valor = document.getElementsByName('segundoplato')[index]
        if(valor.checked == true) {
            var precio = document.getElementById('precio').value;

            alert("Segundo plato: "+precio);
            alert("postre: "+ 5);
        }        
    }

   
}
    