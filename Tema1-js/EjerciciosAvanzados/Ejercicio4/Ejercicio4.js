
var navegador = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
//alert(navegador);
if (navegador) {

window.open("","pagina2","toolbar=yes,location=no,menubar=yes"+ "width=500,height=500");

}else{

alert("OPERACION NO PERMITIDA EN ESTE NAVEGADOR");

}