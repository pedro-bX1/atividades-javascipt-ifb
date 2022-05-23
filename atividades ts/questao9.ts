/*
9. Dado o seguinte código:

let codigos : number[] = [12, 13, 14, 21, 22, 25, 28, 31];

//seu código aqui

console.log(codigos.filter(filtro));
Crie a variável filtro, com o tipo apropriado, de modo a fazer funcionar o código acima.
*/

let codigos : number[] = [12, 13, 14, 21, 22, 25, 28, 31];

let filtro = function (x: number){
    if (x>11){
        return x
    }
}

console.log(codigos.filter(filtro));
