class Mago {

    hp: number;
    mp: number;
    habilidades: string[];

    constructor(healthPoints: number, magicPoints: number, habilidades: string[]) {

        this.hp = healthPoints;
        this.mp = magicPoints;
        this.habilidades =  habilidades;

    }

    usarHabilidade(habilidadeUsada: string) {

        if ( habilidadeUsada == 'Lanca-Fogo') {
            if (this.mp < 12) {
                console.log('MP Insuficiente');
            }
            console.log('Habilidade Lança de Fogo Usada com Sucesso.');
            this.mp -= 12;
        } else if ( habilidadeUsada == 'Bola-Fogo') {
            if (this.mp < 7) {
                console.log('MP Insuficiente');
            }
            console.log('Habilidade Bola de Fogo Usada com Sucesso.');
            this.mp -= 7;
        } else if ( habilidadeUsada == 'Chama-Reveladora') {
            // Não é necessário MP
            console.log('Habilidade Chama Reveladora Usada com Sucesso.');
        } else if ( habilidadeUsada == 'Lanca-Gelo') {
            if (this.mp < 30) {
                console.log('MP Insuficiente');
            }
            console.log('Habilidade Lança de Gelo Usada com Sucesso.');
            this.mp -= 30;
        } else if ( habilidadeUsada == 'Tempestade-Raios') {
            if (this.mp < 59) {
                console.log('MP Insuficiente');
            }
            console.log('Habilidade Tempestade de Raios Usada com Sucesso.');
            this.mp -= 59;
        }

        console.log(this); // Imprime o dados do Mago
    }

}

let merlim = new Mago(300, 150, ['Lanca-Fogo', 'Tempestade-Raios']);
merlim.usarHabilidade('Tempestade-Raios');

let zatana = new Mago(300, 150, ['Chama-Reveladora', 'Tempestade-Raios', 'Bola-Fogo']);
zatana.usarHabilidade('Bola-Fogo');