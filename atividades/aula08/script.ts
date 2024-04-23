import { ContaBancaria } from "./ContaBancaria";
import { Transferencia } from "./Transferencia";

let conta1 = new ContaBancaria();
conta1.setSaldo(500);

let conta2 = new ContaBancaria();
conta2.setSaldo(1000);

let transferncia = new Transferencia();

console.log("Antes da transferência");
console.log(conta1);
console.log(conta2);

transferncia.transferir(300, conta1, conta2);

console.log("Depois da transferência");
console.log(conta1);
console.log(conta2);