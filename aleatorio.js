class Person{
    constructor(nome, curso, semestre){
    this.nome = nome,
    this.curso = curso,
    this.semestre = semestre
    }
    set primeiroName(primeiroName){
    this.nome = primeiroName;
    }
    get pegaCurso(){
        return this.curso;
    }
    get pegaSemestre(){
        return this.semestre;
    }
}
    let lucas = new Person('', 'Ciencias da Computação', 5);
    lucas.primeiroName = 'LucasNeiva';
    console.log(lucas.nome);

    console.log(lucas.curso);
    console.log(lucas.semestre);