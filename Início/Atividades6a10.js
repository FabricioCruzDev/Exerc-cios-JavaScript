/* ##6​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

console.log('Exercício 6');

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  const montante = capitalInicial * (1 + (taxaJuros / 100) * tempoAplicacao);
  return console.log(
    `Montante da aplicação em juros simples: ${montante.toLocaleString(
      'pt-BR',
      { style: 'currency', currency: 'BRL' }
    )}`
  );
}

jurosSimples(1000, 10, 3);

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
  const montante = capitalInicial * (1 + taxaJuros / 100) ** tempoAplicacao;
  return console.log(
    `Montante da aplicação em juros compostos: ${montante.toLocaleString(
      'pt-BR',
      { style: 'currency', currency: 'BRL' }
    )}`
  );
}
jurosCompostos(1000, 10, 3);

/* ## 07 ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

console.log('Exercício 7');

function bhaskara(ax2, bx, c) {
  let delta = bx * bx - 4 * ax2 * c;
  if (delta < 0) return console.log('Delta é negativo');
  let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
  let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
  return console.log(
    `Delta é igual a ${delta} Os vetores são: x1 = ${x1.toFixed(
      2
    )} e ${x2.toFixed(2)}`
  );
}

bhaskara(3, -5, 12);

/* ##8 ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

console.log('Exercício 8');

const pontuacao = [];
let menorPontuacao = 2000;
let melhorPontuacao = 0;
let recordes = -1;

function adicionarPontuacao(pontuacaoAtual) {
  pontuacao[pontuacao.length] = pontuacaoAtual;

  console.log(`Histórico de pontuação = ${pontuacao}`);
  for (i = 0; i < pontuacao.length; i++) {
    if (pontuacaoAtual > melhorPontuacao) {
      melhorPontuacao = pontuacaoAtual;
      recordes++;
    }
    if (pontuacaoAtual < menorPontuacao) {
      menorPontuacao = pontuacaoAtual;
    }
  }
  return console.log(
    `Recordes = ${recordes} Menor pontuação: ${menorPontuacao}`
  );
}
adicionarPontuacao(8);
adicionarPontuacao(4);
adicionarPontuacao(10);
adicionarPontuacao(8);
adicionarPontuacao(12);
adicionarPontuacao(4);
adicionarPontuacao(12);
adicionarPontuacao(2);
adicionarPontuacao(15);
adicionarPontuacao(10);

/* ##9​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

console.log('Exercício 9');

function verificarNota(nota) {
  if (nota < 38) {
    console.log(`Aluno reprovado com a nota: ${nota}`);
  } else if (nota % 5 > 2) {
    let notaArredondada = nota - (nota % 5) + 5;
    console.log(`Aluno aprovado com a nota: ${notaArredondada}`);
  } else {
    console.log(`Aluno aprovado com a nota: ${nota}`);
  }
}

verificarNota(94);

/* ##10 ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

console.log('Exercício 10');

function divisivelPorTres(n) {
  return n % 3 === 0 ? true : false;
}

console.log(`É divisível por 3. ${divisivelPorTres(42)}`);
