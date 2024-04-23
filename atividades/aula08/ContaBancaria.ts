import { Titular } from "./Titular";

export class ContaBancaria {
    numero: string;
    private saldo: number = 0;
    titular: Titular;

    getSalgo() {
        return this.saldo;
    }

    setSaldo(valorRecebido: number) {
        this.saldo += valorRecebido;
    }
}