/* ##16 Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3.*/

console.log('Exercício 16');

console.log(calculadora(2, '/', 2));

function calculadora(n1, operacao, n2) {
  switch (operacao) {
    case '+':
      return n1 + n2;
      break;

    case '-':
      return n1 - n2;
      break;

    case '*':
      return n1 * n2;
      break;

    case '/':
      return n1 / n2;
      break;

    default:
      return (operacao = 'Operação inválida');
  }
}

/* ##17 Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário.*/

console.log('Exercício 17');

console.log(`Seu novo salário será: ${calculaNovoSalario('b', 1000)}`);

function calculaNovoSalario(plano, salarioAtual) {
  switch (plano) {
    case 'a':
      return salarioAtual * (1 + 0.1);
      break;

    case 'b':
      return salarioAtual * (1 + 0.15);

    case 'c':
      return salarioAtual * (1 + 0.2);
      break;

    default:
      return (plano = 'Plano inválido');
      break;
  }
}

/* ##18 Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.*/

console.log('Exercício 18');

lerNumero(4);

function lerNumero(numero) {
  switch (numero) {
    case 0:
      console.log('zero');
      break;
    case 1:
      console.log('um');
      break;
    case 2:
      console.log('dois');
      break;
    case 3:
      console.log('três');
      break;
    case 4:
      console.log('quatro');
      break;
    case 5:
      console.log('cinco');
      break;
    case 6:
      console.log('seis');
      break;
    case 7:
      console.log('sete');
      break;
    case 8:
      console.log('oito');
      break;
    case 9:
      console.log('nove');
      break;
    case 10:
      console.log('dez');
      break;
    default:
      console.log('Número fora do intervalo');
      break;
  }
}

/* ##19 cardápio de uma lanchonete:
mplemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

console.log('Exercício 19');

calcularCompra(100, 2);

function calcularCompra(codigo, quantidade) {
  let produto = '';
  let valorProduto = 0.0;
  switch (codigo) {
    case 100:
      produto = 'Cachorro Quente';
      valorProduto = 3.0;
      break;
    case 200:
      produto = 'Hambúrguer Simples';
      valorProduto = 4.0;
      break;
    case 300:
      produto = 'Cheeseburguer';
      valorProduto = 5.5;
      break;
    case 400:
      produto = 'Bauru';
      valorProduto = 7.5;
      break;
    case 500:
      produto = 'Refrigerante';
      valorProduto = 3.5;
      break;
    case 600:
      produto = 'suco';
      valorProduto = 2.8;
      break;
    default:
      console.log('Produto inexistente');
      break;
  }
  let valorTotal = quantidade * valorProduto;
  console.log(
    `${produto}. Valor: ${valorProduto.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}. Quantidade: ${quantidade}. Valor Total: ${valorTotal.toLocaleString(
      'pt-BR',
      { style: 'currency', currency: 'BRL' }
    )}`
  );
}

/* ##20 Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

console.log('Exercício 20');

contadorDeNotas(378);

function contadorDeNotas(quantia) {
  const valorNotas = [100, 50, 10, 5, 1];
  for (i = 0; i < valorNotas.length; i++) {
    if (valorNotas[i] <= quantia) {
      let quantidade = Math.floor(quantia / valorNotas[i]);
      quantia %= valorNotas[i];
      console.log(`${quantidade} nota(s) de ${valorNotas[i]} `);
    }
  }
}
