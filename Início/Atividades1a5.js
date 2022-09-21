/* ##1 Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

console.log('Exercício 1');

function soma(a, b) {
  return a + b;
}
console.log(soma(2, 2));

function subtracao(a, b) {
  return a - b;
}
console.log(subtracao(8, 2));

function multiplicacao(a, b) {
  return a * b;
}
console.log(multiplicacao(2, 2));

function divisao(a, b) {
  return a / b;
}
console.log(divisao(9, 3));

/* ##2 Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
  triângulo).*/

console.log('Exercício 2');

function verificaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return console.log('Triângulo Equilátero');
  } else if (a === b || a === c || b === c) {
    return console.log('Triângulo Isósceles');
  } else {
    return console.log('Triângulo Escaleno');
  }
}

verificaTriangulo(2, 2, 2);
verificaTriangulo(2, 2, 9);
verificaTriangulo(3, 2, 2);
verificaTriangulo(2, 4, 3);

// ##3 Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

console.log('Exercício 3');

function exponenciacao(b, e) {
  return b ** e;
}
console.log(exponenciacao(3, 2));

/* ##4 Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

console.log('Exercício 4');

function modulo(a, b) {
  return console.log(a % b);
}
modulo(5, 2);

/* ##5 ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

console.log('Exercício 4');

let a = 0.1 + 0.2;
function realConvert(a) {
  return console.log(
    a.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  );
}
realConvert(a);
