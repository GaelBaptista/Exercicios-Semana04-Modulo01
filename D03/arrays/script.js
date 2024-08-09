const frutas = ["maçã", "banana", "laranja"];
console.log(frutas);
console.log(frutas[0]);

//saber  o tamanho de um array .length
console.log(frutas.length);
// serve tambem com string
const string = "string";
console.log(string.length);

// push ele adiciona um ou mais elementeos ao final do array
const frutasMais = ["maçã", "banana"];
frutasMais.push("laranja");
console.log(frutasMais);

// pop remove sempre o ultimo elemento do  array

const frutasMenos = ["maçã", "banana", "laranja"];
console.log(frutasMenos);

const frutaRemovida = frutasMenos.pop();
console.log(frutaRemovida, "removida");

// unshift: Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.
const frutasUnshift = ["maçã", "banana"];

frutas.unshift("morango");

console.log(frutasUnshift);

// shift: Remove o primeiro elemento do array e retorna esse elemento. Se o array estiver vazio, shift retorna undefined.
const frutasShift = ["morango", "maçã", "banana"];

const primeiraFruta = frutas.shift();

console.log(frutasShift); // ["maçã", "banana"]

console.log(primeiraFruta);
