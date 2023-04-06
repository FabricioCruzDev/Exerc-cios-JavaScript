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

/* ##23​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

/*24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

/*25) ​Escrever um programa para exibir os números de 1 até 50 na tela. */
