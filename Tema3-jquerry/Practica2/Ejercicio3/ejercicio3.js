
	
//Read attributes
$.get("fichero.xml", function (xml) {
    $(xml).find("blog").each(function () {
       var name = $(this).attr('name');
       var description = $(this).attr('description');
       var url = $(this).attr('url');
       alert(name + " " + description + " " + url);
    });
});

