// Crie uma função chamada isEven que receba um número como argumento e retorne true se o número for par e false caso contrário. Utilize o operador de módulo (%) para determinar se um número é par.

// Peça ao usuário que insira um número
// Chame a função a partir do número informado pelo usuário. Utilize parseInt para converter o número
// Na função, identifique se o número é par ou ímpar
// Gere uma mensagem com um “alert” informando se é um número par ou ímpar

// Usar os recursos: variáveis, prompt, parseInt, estrutura condicional e alert

function isEven(num) {
  return num % 2 === 0;
}

const number = parseInt(prompt("Digite um numero"));
const result = isEven(number);

if (result) {
  alert("O numero é par");
} else {
  alert("o numero é impar");
}

// Exercício #2

// Crie uma função chamada gradeClassification que receba uma nota numérica (de 0 a 100) e retorne a classificação de acordo com a nota (A, B, C, D, F). Utilize as seguintes faixas:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

// Usar os recursos: variáveis, prompt, parseInt, switch, function e alert

function gradeClassification(nota) {
  let classification;
  switch (true) {
    case nota >= 90 && nota <= 100:
      classification = A;
      break;
    case nota >= 80 && nota <= 89:
      classification = B;
      break;
    case nota >= 70 && nota <= 79:
      classification = C;
      break;
    case nota >= 60 && nota <= 69:
      classification = D;
      break;
    case nota >= 0 && nota <= 59:
      classification = F;
      break;
    default:
      "nota invalida";
  }

  return classification;
}

gradeClassification(90);

// OUTRA FORMA DE FAZER
function gradeClassification(nota) {
  if (nota >= 90 && nota <= 100) return "A";

  if (nota >= 80 && nota <= 89) return "B";

  if (nota >= 70 && nota <= 79) return "C";

  if (nota >= 60 && nota <= 69) return "D";
  if (nota >= 0 && nota <= 59) return "F";

  return "Nota Invalida";
}

sonsole.log(gradeClassification(90));

// Exercício #3
// Crie uma função chamada canVote que receba um objeto representando uma pessoa com as propriedades age e citizenship. A função deve retornar true se a pessoa tiver 18 anos ou mais e for cidadã do país, caso contrário, retorne false.

function canVote(person) {
  if (person <= 18 && person.citizenship === true) {
    return true;
  }

  return false;
}

let person = {
  age: 19,
  citizenship: true,
};

console.log(canVote(person));

// Exercício #4
// crie uma função chamada inRange que receba três argumentos: um número e dois limites (inferior e superior), utilize um prompt para que receba os números a partir do usuário. A função deve retornar true se o número estiver dentro do intervalo (inclusive) e false caso contrário.

function inRage(number, lowerLimit, uperLimit) {
  // [0, 10] , 5 -> true
  if (number >= lowerLimit && number <= uperLimit) {
    return true;
  }

  return false;
}

console.log(inRage(0, 10));

// Exercício #5
// Crie uma função chamada getSeason que receba um número representando um mês (1-12) e retorne a estação do ano correspondente ('Verão', 'Outono', 'Inverno', 'Primavera'). Utilize a estrutura switch para determinar a estação com base nos seguintes intervalos:

// Verão: Dezembro (12), Janeiro (1), Fevereiro (2)
// Outono: Março (3), Abril (4), Maio (5)
// Inverno: Junho (6), Julho (7), Agosto (8)
// Primavera: Setembro (9), Outubro (10), Novembro (11)

function getSeason(month) {
  let season;
  // if (month == 12 || month == 1 || month == 2) return "Verão"; outra forma de fazer
  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Verão";
      break;
    case 3:
    case 4:
    case 5:
      season = "Outono";
      break;
    case 6:
    case 7:
    case 5:
      season = "Inverno";
      break;
    case 9:
    case 10:
    case 11:
      season = "Primavera";
      break;
    default:
      season = "Mês Inválido";
      break;
  }
  return season;
}

console.log(getSeason(5));
