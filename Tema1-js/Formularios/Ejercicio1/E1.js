window.onload = function () {
    document.formulario.nombre.focus();

    var x = document.getElementById("aficion");
    x.addEventListener("change", aficion);

    document.getElementById("form").addEventListener('submit', validarFormulario);
}

   function aficion() {
     alert("La longitud es :"+document.formulario.aficion.length);
     alert("El index escogido es :"+document.formulario.aficion.selectedIndex);
     alert("La aficion escogida es :"+document.formulario.aficion.value);
     
   }

    
    function valida_longitud(){

       
    contenido_textarea = ""
    num_caracteres_permitidos = 150
       num_caracteres = document.forms[0].texto.value.length
    
       if (num_caracteres > num_caracteres_permitidos){
          document.forms[0].texto.value = contenido_textarea
       }else{
          contenido_textarea = document.forms[0].texto.value
       }
    
       if (num_caracteres >= num_caracteres_permitidos){
          document.forms[0].caracteres.style.color="#ff0000";
       }else{
          document.forms[0].caracteres.style.color="#000000";
       }
    
       cuenta()
    }

    function cuenta(){
       document.forms[0].caracteres.value=document.forms[0].texto.value.length
    } 

    function validarFormulario(evento) {

      telefono = document.getElementById("telefono").value;
      if( !(/^\d{9}$/.test(telefono)) ) {
      alert("formato de telefono no correcto");
      evento.preventDefault();
      }
       
      dni = document.getElementById("dni").value;
      var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      
      if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
        alert("Formato DNI no correcto")
        evento.preventDefault();
      }
      
      if(valor.charAt(8) != letras[(dni.substring(0, 8))%23]) {
        alert("Error DNI")
        evento.preventDefault();
      }
   
}


   
