class Alumno {
    nombre: string;
    edad: number;
    curso: string;
  
    constructor(nombre: string, edad: number, curso: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.curso = curso;
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
    }
  }
  
  // Crear un objeto de tipo Alumno
  const alumno = new Alumno("Pedro López", 18, "1CFSJ");
  
  // Mostrar los datos del alumno en la consola
  alumno.mostrarDatos();
  