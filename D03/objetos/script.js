function dormir() {
  console.log("dormindo");
}

const usuario = {
  usurname: "gael",
  foto: "url",
  idade: 30,
  saudacao: function () {
    dormir();
    // consigo chamar uma função fora do objeto pra dentro do objeto
    return `olá meu nome é ${this.usurname}`;
    // this pega usuario poderia ser usuario.usurname mas pra quando trocar o nome do objeto ja pegar
  },
  comer: function () {
    return `${this.usurname} está comendo`;
  },
};

console.log(usuario.comer());
console.log(usuario.saudacao());

// outros exemplos

const pessoa = {
  nome: "João",
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

pessoa.saudacao(); // Olá, meu nome é João
// Função sozinha (contexto global):
// Quando uma função é chamada fora de um objeto, this normalmente se refere ao objeto global (em browsers, seria window).

function mostrarThis() {
  console.log(this);
}

mostrarThis(); // No browser, imprime o objeto window
// Uso em construtores (com new):
// Em uma função construtora, this refere-se ao novo objeto que está sendo criado.

function Pessoa(nome) {
  this.nome = nome;
}

const pessoa1 = new Pessoa("Maria");
console.log(pessoa1.nome); // Maria
// Arrow Functions:
// Em funções de seta (arrow functions), this não se vincula ao contexto da função, mas sim ao contexto léxico onde a função foi definida.

const objeto = {
  nome: "Carlos",
  saudacao: () => {
    console.log(this.nome);
  },
};

objeto.saudacao(); // undefined, pois o this não aponta para o objeto objeto
// Manipulação explícita de this:
// Você pode manipular o valor de this usando métodos como .bind(), .call() e .apply().

function saudacao() {
  console.log(`Olá, meu nome é ${this.nome}`);
}

const pessoa2 = { nome: "Ana" };
saudacao.call(pessoa2); // Olá, meu nome é Ana
