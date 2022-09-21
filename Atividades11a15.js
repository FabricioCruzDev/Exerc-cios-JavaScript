/*  ##11 ​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

console.log('Exercício 11');

function eBissexto(ano) {
  if (ano % 400 === 0) {
    return true;
  } else if (ano % 4 === 0 && ano % 100 !== 0) {
    return true;
  } else return false;
}

console.log(`É ano bissexto? ${eBissexto(8)}`);

/* ##11​ Faça um algoritmo que calcule o fatorial de um número.*/

console.log('Exercício 12');

function fatorial(n) {
  for (produto = n - 1; produto >= 1; produto--) {
    n *= produto;
  }
  return n;
}

console.log(fatorial(2));
