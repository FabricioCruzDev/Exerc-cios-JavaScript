/* ##26  Fazer um programa para encontrar todos os pares entre 1 e 100*/

console.log('Exercício 26');

for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* ##27 Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

console.log('Exercício 27');

c1 = new Crianca('Ana', 100, 1);
c2 = new Crianca('Caio', 102, 1);

function Comparar(c1, c2) {
  let criancaMenor, criancaMaior;
  if (c1.altura != c2.altura) {
    if (c1.altura > c2.altura) {
      criancaMaior = c1;
      criancaMenor = c2;
    } else {
      criancaMaior = c2;
      criancaMenor = c1;
    }
    if (criancaMenor.taxaCrescimento > criancaMaior.taxaCrescimento) {
      const anos = () => {
        for (i = 1; criancaMenor.altura < criancaMaior.altura; i++) {
          criancaMenor.CalculaCrescimento(i);
          criancaMaior.CalculaCrescimento(i);
        }
        return i;
      };
      return `${criancaMenor.nome} vai ultrapassar ${
        criancaMaior.nome
      } em ${anos()} ano(s)`;
    } else {
      return `${criancaMaior.nome} sempre será mais alto(a)!`;
    }
  } else {
    return 'As crianças tem a mesma altura';
  }
}

function Crianca(nome, altura, taxaCrescimento) {
  this.nome = nome;
  this.altura = altura;
  this.taxaCrescimento = taxaCrescimento;
  this.CalculaCrescimento = anos => {
    return (this.altura += taxaCrescimento * anos);
  };
}

console.log(Comparar(c1, c2));

/* ##28​ ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

console.log('Exercício 28');

let vect = [1, 2, 25, 26, 28, 13, 40];

const impar = () => {
  var count = 0;
  for (i = 0; i < vect.length; i++) {
    if (vect[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
};

const par = () => {
  var count = 0;
  for (i = 0; i < vect.length; i++) {
    if (vect[i] % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(`${impar()} ímpares`);
console.log(`${par()} pares`);

/* ##29​ ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações.*/

console.log('Exercício 29');

let vect2 = [1, 2, 15, 16, 28, 13, 40, 10, 20, 11, 8];
let dentro = 0;
let fora = 0;

function Contar() {
  for (i = 0; i < vect2.length; i++) {
    if (vect2[i] >= 10 && vect2[i] <= 20) {
      dentro++;
    } else {
      fora++;
    }
  }
}
Contar();
console.log(`${dentro} números dentro do intervalo`);
console.log(`${fora} números fora do intervalo`);

/* ##30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

console.log('Exercício 30');

let vect3 = [2, 15, 16, 28, 13, 40, -10, 20, 11, 8];
let maior = vect3[0];
let menor = vect3[0];

for (i = 0; i < vect3.length; i++) {
  if (vect3[i] > maior) {
    maior = vect3[i];
  }
  if (vect3[i] < menor) {
    menor = vect3[i];
  }
}
console.log(maior);
console.log(menor);
