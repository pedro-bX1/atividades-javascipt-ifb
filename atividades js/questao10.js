/*
10. Escreva a função geraMultiplicador, de modo o resultado de:

let mult3 = geraMultiplicador(3);
let mult5 = geraMultiplicador(5);

console.log(mult3(10), mult5(5), geraMultiplicador(8)(10));
Seja:

30 25 80
*/

function geraMultiplicador(x){
    return function(y){
        return x*y
    }
}

let mult3 = geraMultiplicador(3);
let mult5 = geraMultiplicador(5);

console.log(mult3(10), mult5(5), geraMultiplicador(8)(10));