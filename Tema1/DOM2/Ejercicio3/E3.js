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

        const links = document.links;
        let text = "";
        for (let i = 0; i < links.length; i++) {
          text += links[i].href + " <br> ";
        }

        alert(text);

    }