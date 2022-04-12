import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

console.log('iniciando javascript: programação orientada a objetos');
const cliente1 = new Cliente("Ricardo", 11122233390);

const cliente2 = new Cliente("Alice", 99977766654);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(5000);
const conta2 = new ContaCorrente(cliente2, 1002);

let valor = 200;
contaCorrenteRicardo.transferir(valor,conta2);

console.log('ESSE É O CLIENTE 1', contaCorrenteRicardo);
console.log('ESSE É O CLIENTE 2', conta2);
console.log('ESSE É O NUMERO DE CONTAS EXISTENTES:', ContaCorrente.numeroDeContas);