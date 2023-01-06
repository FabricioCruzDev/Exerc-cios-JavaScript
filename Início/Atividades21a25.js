/* ##21 Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

console.log('Exercício 21');

calculaValorPlano(78);

function calculaValorPlano(idade) {
  let valor = 100;
  if (idade < 10) {
    valor += 80;
  } else if (10 <= idade && idade <= 30) {
    valor += 50;
  } else if (30 < idade && idade <= 60) {
    valor += 95;
  } else {
    valor += 130;
  }

  console.log(`O valor do plano é de: R$${valor}`);
}

/* ##22 Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

console.log('Exercício 22');

calculaValorAnuidade(13);

function calculaValorAnuidade(mes) {
  let valor = 100;
  if (mes > 0 && mes <= 12) {
    let valorTotal = valor * Math.pow(1 + 0.05, mes - 1);
    console.log(`O valor o ser pago é R$${valorTotal}`);
  } else {
    console.log('Você digitou um mês inválido');
  }
}

/* ##23​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

console.log('Exercício 23');

verificaAluno(1, 1, 3, 1);

function verificaAluno(codigoAluno, nota1, nota2, nota3) {
  while (codigoAluno > 0) {
    const pesoMaior = 4;
    const pesoRestante = 3;
    let notaPeso1,
      notaPeso2,
      notaPeso3 = 0;
    if (nota1 > nota2 && nota1 > nota3) {
      notaPeso1 = nota1 * pesoMaior;
      notaPeso2 = nota2 * pesoRestante;
      notaPeso3 = nota3 * pesoRestante;
    } else if (nota2 > nota1 && nota2 > nota3) {
      notaPeso1 = nota2 * pesoMaior;
      notaPeso2 = nota1 * pesoRestante;
      notaPeso3 = nota3 * pesoRestante;
    } else {
      notaPeso1 = nota3 * pesoMaior;
      notaPeso2 = nota1 * pesoRestante;
      notaPeso3 = nota2 * pesoRestante;
    }
    const mediaPonderada =
      (notaPeso1 + notaPeso2 + notaPeso3) / (pesoMaior + pesoRestante);
    if (mediaPonderada >= 5) {
      return console.log(
        `O aluno: ${codigoAluno}, foi APROVADO com as notas ${nota1}, ${nota2} e ${nota3} e sua média foi: ${mediaPonderada}`
      );
    } else {
      return console.log(
        `O aluno: ${codigoAluno}, foi REPROVADO com as notas ${nota1}, ${nota2} e ${nota3} e sua média foi: ${mediaPonderada}`
      );
    }
    codigoAluno -= codigoAluno + 1;
  }
}
/*24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

console.log('Exercício 24');

count = 0;
while (count < 11) {
  console.log(`${count + 1}- Hello World!`);
  count++;
}

/*25) ​Escrever um programa para exibir os números de 1 até 50 na tela. */

console.log('Exercício 24');

count = 0;
while (count < 50) {
  console.log(count + 1);
  count++;
}
