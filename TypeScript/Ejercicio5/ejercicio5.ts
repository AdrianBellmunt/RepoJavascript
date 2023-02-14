class Alumno {
    protected nombre: string;
    protected edad: number;
    protected curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
    } 
} 
let alumno1 = new Alumno("Pedro López", 18, "1CFSJ"); 
alumno1.mostrarDatos();


class Curso extends Alumno { 
    private nombreCurso: string;

    constructor(nombre: string, edad: number, curso: string, nombreCurso: string) { 
        super(nombre, edad, curso);
        this.nombreCurso = nombreCurso;
    } 

    mostrarDatos() { 
        super.mostrarDatos();
        alert(`Mi nombre es ${this.nombre}, Tengo ${this.edad} años, Estoy en ${this.curso} ${this.nombreCurso}`);  
     }    
}  

let primerCursoDAW = new Curso("Pedro López", 18, "1CFSJ", "Primer curso de grado superior de DAW");  
primerCursoDAW.mostrarDatos();