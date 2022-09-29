function aviso() {
    let envio = document.getElementById("aviso");
    let dni = document.getElementById("texto");
    envio.addEventListener("click", (event) => {
        event.preventDefault()
        if (dni.value === "") {
            alert("esta en blanco");
        } else {
            alert('todo ok');
        }
      })
    
  }