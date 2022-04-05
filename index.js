console.log('iniciando javascript: programação orientada a objetos');

// a classe é o molde
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

// os clientes são os objetos

const cliente1 = new Cliente();

 cliente1.nome ="Liliane";
 cliente1.cpf ="11122233309";
 cliente1.agencia = 1001;
 cliente1.saldo = 0;


console.log(cliente1);

const cliente2 = new Cliente;

cliente2.nome ="Ricardo";
cliente2.cpf ="88822233309";
cliente2.agencia = 1001;
cliente2.saldo = 100;

console.log(cliente2);

// O que aprendemos nessa aula:

// Criando classes
// O que são atributos
// Instâcia/Objeto
// Operador new