// Definição da classe Nivel
export class Nivel {
    nivelAtual: number;

    constructor(nivelAtual: number) {
        this.nivelAtual = nivelAtual;
    }

    // Método para calcular a experiência necessária para o próximo nível
    xpProximoNivel(): number {
        return this.nivelAtual * 100; // Exemplo simples de cálculo
    }
}