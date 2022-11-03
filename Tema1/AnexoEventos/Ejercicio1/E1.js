
window.onload = function(){
  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", comprobarespacios);
}
  
function comprobarespacios(event){
  var Nombre = document.getElementById("Nombre");
  var Apellido = document.getElementById("Apellido");
  var telefono = document.getElementById("telefono");
  if(Nombre.value=="" || Apellido.value=="" || telefono.value==""){
    alert("No enviado");
    event.preventDefault();
  }else{
    alert("Enviado");
  }
}