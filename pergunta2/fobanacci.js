
//  2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será
// a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um
// programa na linguagem que desejar onde, informado um número, ele calcule a sequência de
// Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//  IMPORTANTE:
//  Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser
// previamente definido no código;


var numeroInformado = 34;
var numerosFibonacci = [0, 1];
var first = 0;
var second = 1;

while(true) {
	if(numerosFibonacci[first] > numeroInformado || numeroInformado < 0) {
		console.log("NÂO Pertence a sequência de Fibonacci");
		break;
	}
	if(numerosFibonacci[first] == numeroInformado) {
		console.log("Pertence a sequência de Fibonacci");
		break;
	}
	numerosFibonacci.push(numerosFibonacci[first] + numerosFibonacci[second])
	first++;
	second++;
}
