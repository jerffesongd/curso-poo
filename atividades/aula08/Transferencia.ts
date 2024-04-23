import { ContaBancaria } from "./ContaBancaria";

export class Transferencia {

    transferir (
        valor: number,
        contaOrigem: ContaBancaria,
        contaDestino: ContaBancaria
    ) {
        contaOrigem.setSaldo(-valor);
        contaDestino.setSaldo(valor);
    }

}