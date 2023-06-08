// CREACION DE UN OBJETO LITERAL
let mike = {
    nombre: "mike",
    edad: 19,
    cursos: [
        "Curso de HTML",
        "Curso de CSS",
        "Curso de JS"
    ],

    aprobarCurso(nuevoCurso){
        this.cursos.push(nuevoCurso)
    }
};

// CREACION DE UNA CLASE

class Usuario{
    constructor(nombre, edad, cursos){
        this.name = nombre,
        this.edad = edad,
        this.cursos = cursos
    }

    aprobarCurso(nuevoCurso){
        this.cursos.push(nuevoCurso)
    }
}

// CREACION DE UN NUEVO OBJETO EN BASE A LA CLASE

let erick = new Usuario("erick", 18, ["Curso de UX UI", "Curso de Diseño"]);
