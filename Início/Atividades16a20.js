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
