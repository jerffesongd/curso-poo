class Pessoa {
    protected nome: string;
    protected cpf: string;
    protected dataNascimento: Date;

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getCPF(): string {
        return this.cpf;
    }

    setCPF(cpf: string): void {
        this.cpf = cpf;
    }

    getDataNascimento(): Date {
        return this.dataNascimento;
    }

    setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }
}

class Aluno extends Pessoa {
    constructor(nome: string, cpf: string, dataNascimento: Date) {
        super(nome, cpf, dataNascimento);
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, cpf: string, dataNascimento: Date) {
        super(nome, cpf, dataNascimento);
    }
}

class Escola {
    alunos: Aluno[];
    funcionarios: Funcionario[];

    constructor() {
        this.alunos = [];
        this.funcionarios = [];
    }

    addAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    addFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    listarMembros() {
        this.imprmir(this.alunos.concat(this.funcionarios))
    }

    private imprmir(pessoas: Pessoa[]): void {
        pessoas.forEach(pessoa => {
            console.log(`Nome: ${pessoa.getNome()}, CPF: ${pessoa.getCPF()}, Data de Nascimento: ${pessoa.getDataNascimento()}`);
        });
    }
}


let escola = new Escola();
var entrada = require('prompt-sync');


let op = "";

do {

    console.log("1 - Add Aluno\n2 - Add Funcionario\n3 - Imprimir Membros\n0 - Sair")
    op = entrada("Escola a opção");

    switch (op) {
        case "1":
            let nomeAluno = entrada("Digite o Nome do aluno: ");
            let cpfAluno = entrada("Digite o CPF do aluno: ");
            let dnluno = entrada("Digite a Data de Nascimento do aluno: ");
            escola.addAluno(new Aluno(nomeAluno, cpfAluno, dnluno));
            break;

        case "2":
            let nomeFuncionario = entrada("Digite o Nome do Funcionario: ");
            let cpfFuncionario = entrada("Digite o CPF do Funcionario: ");
            let dnFuncionario = entrada("Digite a Data de Nascimento do Funcionario: ");
            escola.addFuncionario(new Funcionario(nomeFuncionario, cpfFuncionario, dnFuncionario));
            break;

        case "3":
            escola.listarMembros();
            break;
        
        default:
            console.log("Opção inválida")
        

    }

} while(op != "0")