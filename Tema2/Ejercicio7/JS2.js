function enviar() {
    //Recoger datos del formulario:
    reemail=document.datos.miemail.value; //Email escrito por el usuario
    recontra1=document.datos.micontra1.value; //Contrase&ntilde;a primera
    recontra2=document.datos.micontra2.value; //Contrase&ntilde;a segunda
    //Escribir la url para enviar los datos anteriores:
    ruta="codigophp.php" //ruta del archivo
    envio1="envioEmail="+reemail; //datos email
    envio2="envioContra1="+recontra1; //datos contrase&ntilde;a 1ª
    envio3="envioContra2="+recontra2; //datos contrase&ntilde;a 2ª
    url=ruta+"?"+envio1+"&"+envio2+"&"+envio3; //url para enviar
    ajax1=new ObjetoAjax; //instanciar objeto ObjetoAjax;
    ajax1.pedirTexto(url,"comp"); //m&eacute;todo que devuelve texto en un id.
    }