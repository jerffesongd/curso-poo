class Atirador {

    quantidadeMunicao = 0;

    carregarMunicao(municao: number) {
        this.quantidadeMunicao += municao;
    }

    atirar(quantidadeDeTiros: number) {
        if (quantidadeDeTiros > 0) {
            for (let i: number = 0; i < quantidadeDeTiros; i++) {
                if (this.quantidadeMunicao > 0) {
                    console.log('Tiro Executado');
                    this.quantidadeMunicao--;
                } else {
                    console.log('Munição insuficiente');
                }
            }
        }
    }
}

let sneper = new Atirador();
sneper.carregarMunicao(20);
sneper.atirar(10);