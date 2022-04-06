import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

console.log('iniciando javascript: programação orientada a objetos');
const cliente1 = new Cliente();

 cliente1.nome ="Liliane";
 cliente1.cpf ="11122233309";
console.log(cliente1);

const cliente2 = new Cliente;
cliente2.nome ="Ricardo";
cliente2.cpf ="88822233309";
console.log(cliente2);


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

