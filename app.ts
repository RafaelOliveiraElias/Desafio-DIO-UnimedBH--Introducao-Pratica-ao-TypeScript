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