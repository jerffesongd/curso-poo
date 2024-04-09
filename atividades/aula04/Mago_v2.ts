class Habilidade {
    nome: string;
    mpConsumido: number;

    constructor(nomeHabilidade: string, mpNecessario: number) {
        this.nome = nomeHabilidade;
        this.mpConsumido = mpNecessario;
    }
}

let lancaFogo = new Habilidade('Lanca de Fogo', 7);
let bolaFogo = new Habilidade('Bola de Fogo', 12);
let chamaReveladora = new Habilidade('Chama Reveladora', 0);
let lancaGelo = new Habilidade('Lanca de Gelo', 30);
let tempestadeRaios = new Habilidade('Tempestade de Raios', 59);

class Mago {

    hp: number;
    mp: number;
    habilidades: string[];

    constructor(healthPoints: number, magicPoints: number, habilidades: string[]) {

        this.hp = healthPoints;
        this.mp = magicPoints;
        this.habilidades =  habilidades;

    }

    consegueUsarHabilidade(habilidadeUsada: Habilidade) {
        if(this.mp > habilidadeUsada.mpConsumido) {
            return true;
        } else {
            return false;
        }
    }

    usarHabilidade(habilidadeUsada: Habilidade) {

        if (this.consegueUsarHabilidade(habilidadeUsada)) {
            this.mp -= habilidadeUsada.mpConsumido;
        } else {
            console.log('MP Insuficiente');
        }
        console.log('Habilidade ' + habilidadeUsada.nome + ' Usada com Sucesso.');
        console.log(this); // Imprime o dados do Mago
    }

}

let merlim = new Mago(300, 150, ['Lanca-Fogo', 'Tempestade-Raios']);
merlim.usarHabilidade(tempestadeRaios);

let zatana = new Mago(300, 150, ['Chama-Reveladora', 'Tempestade-Raios', 'Bola-Fogo']);
zatana.usarHabilidade(bolaFogo);