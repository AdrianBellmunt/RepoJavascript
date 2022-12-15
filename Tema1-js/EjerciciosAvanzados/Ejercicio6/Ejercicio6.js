function hora() {

    var fecha=new Date();

    var minutos = fecha.getMinutes();

    if(minutos < 10) { minutos = '0' + minutos; }

    if (fecha.getHours()>=8 && fecha.getHours()<12) {
        document.write("Buenos dias, son las "+fecha.getHours()+":"+minutos);
        
    }else if (fecha.getHours()>=12 && fecha.getHours()<18) {
        
        document.write("Buenas tardes, son las "+fecha.getHours()+":"+minutos);

    }else if (fecha.getHours()>=18 && fecha.getHours()<8) {
        
        document.write("Buenas noches, son las "+fecha.getHours()+":"+minutos);
    }

    }