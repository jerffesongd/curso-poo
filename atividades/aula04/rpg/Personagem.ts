import { Item } from "./Item";
import { Equipamento } from "./Equipamento";
import { Nivel } from "./Nivel";

// Definição da classe Personagem
class Personagem {
    nome: string;
    item: Item;
    eqpCabeca: Equipamento;
    eqpCorpo: Equipamento;
    eqpMao: Equipamento;
    cpAtual: number;
    nivel: Nivel;

    constructor(nome: string, item: Item, eqpCabeca: Equipamento, eqpCorpo: Equipamento, eqpMao: Equipamento, cpAtual: number, nivel: Nivel) {
        this.nome = nome;
        this.item = item;
        this.eqpCabeca = eqpCabeca;
        this.eqpCorpo = eqpCorpo;
        this.eqpMao = eqpMao;
        this.cpAtual = cpAtual;
        this.nivel = nivel;
    }

    // Método para pegar um item
    pegarItem(item: Item): void {
        this.item = item;
    }

    // Método para vestir um equipamento na cabeça
    vestirEquipamentoCabeca(equipamento: Equipamento): void {
        this.eqpCabeca = equipamento;
    }

    // Método para vestir um equipamento no corpo
    vestirEquipamentoCorpo(equipamento: Equipamento): void {
        this.eqpCorpo = equipamento;
    }

    // Método para vestir um equipamento na mão
    vestirEquipamentoMao(equipamento: Equipamento): void {
        this.eqpMao = equipamento;
    }

    // Método para adicionar experiência ao personagem
    xpObtida(xp: number): void {
        this.cpAtual += xp;
    }
}