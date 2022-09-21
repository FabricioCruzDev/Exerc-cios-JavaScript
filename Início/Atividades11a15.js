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

/* ##12​ Faça um algoritmo que calcule o fatorial de um número.*/

console.log('Exercício 12');

function fatorial(n) {
  for (produto = n - 1; produto >= 1; produto--) {
    n *= produto;
  }
  return n;
}

console.log(fatorial(2));

/* ##13 Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

console.log('Exercício 13');

verificaDia(15);

function verificaDia(dia) {
  if (dia > 7) {
    if (dia % 7 === 0 || (dia - 1) % 7 === 0) dia = 1;
  }
  switch (dia) {
    case 1:
    case 7:
      return console.log('Fim de semana');
      break;
    default:
      return console.log('dia válido');
      break;
  }
}

/* ##14 Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
também um default, que retornará uma mensagem de erro no console.*/

console.log('Exercício 14');

verificarProduto('melancia');

function verificarProduto(fruta) {
  switch (fruta) {
    case 'maçã':
      return console.log('Não vendemos esta fruta aqui');
      break;

    case 'kiwi':
      return console.log('Estamos com escassez de kiwis');
      break;

    case 'melancia':
      return console.log('Aqui está, são 3 reais o quilo');
      break;

    default:
      return console.log('Erro - você digitou uma opção inválida');
      break;
  }
}

/* ##15 Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
“Não trabalhamos com este tipo de automóvel aqui”. */

console.log('Exercício 15');

verificaCompra('luxo');

function verificaCompra(modelo) {
  switch (modelo) {
    case 'sedan':
    case 'motocicleta':
    case 'caminhonetes':
      return console.log('Tem certeza que não prefere esse modelo?');
      break;
    case 'hatch':
      return console.log('Compra efetuada com sucesso');
      break;
    default:
      return console.log('Não trabalhamos com este tipo de automóvel aqui');
      break;
  }
}
