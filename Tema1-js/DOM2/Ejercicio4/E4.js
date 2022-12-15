function numero_de_enlaces(){
  
    var enlaces = document.getElementsByTagName("a" ).length;
    alert("Numero total de enlaces: " + enlaces);
    
    }

    function Referencia_enlaces(){

        const links = document.links;
        let text = "";
        for (let i = 0; i < links.length; i++) {
          text += links[i].href + " <br> ";
        }

        alert(text);

    }

        function Referencia_enlaces_parrafo(){

            var parrafo = document.getElementsByTagName("p");
             for (var i=0 ;i<parrafo.length;i++){
              var enlaces = document.getElementsByTagName("p")[i].getElementsByTagName("a");
              var conjuntoEnlaces = "";
              for(var x = 0; x<enlaces.length;x++){
                  conjuntoEnlaces  = conjuntoEnlaces + "" + enlaces[x].getAttribute("href") + " ";
              }
              alert(conjuntoEnlaces);
          }

    }

    function colorVerde() {

        document.getElementById('enlaces').style.background='green';
        
    }

    function desactivarColor() {

        document.getElementById('enlaces').style.background='white';
        
    }