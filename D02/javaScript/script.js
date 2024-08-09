// var numero1 = 10;
// var numero2 = 20;
// var resultado = numero1 % 2;
// //  % operador para resto, isso ajuda a saber se o numero é par ou inpar
// console.log(resultado);

// const variavel1 = 5;
// const variavel2 = "5";

// // operador == (igual a )
// console.log(variavel1 == variavel2);

// const variavel3 = 5;
// const variavel4 = "5";

// // operador === (mesmo valor e tipo variavel1 é numero e a variavel2 é uma string)
// console.log(variavel1 === variavel2);

// const idade = 18;
// const temCadastro = true;
// // operador && ele é maior de 18 anos E tem cadasto
// //  if (idade >= 18 || temCadastro) {  operador || ele é maior de 18 anos OU tem cadasto
// if (idade >= 18 && temCadastro) {
//   console.log("continua o processo");
// } else {
//   console.log("Pedir o cadastro ou informar a idade");
// }

// const cadstro = true;
// console.log(!cadstro);
// //  operador inverte o valor (pesquisar mais sobre)
// if (!cadstro) {
//   console.log("usuario tem cadastro");
// } else {
//   console.log("usuaruio nao tem cadastro");
// }

// SWITCH

// const dia = 3;

// switch (dia) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Segunda - Feira");
//     break;
//   case 3:
//     console.log("Terça - Feira");
//     break;
//   case 4:
//     console.log("Quarta-Feira");
//     break;
//   case 5:
//     console.log("Quinta-Feira");
//     break;
//   case 6:
//     console.log("Sexta-Feira");
//     break;
//   case 7:
//     console.log("Sabado");
//     break;
//   default:
//     console.log("Dia Invalido");
//     break;
// }

// verificador de Idade

// var nome = prompt("Digite seu Nome");
// var idade = parseInt(prompt("Digite sua Idade"));

// if (idade >= 18 && idade < 65) {
//   console.log("Olá " + nome, " você é  maior de Idade: " + idade);
// } else if (idade < 18) {
//   console.log("Olá " + nome, " você é  menor de Idade: " + idade);
// } else {
//   console.log("Você é um idoso");
// }

// FUNÇÕES

// function soma(numero1, numero2) {
//   console.log(numero1 + numero2);
// }

// soma(10, 5);

// CALCULO DE AREA

const largura = parseInt(prompt("Passe a largura do seu terrono"));
const comprimento = parseInt(prompt("Passe a comprimento do seu terrono"));

function calcularArea(largura, comprimento) {
  const resposta = largura * comprimento;
  return resposta;
}

const resposta = calcularArea(largura, comprimento);
alert(resposta);
