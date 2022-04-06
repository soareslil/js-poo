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




// O uso de underline _ se faz necessario apenas como um lembrete para os devs de que esse campo/atributo so deve ser
//  alterado dentro do metodo da classe, nao é boa pratica ainda usar o # para tornar codigos privados
// molde de conta corrente com metodo sacar(), depositar() aplicavel para todas as contas do banco
class ContaCorrente{
    agencia;
    _saldo;
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            }else{
            console.log("Você não tem saldo suficiente para sacar a quantia desejada.");
        }
    }

    depositar(valor){
        if(valor >0){
            this._saldo += valor;
        }
    }
}

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
console.log('saldo inicial:',contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(2590);
contaCorrenteRicardo.agencia = 1001;
console.log('saldo atual:', contaCorrenteRicardo._saldo);
contaCorrenteRicardo.sacar(200);
console.log( 'saldo atualizado:', contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(-100);
console.log( 'não é possivel fazer deposito negativo:', contaCorrenteRicardo._saldo)
console.log( contaCorrenteRicardo);



