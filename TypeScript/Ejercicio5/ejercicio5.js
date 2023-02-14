var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, ", Edad: ").concat(this.edad, ", Curso: ").concat(this.curso));
    };
    return Alumno;
}());
var alumno1 = new Alumno("Pedro López", 18, "1CFSJ");
alumno1.mostrarDatos();
var Curso = /** @class */ (function (_super) {
    __extends(Curso, _super);
    function Curso(nombre, edad, curso, nombreCurso) {
        var _this = _super.call(this, nombre, edad, curso) || this;
        _this.nombreCurso = nombreCurso;
        return _this;
    }
    Curso.prototype.mostrarDatos = function () {
        _super.prototype.mostrarDatos.call(this);
        alert("Mi nombre es ".concat(this.nombre, ", Tengo ").concat(this.edad, " a\u00F1os, Estoy en ").concat(this.curso, " ").concat(this.nombreCurso));
    };
    return Curso;
}(Alumno));
var primerCursoDAW = new Curso("Pedro López", 18, "1CFSJ", "Primer curso de grado superior de DAW");
primerCursoDAW.mostrarDatos();
