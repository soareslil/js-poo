console.log('iniciando javascript: programação orientada a objetos');

// a classe é o molde
class Cliente {
    nome;
    cpf;
}

// os clientes são os objetos

const cliente1 = new Cliente();

 cliente1.nome ="Liliane";
 cliente1.cpf ="11122233309";
console.log(cliente1);

const cliente2 = new Cliente;
cliente2.nome ="Ricardo";
cliente2.cpf ="88822233309";
console.log(cliente2);

// O que aprendemos nessa aula:

// Criando classes
// O que são atributos
// Instâcia/Objeto
// Operador new





// molde de conta corrente com metodo sacar() aplicavel para todas as contas do banco
class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            }else{
            console.log("Você não tem saldo suficiente para sacar a quantia desejada.");
        }
    }
}

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
console.log('saldo inicial:',contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 120;
contaCorrenteRicardo.agencia = 1001;
console.log('saldo atual:', contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(200);
console.log( 'saldo atualizado:', contaCorrenteRicardo.saldo);



