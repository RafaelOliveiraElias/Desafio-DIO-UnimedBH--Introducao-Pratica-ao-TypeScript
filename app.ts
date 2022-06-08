// desafio 1: 
let employee : { code: number, name: string } = {
  code: 10,
  name: "John"
};

//desafio 2: 

enum profissao {
  Atriz,
  Padeiro
}

interface IUsers {
  nome: string;
  idade: number;
  profissao: profissao;
}

let pessoa1: IUsers = {
  nome : "maria",
  idade : 29,
  profissao : profissao.Atriz,
}

let pessoa2: IUsers  = {
  nome : "roberto",
  idade : 19,
  profissao : profissao.Padeiro,
}

let pessoa3: IUsers  = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4 : IUsers  = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}

//desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let saldo = 0

function somarAoSaldo(soma: number) {
    saldo += soma
    campoSaldo.innerHTML = saldo.toString();
}

function limparSaldo() {
    saldo = 0
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});