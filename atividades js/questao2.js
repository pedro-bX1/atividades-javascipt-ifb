/*
2. Aproveitando os mesmos objetos dobra e quadrado da questão anterior, crie um array de operações que começa assim:

let operacoes = [ dobra, quadrado, ... ]

Preencha os itens restantes do array com duas funções anônimas, uma que retorne a metade, e a outra, o negativo do valor passado. Percorra esse array com um loop for chamando todas as funções com um mesmo parâmetro e escrevendo o resultado na tela. Por exemplo, para o parâmetro 8, a saída deve ser:

16
64
4
-8
*/

function fazAlgo(oque, x){
    return oque(x);
}

function dobra(x){
    return x*2 
}

function quadrado(x){
    return Math.pow(x,2)
}

function metade(x){
    return x/2
}

function negativo(x){
    return x*(-1)
}

let operacoes = [ dobra, quadrado, metade, negativo ];

for (let n of operacoes){
  console.log(` ${fazAlgo(n,8)}`);
}
