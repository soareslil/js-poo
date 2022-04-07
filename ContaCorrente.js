export class ContaCorrente{
    cliente;
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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}



//early return para validar cedo suas condicoes linha49, da um stop no metodo
// O uso de underline _ se faz necessario apenas como um lembrete para os devs de que esse campo/atributo so deve ser
//  alterado dentro do metodo da classe, nao é boa pratica ainda usar o # para tornar codigos privados
// molde de conta corrente com metodo sacar(), depositar() aplicavel para todas as contas do banco