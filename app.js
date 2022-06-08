"use strict";
// desafio 1: 
var employee = {
    code: 10,
    name: "John"
};
//desafio 2: 
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
})(profissao || (profissao = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz,
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro,
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
//desafio 3
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
;
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldo = 0;
function somarAoSaldo(soma) {
    saldo += soma;
    campoSaldo.innerHTML = saldo.toString();
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
