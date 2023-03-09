
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um
// programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias
// devem ser ignorados no cálculo da média;


const url = 'https://raw.githubusercontent.com/Vitor-HenriqueAS/perguntas/main/pergunta3/faturamento.json';

fetch(url)
  .then(response => response.json())
  .then(json_data => {
    const faturamentoDiario = json_data.faturamentoDiario;
    const valores = Object.values(faturamentoDiario);
    const valoresNumeros = valores.map(Number); // converter para números

		const menorFat = Math.min(...valoresNumeros);
		const maiorFat = Math.max(...valoresNumeros);

		const diasSemFat = Object.entries(faturamentoDiario)
			.filter(([dia, valor]) => valor === undefined || valor === "0")
			.map(([dia, valor]) => dia);
		const mediaMensal = diasSemFat.reduce((soma, valor) => soma + valor, 0) / diasSemFat.length;
		const diasAcimaDaMedia = diasSemFat.filter(valor => valor > mediaMensal).length;

		console.log(`Menor faturamento diário: R$ ${menorFat}`);
		console.log(`Maior faturamento diário: R$ ${maiorFat}`);
		console.log(`Média mensal de faturamento diário: R$ ${mediaMensal.toFixed(2)}`);
		console.log(`Número de dias no mês em que o faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`);

  })
  .catch(error => console.error(error));
