/*
4. Baseado no seguinte código:

let geraFuncao = function(x){
    if(x)
        return () => "V1";
    else
        return () => "V2";
}

let func1 = geraFuncao(true);
let func2 = geraFuncao(false);

Utilize os objetos func1 e func2 para escrever na tela as strings "V1"e "V2", respectivamente. Depois, escreva os mesmos valores a partir de chamadas diretas de geraFuncao, sem a criação de objetos intermediários.
*/

let geraFuncao = function(x){
    if(x)
        return () => "V1";
    else
        return () => "V2";
}

let func1 = geraFuncao(true);
let func2 = geraFuncao(false);
console.log(func1());
console.log(func2());
console.log(geraFuncao(true)());
console.log(geraFuncao()());

