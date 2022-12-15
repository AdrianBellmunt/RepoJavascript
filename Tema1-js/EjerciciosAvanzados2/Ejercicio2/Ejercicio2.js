function aviso() {
    let envio = document.getElementById("envio");
    let dni = document.getElementById("dni");
    envio.addEventListener("click", (event) => {
        event.preventDefault()
        if (dni.value === "") {
            alert("esta en blanco");
            
        } else {
            alert('todo ok');
            
        }
      })
    
  }