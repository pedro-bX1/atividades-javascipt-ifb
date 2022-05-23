/*
1. Corrija todos os erros do seguinte código TypeScript, de modo que ele compile corretamente:

let sistema : string = 'Ubuntu';
let versao : string = 19.10;
let lts : boolean = 1;
console.log(`${sistema}, versão ${versao}, ${lts? 'LTS' : ''}`);

let pi = '3.14159';
let tau = pi * 2;
console.log(`${tau} é igual a ${pi} vezes dois.`);
*/

let sistema : string = 'Ubuntu';
let versao : string = '19.10';
let lts : boolean = true;
console.log(`${sistema}, versão ${versao}, ${lts? 'LTS' : ''}`);

let pi : number = 3.14159;
let tau = pi * 2;
console.log(`${tau} é igual a ${pi} vezes dois.`);