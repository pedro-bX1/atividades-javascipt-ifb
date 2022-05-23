/*
8. Recupere o código das funções escritas nas questões 3, 7 e 8 da Lista de Exercícios 2 e 
acrescente a elas os tipos de parâmetro e retorno apropriados, além de marcações de parâmetro opcional 
quando aplicável.
*/

//3
function media3(n1 : number,n2: number,n3: number){	
	return ((n1+n2+n3)/3);
}

console.log("A média aritmética é: "+media3(10,9,6));

//7
function ehPrimo(primo: number){
	
	if (primo%2 == 0 || primo%3 ==0 || primo%7 ==0|| primo%5 ==0 || primo%4 ==0){
		console.log("não é um primo "+ primo);
	}else{
		console.log("é primo "+ primo);
	}
}

let primo : number = 0;

for (let i = 2; i <= 30; i++) {
	primo++;
	ehPrimo(primo);
	
}

//8
function saudacao(frase = 'Olá',nome: string){
	//console.log(`Olá, ${nome}`);
	console.log(`${nome},${frase}`);
}

let fulano = "Fulano"
saudacao('Olá', fulano)
saudacao('Sicrano', 'Bom dia');
saudacao('Beltrano', 'Boa noite');