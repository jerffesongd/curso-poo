// Definição da classe Item
export class Item {
    nome: string;
    raridade: number;

    constructor(nome: string, raridade: number) {
        this.nome = nome;
        this.raridade = raridade;
    }
}