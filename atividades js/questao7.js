/*
7. Use map para transformar um array de objetos contendo o campo nome em uma lista de strings com esses nomes.
Por exemplo, para o código:

let lista = [ 
    {nome: 'Bruna', idade: 28},
    {nome: 'Lucas', idade: 22},
    {nome: 'Martim', idade: 24},
    {nome: 'Júlia', idade: 31},
];

// let lista2 = ...
console.log(lista2);
A saída deve ser:
[ 'Bruna', 'Lucas', 'Martim', 'Júlia' ]
*/

let lista = [ 
    {nome: 'Bruna', idade: 28},
    {nome: 'Lucas', idade: 22},
    {nome: 'Martim', idade: 24},
    {nome: 'Júlia', idade: 31},
];

let nomes = lista.map(x => x.nome);
console.log(nomes);