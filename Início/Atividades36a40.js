/* ##36  ) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

console.log('Exercício 36');

const vect = [1, 2, 3, 5, 10, 13];
let n = 2;

console.log(
  `Primeiro Array: ${multiplicar(
    n,
    vect
  )}\nSegundo Array: ${multiplicarSelecionados(n, vect)}`
);

function multiplicar(n, vect) {
  let vectResultado = [];
  for (i in vect) {
    vectResultado.push(n * vect[i]);
  }
  return vectResultado;
}

function multiplicarSelecionados(n, vect) {
  let vectResultado = [];
  for (i in vect) {
    if (vect[i] > 5) vectResultado.push(n * vect[i]);
  }
  return vectResultado;
}

/* ##37  ) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

let termos = 5;
let primeiroTermo = 2;
let razao = 3;

const progressaoAritmetica = (n, a1, r) => {
  let vectPa = [a1];
  for (i = 0; i < n - 1; i++) {
    a1 += r;
    vectPa.push(a1);
  }
  return vectPa.toString();
};

const progressaoGeometrica = (n, a1, r) => {
  let vectPg = [a1];
  for (i = 0; i < n - 1; i++) {
    a1 *= r;
    vectPg.push(a1);
  }
  return vectPg.toString();
};

console.log(
  `\nExercício 37\n\nProgressão Aritmética: ${progressaoAritmetica(
    termos,
    primeiroTermo,
    razao
  )}`
);
console.log(
  `\nProgressão Geométrica: ${progressaoGeometrica(
    termos,
    primeiroTermo,
    razao
  )}`
);
