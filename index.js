import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

console.log('iniciando javascript: programação orientada a objetos');
const cliente1 = new Cliente();

 cliente1.nome ="Liliane";
 cliente1.cpf ="11122233309";
// console.log(cliente1);

const cliente2 = new Cliente;
cliente2.nome ="Ricardo";
cliente2.cpf ="88822233309";
// console.log(cliente2);


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente2;
contaCorrenteRicardo.depositar(400);
console.log(contaCorrenteRicardo);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 1002;
conta2._saldo = 10;


contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);
console.log(contaCorrenteRicardo);

