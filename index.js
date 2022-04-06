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



//early return para validar cedo suas condicoes linha49, da um stop no metodo
// O uso de underline _ se faz necessario apenas como um lembrete para os devs de que esse campo/atributo so deve ser
//  alterado dentro do metodo da classe, nao é boa pratica ainda usar o # para tornar codigos privados
// molde de conta corrente com metodo sacar(), depositar() aplicavel para todas as contas do banco
class ContaCorrente{
    agencia;
    _saldo;
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
            }else{
            console.log("Você não tem saldo suficiente para sacar a quantia desejada.");
        }
    }

    depositar(valor){
        if(valor <=0) return;
            this._saldo += valor;
        
    }
}

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
console.log('saldo inicial:',contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(2590);
contaCorrenteRicardo.agencia = 1001;
console.log('saldo atual após deposito:', contaCorrenteRicardo._saldo);
contaCorrenteRicardo.sacar(200);
console.log( 'saldo atualizado após o primeiro saque:', contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(-100);
console.log( 'não é possivel fazer deposito negativo, seu saldo atual é de:', contaCorrenteRicardo._saldo)
console.log( contaCorrenteRicardo);

const valorSacado = contaCorrenteRicardo.sacar(1000);

console.log('Saldo após o valorSacado:',contaCorrenteRicardo);