function fecha(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var dias = new Array ("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");
    var fecha=new Date();
    document.write(dias[fecha.getDay()]+","+fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear());
}
