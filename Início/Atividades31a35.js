/* ##31   Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

console.log('Exercício 31');

const vect = [1, 2, -5, -10, -5, 30];
count = 0;

for (i = 0; i < vect.length; i++) {
  if (vect[i] < 0) count++;
}

console.log(`Há um total de ${count} números negativos`);

/* ##32  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

console.log('Exercício 32');

function Media(vect) {
  let soma = 0;
  for (i = 0; i < vect.length; i++) {
    soma += vect[i];
  }
  media = soma / vect.length;
  return media;
}

console.log(Media(vect));

/* ##33)  Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

console.log('Exercício 33');

const vetorInteiro = [1, 2, 3, 4, 5];
const vetorString = ['um', 'dois', 'três', 'quatro', 'cinco'];
const vetorDouble = [1.1, 2.2, 3.3, 4.4, 5.5];

const StringInteiro = vetorString.concat(vetorInteiro);
const Todos = vetorString.concat(vetorInteiro, vetorDouble);

console.log(
  `Vetor de String seguido de um vetor de inteiros: ${StringInteiro}`
);
console.log(`Todos os vetores concatenados: ${Todos}`);

/* ##34)  Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

console.log('Exercício 34');

const strA = 'Consolação';
const strB = 'Ali';

function Comparar(strA, strB) {
  return strA.toLowerCase().includes(strB.toLowerCase());
}

console.log(Comparar(strA, strB));

/* ##35)  Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
*/

console.log('Exercício 35');

let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

console.log(`vetorPilha: ${vetorPilha}`);
console.log(`vetorAdiciona: ${vetorAdiciona}`);
console.log('Adicionando o vetorAdiciona ao vetorPilha: ');
for (i = 0; i < vetorAdiciona.length; i++) {
  vetorPilha.push(vetorAdiciona[i]);
}

console.log(vetorPilha);
