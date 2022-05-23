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
var sistema = 'Ubuntu';
var versao = '19.10';
var lts = true;
console.log(sistema + ", vers\u00E3o " + versao + ", " + (lts ? 'LTS' : ''));
var pi = 3.14159;
var tau = pi * 2;
console.log(tau + " \u00E9 igual a " + pi + " vezes dois.");
